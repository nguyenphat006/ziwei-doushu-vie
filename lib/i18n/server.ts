/**
 * 服务端组件取语言：读 cookie。
 *
 *   const { locale, t, term } = await getI18n();
 */
import { cookies } from 'next/headers';
import { LOCALE_COOKIE, normalizeLocale, type Locale } from './config';
import { createT, createTerm } from './translate';

export async function getLocale(): Promise<Locale> {
  const store = await cookies();
  return normalizeLocale(store.get(LOCALE_COOKIE)?.value);
}

export async function getI18n() {
  const locale = await getLocale();
  return { locale, t: createT(locale), term: createTerm(locale) };
}
