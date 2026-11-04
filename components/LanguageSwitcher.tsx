'use client';
import { useI18n } from './I18nProvider';
import { LOCALES, LOCALE_LABELS } from '@/lib/i18n/config';

/** 全站悬浮的语言切换按钮（左下角） */
export function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n();
  return (
    <div
      role="group"
      aria-label={t('切换语言')}
      className="fixed bottom-4 left-4 z-[60] flex overflow-hidden rounded-full border text-xs backdrop-blur"
      style={{ borderColor: 'var(--bdr-med)', background: 'var(--bg-card)', boxShadow: 'var(--sh-sm)' }}
    >
      {LOCALES.map(l => (
        <button
          key={l}
          type="button"
          onClick={() => l !== locale && setLocale(l)}
          aria-pressed={l === locale}
          className="px-3 py-1.5 transition-colors"
          style={l === locale
            ? { background: 'var(--ac)', color: 'var(--tx-inv)', fontWeight: 600 }
            : { color: 'var(--tx-2)' }}
        >
          {LOCALE_LABELS[l]}
        </button>
      ))}
    </div>
  );
}
