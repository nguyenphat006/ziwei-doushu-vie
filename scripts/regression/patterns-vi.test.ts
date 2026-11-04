/**
 * 格局越南语本地化覆盖率回归
 *
 * patterns.ts 输出中文（名 / 描述 / 条件 / 出处里有大量模板字符串）。
 * lib/i18n/content/patterns.ts 用对照表 + 正则模板翻成越南语；只要漏一个分支，
 * 越南语界面就会冒出汉字。这里扫大量命盘，要求 vi 输出的每个字段都不含汉字，
 * 并且 zh 输出与原始结果完全一致。
 *
 * 跑: npx tsx scripts/regression/patterns-vi.test.ts
 */
import assert from 'node:assert/strict';
import * as nodeModule from 'node:module';
import { generateChart } from '../../lib/ziwei/algorithm';
import type { BirthInfo } from '../../lib/ziwei/types';

// patterns.ts 带 `server-only`，同 patterns-sihua-bonus.test.ts 先解析成空模块
type HookResult = { url?: string; format?: string; source?: string; shortCircuit?: boolean };
const { registerHooks } = nodeModule as unknown as {
  registerHooks(hooks: {
    resolve(specifier: string, context: unknown, next: (s: string, c: unknown) => HookResult): HookResult;
    load(url: string, context: unknown, next: (u: string, c: unknown) => HookResult): HookResult;
  }): void;
};
const SERVER_ONLY_STUB = 'data:text/javascript,';
registerHooks({
  resolve(specifier, context, nextResolve) {
    if (specifier === 'server-only') return { url: SERVER_ONLY_STUB, shortCircuit: true };
    return nextResolve(specifier, context);
  },
  load(url, context, nextLoad) {
    if (url === SERVER_ONLY_STUB) return { format: 'commonjs', source: '', shortCircuit: true };
    return nextLoad(url, context);
  },
});

// patterns.ts 里拼进模板串的片段：单独翻译没有意义，整句由正则模板处理
const TEMPLATE_FRAGMENTS = new Set([
  '同宫', '会照', '三方会照', '火贪格', '铃贪格',
  '本盘破格条件已触发，发力打折。', '未宫日月双美尤佳。', '丑宫日月同宫力量较平。',
  '武曲化禄属正财，宜实业、金融。', '太阴化禄属阴财、不动产。', '贪狼化禄属人脉财、桃花财。',
  '命', '迁', '身',
]);

const CJK = /[㐀-鿿豈-﫿《》「」“”（），。；：、]/;

async function main() {
  const { detectPatterns, getMingGongSummary } = await import('../../lib/ziwei/patterns');
  const { localizePattern, localizeMingGongSummary } = await import('../../lib/i18n/content/patterns');

  const leaks = new Map<string, string>();   // 原文 → 出处字段（去重）
  const names = new Set<string>();
  let charts = 0;
  let patternCount = 0;

  const check = (field: string, zh: string | undefined, vi: string | undefined) => {
    if (vi && CJK.test(vi) && !leaks.has(zh ?? vi)) leaks.set(zh ?? vi, `${field}: ${vi}`);
  };

  // 确定性伪随机采样（比网格更分散，覆盖 60 甲子年干 × 月 × 日 × 时辰 × 性别）
  const N = Number(process.env.PATTERNS_VI_SAMPLES ?? 1000);
  let seed = 20261104;
  const rnd = (n: number) => { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed % n; };
  const samples: BirthInfo[] = [];
  for (let i = 0; i < N; i++)
    samples.push({
      year: 1930 + rnd(100), month: 1 + rnd(12), day: 1 + rnd(28), hour: rnd(12),
      gender: rnd(2) ? 'male' : 'female',
    });

  for (const bi of samples) {
    const chart = generateChart(bi);
    charts++;
    for (const p of detectPatterns(chart)) {
      patternCount++;
      names.add(p.name.replace(/^.+(化禄入命|化忌入[命迁])$/, 'X$1'));
      assert.deepEqual(localizePattern(p, 'zh'), p, 'zh 必须原样返回');
      const v = localizePattern(p, 'vi');
      assert.equal(v.level, p.level);
      check('name', p.name, v.name);
      check('description', p.description, v.description);
      p.palaces.forEach((x, i) => check('palaces', x, v.palaces[i]));
      p.conditions?.required.forEach((x, i) => check('required', x, v.conditions?.required[i]));
      p.conditions?.bonus?.forEach((x, i) => check('bonus', x, v.conditions?.bonus?.[i]));
      p.conditions?.breaking?.forEach((x, i) => check('breaking', x, v.conditions?.breaking?.[i]));
      check('source', p.source, v.source);
    }
    const s = getMingGongSummary(chart);
    assert.deepEqual(localizeMingGongSummary(s, 'zh'), s);
    const sv = localizeMingGongSummary(s, 'vi');
    s.stars.forEach((x, i) => check('mingGong.stars', x, sv.stars[i]));
    s.keywords.forEach((x, i) => check('mingGong.keywords', x, sv.keywords[i]));
    check('mingGong.nature', s.nature, sv.nature);
  }

  // 静态扫描：patterns.ts 里每个含汉字的普通字符串字面量（非模板串，非注释），
  // 至少能被某个字段的翻译吃掉——覆盖采样没碰到的稀有格局
  const { readFileSync } = await import('node:fs');
  const { localizeTerm } = await import('../../lib/i18n/terms');
  const src = readFileSync(`${process.cwd()}/lib/ziwei/patterns.ts`, 'utf8')
    .split(/\r?\n/).filter(l => !/^\s*(\/\/|\*|\/\*)/.test(l)).join('\n');
  let literals = 0;
  for (const [, lit] of src.matchAll(/'([^'\n]*[一-鿿][^'\n]*)'/g)) {
    if (!CJK.test(localizeTerm(lit, 'vi'))) continue;   // 星名 / 宫名等术语
    if (TEMPLATE_FRAGMENTS.has(lit) || /\$\{|\}/.test(lit)) continue;   // 模板串里的片段，由采样覆盖整句
    literals++;
    const fake = { name: lit, level: 'good' as const, description: lit, palaces: [], conditions: { required: [lit] }, source: lit };
    const v = localizePattern(fake, 'vi');
    const sv = localizeMingGongSummary({ stars: [], keywords: [lit], nature: lit }, 'vi');
    const outs = [v.name, v.description, v.conditions!.required[0], v.source!, sv.keywords[0], sv.nature];
    if (outs.every(o => CJK.test(o)) && !leaks.has(lit)) leaks.set(lit, `literal: ${lit}`);
  }

  console.log(`\n静态字面量 ${literals} 条已检查`);
  console.log(`格局越南语覆盖 — ${charts} 盘 / ${patternCount} 个格局 / ${names.size} 种格局名`);
  console.log(`  命中: ${[...names].sort().join(' ')}`);
  if (leaks.size) {
    for (const [zh, where] of leaks) console.error(`  ✗ 未翻译 ${where}\n      原文: ${zh}`);
    console.error(`\n❌ ${leaks.size} 条输出仍含汉字`);
    process.exit(1);
  }
  console.log('✅ 越南语格局输出无残留汉字\n');
}

main().catch(e => { console.error(e); process.exit(1); });
