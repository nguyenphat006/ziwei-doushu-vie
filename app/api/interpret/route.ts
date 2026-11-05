/**
 * AI 命盘解读接口（开源版自建实现）
 *
 * 请求：POST { chart: ZiweiChart, messages: {role, content}[], locale?: 'vi' | 'zh' }
 * 响应：SSE，每行 `data: {"delta":{"text":"…"}}`，结束 `data: [DONE]`（与 InsightPanel / ChatPanel 的读取方式一致）
 *
 * 模型走 OpenAI 兼容协议（/chat/completions, stream）。在 .env.local 里配置其一：
 *   GEMINI_API_KEY=…            （Google AI Studio 免费额度；GEMINI_MODEL 可选）
 *   DEEPSEEK_API_KEY=…          （DEEPSEEK_MODEL 可选）
 *   AI_BASE_URL / AI_API_KEY / AI_MODEL   （任意 OpenAI 兼容服务）
 * 多个都配置时用 AI_PROVIDER=gemini|deepseek|custom 指定。
 */
import { buildSystemPrompt, validateChart } from '@/lib/ziwei/chart-prompt';
import { normalizeLocale } from '@/lib/i18n/config';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface Provider { name: string; baseUrl: string; apiKey: string; model: string }

function resolveProvider(): Provider | null {
  const env = process.env;
  const all: Record<string, Provider | null> = {
    gemini: env.GEMINI_API_KEY ? {
      name: 'gemini',
      baseUrl: 'https://generativelanguage.googleapis.com/v1beta/openai',
      apiKey: env.GEMINI_API_KEY,
      model: env.GEMINI_MODEL || 'gemini-3.5-flash-lite',
    } : null,
    deepseek: env.DEEPSEEK_API_KEY ? {
      name: 'deepseek',
      baseUrl: 'https://api.deepseek.com',
      apiKey: env.DEEPSEEK_API_KEY,
      model: env.DEEPSEEK_MODEL || 'deepseek-chat',
    } : null,
    custom: env.AI_BASE_URL && env.AI_API_KEY && env.AI_MODEL ? {
      name: 'custom',
      baseUrl: env.AI_BASE_URL.replace(/\/+$/, ''),
      apiKey: env.AI_API_KEY,
      model: env.AI_MODEL,
    } : null,
  };
  const wanted = env.AI_PROVIDER?.toLowerCase();
  if (wanted && wanted in all) return all[wanted];
  return all.gemini ?? all.deepseek ?? all.custom ?? null;
}

const MAX_MESSAGES = 30;
const MAX_MESSAGE_CHARS = 8000;
const MAX_TOTAL_CHARS = 60000;

type ChatMessage = { role: 'user' | 'assistant'; content: string };

function validateMessages(input: unknown): ChatMessage[] | null {
  if (!Array.isArray(input) || input.length === 0) return null;
  const recent = input.slice(-MAX_MESSAGES);
  let total = 0;
  const out: ChatMessage[] = [];
  for (const m of recent) {
    if (!m || (m.role !== 'user' && m.role !== 'assistant') || typeof m.content !== 'string') return null;
    const content = m.content.slice(0, MAX_MESSAGE_CHARS);
    total += content.length;
    if (total > MAX_TOTAL_CHARS) return null;
    if (content.trim()) out.push({ role: m.role, content });
  }
  // 对话需以用户消息结尾
  return out.length && out[out.length - 1].role === 'user' ? out : null;
}

function jsonError(status: number, error: string) {
  return new Response(JSON.stringify({ error }), { status, headers: { 'Content-Type': 'application/json' } });
}

export async function POST(req: Request) {
  let body: { chart?: unknown; messages?: unknown; locale?: unknown };
  try {
    body = await req.json();
  } catch {
    return jsonError(400, 'invalid-json');
  }
  const locale = normalizeLocale(typeof body.locale === 'string' ? body.locale : 'zh');
  const vi = locale === 'vi';

  const provider = resolveProvider();
  if (!provider) {
    return jsonError(503, vi
      ? 'Chưa cấu hình API key cho AI. Thêm GEMINI_API_KEY vào file .env.local rồi khởi động lại server.'
      : '未配置 AI 接口密钥：请在 .env.local 中填写 GEMINI_API_KEY 后重启服务。');
  }
  const chart = validateChart(body.chart);
  if (!chart) return jsonError(400, vi ? 'Dữ liệu lá số không hợp lệ.' : '命盘数据无效。');
  const messages = validateMessages(body.messages);
  if (!messages) return jsonError(400, vi ? 'Nội dung câu hỏi không hợp lệ hoặc quá dài.' : '对话内容无效或过长。');

  let upstream: Response;
  try {
    upstream = await fetch(`${provider.baseUrl}/chat/completions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${provider.apiKey}` },
      body: JSON.stringify({
        model: provider.model,
        stream: true,
        temperature: 0.7,
        messages: [{ role: 'system', content: buildSystemPrompt(chart, locale) }, ...messages],
      }),
      signal: req.signal,
    });
  } catch {
    return jsonError(502, vi ? 'Không kết nối được tới dịch vụ AI.' : '无法连接 AI 服务。');
  }

  if (!upstream.ok || !upstream.body) {
    const detail = await upstream.text().catch(() => '');
    console.error(`[interpret] ${provider.name} ${upstream.status}: ${detail.slice(0, 500)}`);
    const msg = upstream.status === 429
      ? (vi ? 'Đã hết lượt miễn phí của AI (giới hạn theo phút/ngày). Vui lòng thử lại sau.' : 'AI 免费额度已用完（按分钟/天限制），请稍后再试。')
      : upstream.status === 401 || upstream.status === 403
        ? (vi ? 'API key không hợp lệ hoặc không có quyền dùng model này.' : 'API Key 无效或无权使用该模型。')
        : (vi ? `Dịch vụ AI báo lỗi (${upstream.status}).` : `AI 服务出错（${upstream.status}）。`);
    return jsonError(upstream.status === 429 ? 429 : 502, msg);
  }

  // 上游 OpenAI 格式 SSE → 前端约定的 {delta:{text}} 格式；按行缓冲，避免一行被拆在两次读取之间
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();
  const reader = upstream.body.getReader();
  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      const emit = (text: string) =>
        controller.enqueue(encoder.encode(`data: ${JSON.stringify({ delta: { text } })}\n\n`));
      let buffer = '';
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() ?? '';
          for (const raw of lines) {
            const line = raw.trim();
            if (!line.startsWith('data:')) continue;
            const data = line.slice(5).trim();
            if (data === '[DONE]') continue;
            try {
              const text = JSON.parse(data).choices?.[0]?.delta?.content;
              if (typeof text === 'string' && text) emit(text);
            } catch { /* 跳过非 JSON 行 */ }
          }
        }
      } catch (e) {
        console.error('[interpret] stream error', e);
      } finally {
        controller.enqueue(encoder.encode('data: [DONE]\n\n'));
        controller.close();
      }
    },
    cancel() {
      reader.cancel().catch(() => {});
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream; charset=utf-8',
      'Cache-Control': 'no-cache, no-transform',
      Connection: 'keep-alive',
    },
  });
}
