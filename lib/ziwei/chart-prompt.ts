/**
 * 把命盘整理成给 AI 读的纯文本 + 系统提示词（/api/interpret 使用）。
 *
 * 命盘来自客户端，这里只读取结构化字段并做类型/长度检查，
 * 不把客户端的任意字符串原样塞进提示词（姓名不入提示词）。
 */
import type { ZiweiChart, Palace } from './types';
import { STEMS, BRANCHES } from './constants';
import { detectPatterns, getMingGongSummary } from './patterns';
import { localizePattern, localizeMingGongSummary } from '@/lib/i18n/content/patterns';
import { localizeTerm } from '@/lib/i18n/terms';
import type { Locale } from '@/lib/i18n/config';

const CJK_TERM = /^[一-鿿]{1,6}$/;

/** 只接受短的中文术语（星名、宫名等），其余一律丢弃 */
function safeTerm(value: unknown): string {
  return typeof value === 'string' && CJK_TERM.test(value) ? value : '';
}

function safeInt(value: unknown, min: number, max: number): number | null {
  return typeof value === 'number' && Number.isInteger(value) && value >= min && value <= max ? value : null;
}

/** 粗检命盘结构，非法时返回 null */
export function validateChart(input: unknown): ZiweiChart | null {
  if (!input || typeof input !== 'object') return null;
  const c = input as ZiweiChart;
  if (!Array.isArray(c.palaces) || c.palaces.length !== 12) return null;
  if (safeInt(c.mingGongBranch, 0, 11) === null) return null;
  if (!c.birthInfo || safeInt(c.birthInfo.year, 1800, 2200) === null) return null;
  if (!c.lunarInfo || safeInt(c.lunarInfo.yearStem, 0, 9) === null) return null;
  for (const p of c.palaces) {
    if (!p || safeInt(p.branch, 0, 11) === null || !Array.isArray(p.stars) || p.stars.length > 60) return null;
  }
  return c;
}

function palaceLine(p: Palace, locale: Locale): string {
  const tr = (zh: string) => localizeTerm(zh, locale);
  const stem = safeInt(p.stem, 0, 9);
  const ganzhi = `${stem !== null ? tr(STEMS[stem]) : ''}${locale === 'vi' ? ' ' : ''}${tr(BRANCHES[p.branch])}`;
  const name = tr(safeTerm(p.name)) || '?';
  const tags: string[] = [];
  if (p.isMingGong) tags.push(locale === 'vi' ? 'cung Mệnh' : '命宫');
  if (p.isShenGong) tags.push(locale === 'vi' ? 'Thân cư tại đây' : '身宫');
  if (p.isCurrentDaXian) tags.push(locale === 'vi' ? 'đại hạn hiện tại' : '当前大限');

  const fmtStar = (s: Palace['stars'][number]) => {
    const n = safeTerm(s?.name);
    if (!n) return '';
    const parts = [tr(n)];
    const b = safeTerm(s.brightnessRaw);
    if (b) parts.push(`(${tr(b)})`);
    const h = safeTerm(s.siHua);
    if (h) parts.push(locale === 'vi' ? `Hóa ${tr(h)}` : `化${h}`);
    return parts.join(' ');
  };
  const major = p.stars.filter(s => s?.type === 'major').map(fmtStar).filter(Boolean);
  const others = p.stars.filter(s => s?.type !== 'major').map(fmtStar).filter(Boolean);

  const age = Array.isArray(p.daXianAge) && p.daXianAge.every(a => safeInt(a, 0, 150) !== null)
    ? (locale === 'vi' ? ` | đại hạn ${p.daXianAge[0]}–${p.daXianAge[1]} tuổi` : ` | 大限 ${p.daXianAge[0]}–${p.daXianAge[1]} 岁`)
    : '';
  const borrowed = p.isEmpty && Array.isArray(p.borrowedStars) && p.borrowedStars.length
    ? (locale === 'vi'
      ? ` | vô chính diệu, mượn sao cung đối: ${p.borrowedStars.map(s => tr(safeTerm(s))).filter(Boolean).join(', ')}`
      : ` | 空宫，借对宫：${p.borrowedStars.map(safeTerm).filter(Boolean).join('、')}`)
    : '';

  const L = locale === 'vi'
    ? { major: 'Chính tinh', minor: 'Phụ tinh', none: '(không có)' }
    : { major: '主星', minor: '辅星', none: '（无）' };
  return `- ${name} [${ganzhi}]${tags.length ? ` {${tags.join(', ')}}` : ''}${age}${borrowed}\n`
    + `  ${L.major}: ${major.join(', ') || L.none}\n`
    + `  ${L.minor}: ${others.join(', ') || L.none}`;
}

/** 命盘 → 纯文本 */
export function chartToText(chart: ZiweiChart, locale: Locale): string {
  const tr = (zh: string) => localizeTerm(zh, locale);
  const vi = locale === 'vi';
  const b = chart.birthInfo;
  const l = chart.lunarInfo;
  const gender = b.gender === 'female' ? (vi ? 'Nữ' : '女') : (vi ? 'Nam' : '男');
  const lines: string[] = [];

  lines.push(vi ? '## Thông tin' : '## 基本信息');
  lines.push(vi
    ? `- Dương lịch: ${b.day}/${b.month}/${b.year}, giờ ${tr(BRANCHES[safeInt(b.hour, 0, 11) ?? 0])}, ${gender}`
    : `- 公历：${b.year}年${b.month}月${b.day}日 ${BRANCHES[safeInt(b.hour, 0, 11) ?? 0]}时，${gender}`);
  if (safeInt(l.lunarMonth, -12, 12) !== null && safeInt(l.lunarDay, 1, 30) !== null) {
    const leap = l.isLeapMonth ? (vi ? ' (nhuận)' : '（闰）') : '';
    lines.push(vi
      ? `- Âm lịch: năm ${tr(STEMS[l.yearStem])} ${tr(BRANCHES[safeInt(l.yearBranch, 0, 11) ?? 0])}, tháng ${Math.abs(l.lunarMonth)}${leap}, ngày ${l.lunarDay}`
      : `- 农历：${STEMS[l.yearStem]}${BRANCHES[safeInt(l.yearBranch, 0, 11) ?? 0]}年 ${Math.abs(l.lunarMonth)}月${leap} ${l.lunarDay}日`);
  }
  const ju = safeTerm(chart.wuxingJuName);
  if (ju) lines.push(vi ? `- Cục: ${tr(ju)}` : `- 五行局：${ju}`);
  const yy = safeTerm(chart.yinYangGender);
  if (yy) lines.push(vi ? `- Âm dương: ${tr(yy)}` : `- 阴阳：${yy}`);
  const mz = safeTerm(chart.mingZhu), sz = safeTerm(chart.shenZhu);
  if (mz || sz) lines.push(vi ? `- Mệnh chủ: ${tr(mz)}; Thân chủ: ${tr(sz)}` : `- 命主：${mz}；身主：${sz}`);
  const age = safeInt(chart.currentAge, 0, 150);
  if (age !== null) lines.push(vi ? `- Tuổi hiện tại (tuổi mụ): ${age}` : `- 当前虚岁：${age}`);

  lines.push('', vi ? '## 12 cung' : '## 十二宫');
  for (const p of [...chart.palaces].sort((a, b2) => a.branch - b2.branch)) lines.push(palaceLine(p, locale));

  const dx = Array.isArray(chart.daXians) ? chart.daXians[safeInt(chart.currentDaXianIndex, 0, 20) ?? -1] : undefined;
  if (dx?.siHua) {
    const s = dx.siHua;
    lines.push('', vi
      ? `## Tứ Hóa đại hạn hiện tại (${dx.startAge}–${dx.endAge} tuổi, cung ${tr(safeTerm(dx.palaceName))})\n- Hóa Lộc: ${tr(safeTerm(s.lu))}; Hóa Quyền: ${tr(safeTerm(s.quan))}; Hóa Khoa: ${tr(safeTerm(s.ke))}; Hóa Kỵ: ${tr(safeTerm(s.ji))}`
      : `## 当前大限四化（${dx.startAge}–${dx.endAge} 岁，${safeTerm(dx.palaceName)}）\n- 化禄：${safeTerm(s.lu)}；化权：${safeTerm(s.quan)}；化科：${safeTerm(s.ke)}；化忌：${safeTerm(s.ji)}`);
  }

  try {
    const patterns = detectPatterns(chart).map(p => localizePattern(p, locale));
    if (patterns.length) {
      lines.push('', vi ? '## Cách cục nhận diện được' : '## 已识别格局');
      for (const p of patterns) lines.push(`- ${p.name}: ${p.description}`);
    }
    const summary = localizeMingGongSummary(getMingGongSummary(chart), locale);
    if (summary.keywords.length) {
      lines.push('', vi
        ? `## Tóm tắt cung Mệnh\n- Từ khóa: ${summary.keywords.join(', ')}; tính chất: ${summary.nature}`
        : `## 命宫摘要\n- 关键词：${summary.keywords.join('、')}；性质：${summary.nature}`);
    }
  } catch {
    // 格局识别失败不影响解读
  }
  return lines.join('\n');
}

export function buildSystemPrompt(chart: ZiweiChart, locale: Locale): string {
  const chartText = chartToText(chart, locale);
  if (locale === 'vi') {
    return `Bạn là chuyên gia Tử Vi Đẩu Số theo hệ thống của Nghê Hải Hạ (sách 《天纪》 Thiên Kỷ), am hiểu Tử Vi Đẩu Số Toàn Thư và Cốt Tủy Phú.

Nhiệm vụ: luận giải lá số dưới đây cho người dùng bằng TIẾNG VIỆT.
- Luôn trả lời bằng tiếng Việt tự nhiên, dùng thuật ngữ Hán-Việt quen thuộc với người học Tử Vi Việt Nam (Mệnh, Thân, Phu Thê, Quan Lộc, Hóa Lộc/Quyền/Khoa/Kỵ, Miếu/Vượng/Hãm, tam phương tứ chính…). Không viết chữ Hán, trừ khi trích tên sách.
- Câu hỏi của người dùng có thể viết bằng tiếng Trung (là mẫu câu hỏi có sẵn của giao diện) — vẫn trả lời bằng tiếng Việt và giữ đúng cấu trúc đề mục được yêu cầu (dịch tiêu đề sang tiếng Việt).
- Chỉ dựa vào dữ liệu lá số bên dưới; không bịa thêm sao hay vị trí không có trong lá số.
- Không trích dẫn "nguyên văn Nghê sư" hay cổ thư nếu không chắc chắn; khi diễn giải quan điểm thì nói rõ là diễn giải.
- Giọng điệu ôn hòa, xây dựng; tránh phán đoán tuyệt đối về bệnh tật, tử vong, ly hôn. Về lục thân (cha mẹ, anh em, con cái) nhắc rằng Tử Vi chỉ mang tính tham khảo ở mảng này.
- Trình bày bằng Markdown, ngắn gọn, có đề mục in đậm.

# LÁ SỐ
${chartText}`;
  }
  return `你是精通倪海厦《天纪》体系的紫微斗数专家，熟悉《紫微斗数全书》《骨髓赋》。

任务：根据下面的命盘为用户解读，用简体中文回答。
- 只依据下方命盘数据，不要编造盘中没有的星曜或位置。
- 没有把握时不要冒称「倪师原话」或古籍原文，转述观点时说明是转述。
- 语气平和、建设性，不对疾病、寿命、离婚做绝对论断；六亲部分提醒仅供参考。
- 用 Markdown 输出，简明，带加粗小标题。

# 命盘
${chartText}`;
}
