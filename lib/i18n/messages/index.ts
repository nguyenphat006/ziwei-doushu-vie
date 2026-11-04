/**
 * 越南语词典汇总。每个分组一个文件，key 为中文原文（含 {var} 占位），value 为越南语。
 * 分文件是为了让不同页面的翻译互不冲突，同一个 key 出现在多个文件时以后合并的为准。
 */
import { COMMON_VI } from './common';
import { HOME_VI } from './home';
import { CHART_VI } from './chart';
import { INSIGHT_VI } from './insight';
import { PAGES_VI } from './pages';
import { LIBRARY_VI } from './library';

export const MESSAGES_VI: Record<string, string> = {
  ...COMMON_VI,
  ...HOME_VI,
  ...CHART_VI,
  ...INSIGHT_VI,
  ...PAGES_VI,
  ...LIBRARY_VI,
};
