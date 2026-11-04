/**
 * 文案翻译：以中文原文作 key，越南语查词典。
 *
 *   t('开始排盘')                      → 'Lập lá số'
 *   t('共 {n} 条', { n: 12 })          → 'Tổng cộng 12 mục'
 *
 * 中文环境直接返回原文（只做插值），越南语环境查不到时回退中文原文，
 * 所以漏翻只会显示中文，不会白屏。
 */
import type { Locale } from './config';
import { MESSAGES_VI } from './messages';
import { localizeTerm } from './terms';

export type TVars = Record<string, string | number>;
export type TFunction = (zh: string, vars?: TVars) => string;
export type TermFunction = (zh: string) => string;

function interpolate(text: string, vars?: TVars): string {
  if (!vars) return text;
  return text.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? String(vars[k]) : m));
}

export function translate(locale: Locale, zh: string, vars?: TVars): string {
  if (locale === 'zh') return interpolate(zh, vars);
  const vi = MESSAGES_VI[zh];
  if (vi === undefined && process.env.NODE_ENV === 'development') {
    // 开发环境提示漏翻，便于补词典
    console.warn(`[i18n] missing vi: ${JSON.stringify(zh)}`);
  }
  return interpolate(vi ?? zh, vars);
}

export function createT(locale: Locale): TFunction {
  return (zh, vars) => translate(locale, zh, vars);
}

export function createTerm(locale: Locale): TermFunction {
  return zh => localizeTerm(zh, locale);
}
