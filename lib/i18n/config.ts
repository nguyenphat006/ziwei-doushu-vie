/**
 * 语言配置 / Cấu hình ngôn ngữ
 *
 * 界面支持越南语（默认）与中文切换。排盘引擎内部一律使用中文术语，
 * 翻译只发生在显示层：UI 文案用 t()，星曜/宫位/干支等术语用 term()。
 */

export type Locale = 'vi' | 'zh';

export const LOCALES: Locale[] = ['vi', 'zh'];
export const DEFAULT_LOCALE: Locale = 'vi';
export const LOCALE_COOKIE = 'ziwei-locale';

export const LOCALE_LABELS: Record<Locale, string> = {
  vi: 'Tiếng Việt',
  zh: '中文',
};

export const HTML_LANG: Record<Locale, string> = {
  vi: 'vi',
  zh: 'zh-CN',
};

export function normalizeLocale(value: string | null | undefined): Locale {
  return value === 'zh' || value === 'vi' ? value : DEFAULT_LOCALE;
}
