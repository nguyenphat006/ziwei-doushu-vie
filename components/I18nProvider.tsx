'use client';
import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { HTML_LANG, LOCALE_COOKIE, type Locale } from '@/lib/i18n/config';
import { createT, createTerm, type TFunction, type TermFunction } from '@/lib/i18n/translate';

interface I18nValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  /** 界面文案：t('中文原文', { 变量 }) */
  t: TFunction;
  /** 紫微术语（星名、宫名、干支、亮度、四化…）：term('紫微') */
  term: TermFunction;
}

const I18nContext = createContext<I18nValue>({
  locale: 'vi',
  setLocale: () => {},
  t: createT('vi'),
  term: createTerm('vi'),
});

/** initialLocale 由根 layout 从 cookie 读出传入，保证服务端与客户端首屏一致 */
export function I18nProvider({ initialLocale, children }: { initialLocale: Locale; children: React.ReactNode }) {
  const router = useRouter();
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
    document.documentElement.lang = HTML_LANG[next];
    // 服务端组件（古籍、百科等）按 cookie 渲染，切换后需要刷新
    router.refresh();
  }, [router]);

  const value = useMemo<I18nValue>(() => ({
    locale,
    setLocale,
    t: createT(locale),
    term: createTerm(locale),
  }), [locale, setLocale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export const useI18n = () => useContext(I18nContext);
