/**
 * /library/search?q=xxx — 搜索结果页
 */

import Link from 'next/link';
import { searchClassicsLocalized, getBookBySlug, getParagraphById } from '@/lib/classics';
import { getI18n } from '@/lib/i18n/server';
import { localizeBook, localizeChapter } from '@/lib/i18n/content/classics';

export async function generateMetadata() {
  const { t } = await getI18n();
  return {
    title: t('搜索 · 古籍原典库'),
  };
}

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { t, locale } = await getI18n();
  const vi = locale === 'vi';
  const ls = (zh: string, v = '0.03em') => (vi ? v : zh);
  const sp = await searchParams;
  const q = sp.q?.trim() || '';
  const hits = q ? searchClassicsLocalized(q, locale, 50) : [];

  return (
    <div style={{ background: 'var(--bg-page)', minHeight: '100vh' }}>
      <div className="px-6 py-4 flex items-center justify-between"
        style={{ borderBottom: '1px solid rgba(184,146,42,0.15)', background: 'var(--bg-page)' }}>
        <Link href="/library" style={{ fontSize: '12px', color: 'var(--ac)', letterSpacing: ls('0.3em'), textDecoration: 'none' }}>
          {t('← 古籍库')}
        </Link>
        <div style={{ fontSize: '12px', color: 'var(--tx-3)', letterSpacing: ls('0.2em') }}>
          {t('搜索结果')}
        </div>
        <Link href="/" style={{ fontSize: '12px', color: 'var(--ac)', letterSpacing: ls('0.2em'), textDecoration: 'none' }}>
          {t('首页 →')}
        </Link>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <div style={{ fontSize: '13px', color: 'var(--tx-3)', letterSpacing: ls('0.15em'), marginBottom: '4px' }}>
            {t('搜索关键词')}
          </div>
          <h1 style={{ fontSize: 'clamp(22px, 3.5vw, 32px)', fontWeight: 700, color: 'var(--tx-0)', letterSpacing: ls('0.1em', '0.01em'), wordBreak: 'break-word' }}>
            「{q || t('（空）')}」
          </h1>
          <div style={{ fontSize: '12px', color: 'var(--tx-3)', marginTop: '8px' }}>
            {t('共找到')} <strong style={{ color: 'var(--ac)' }}>{hits.length}</strong> {t('条古籍原文匹配')}
          </div>
        </div>

        {hits.length === 0 ? (
          <div style={{
            background: 'var(--bg-card)',
            padding: '40px 20px',
            borderRadius: '12px',
            textAlign: 'center',
            color: 'var(--tx-2)',
            border: '1px solid rgba(184,146,42,0.15)',
          }}>
            <div style={{ fontSize: '40px', marginBottom: '12px', opacity: 0.4 }}>📜</div>
            {q ? (
              <>
                <div style={{ fontSize: '14px', marginBottom: '6px' }}>{t('暂未在已收录古籍中找到这个关键词')}</div>
                <div style={{ fontSize: '11px', color: 'var(--tx-3)', lineHeight: 1.7 }}>
                  {t('我们持续补充内容中。可尝试搜索：')}<br />
                  <span style={{ color: 'var(--ac)' }}>{t('七杀朝斗 / 双禄朝垣 / 化忌 / 紫微 / 命宫 / 机月同梁')}</span>
                </div>
              </>
            ) : (
              <div style={{ fontSize: '13px' }}>{t('请输入要搜索的关键词')}</div>
            )}
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {hits.map((hit, i) => {
              const chapterIdx = hit.chapterIdx ?? getParagraphById(hit.paragraphId)?.chapterIdx ?? 0;
              const book = getBookBySlug(hit.bookSlug);
              const bookTitle = book ? localizeBook(book, locale).title : hit.bookTitle;
              const chapterTitle = book ? localizeChapter(book, chapterIdx, locale).title : hit.chapterTitle;
              return (
                <Link
                  key={i}
                  href={`/library/${hit.bookSlug}/${chapterIdx}#${hit.paragraphId}`}
                  style={{
                    display: 'block',
                    background: 'var(--bg-card)',
                    padding: '16px 20px',
                    borderRadius: '10px',
                    border: '1px solid rgba(184,146,42,0.18)',
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'border-color 0.15s',
                  }}
                >
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '11px',
                    color: 'var(--tx-3)',
                    marginBottom: '8px',
                    letterSpacing: ls('0.1em', '0.01em'),
                  }}>
                    <span style={{ color: 'var(--ac)', fontWeight: 600 }}>{vi ? bookTitle : `《${bookTitle}》`}</span>
                    <span style={{ opacity: 0.5 }}>·</span>
                    <span>{chapterTitle}</span>
                  </div>
                  <div
                    style={{
                      fontSize: '14px',
                      color: 'var(--tx-0)',
                      lineHeight: 1.9,
                      letterSpacing: '0.02em',
                    }}
                    dangerouslySetInnerHTML={{ __html: hit.snippet }}
                  />
                  {vi && hit.translation && (
                    hit.translationSnippet ? (
                      <div
                        style={{ marginTop: '6px', fontSize: '13px', color: 'var(--tx-2)', lineHeight: 1.7 }}
                        dangerouslySetInnerHTML={{ __html: hit.translationSnippet }}
                      />
                    ) : (
                      <div style={{ marginTop: '6px', fontSize: '13px', color: 'var(--tx-2)', lineHeight: 1.7 }}>
                        {hit.translation}
                      </div>
                    )
                  )}
                </Link>
              );
            })}
          </div>
        )}
      </div>

      <style>{`
        mark { background: rgba(184,146,42,0.3); color: #8b6a14; padding: 0 2px; border-radius: 2px; font-weight: 600; }
      `}</style>
    </div>
  );
}
