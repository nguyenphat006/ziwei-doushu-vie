/**
 * /library/[book]/[chapter] — 单章节阅读页
 */

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ALL_BOOKS, getChapter } from '@/lib/classics';
import { getI18n } from '@/lib/i18n/server';
import { getParagraphVi, localizeBook, localizeChapter } from '@/lib/i18n/content/classics';

export async function generateStaticParams() {
  return ALL_BOOKS.flatMap(b =>
    b.chapters.map((_, i) => ({ book: b.slug, chapter: String(i) }))
  );
}

export async function generateMetadata({ params }: { params: Promise<{ book: string; chapter: string }> }) {
  const { book: bookSlug, chapter: chIdx } = await params;
  const result = getChapter(bookSlug, parseInt(chIdx));
  if (!result) return {};
  const { t, locale } = await getI18n();
  if (locale === 'vi') {
    const lb = localizeBook(result.book, locale);
    const lc = localizeChapter(result.book, result.chapterIdx, locale);
    return {
      title: `${lc.title} · ${lb.title} · ${t('紫微斗数古籍')}`,
      description: lc.subtitle || t('《{book}》{chapter}原文', { book: lb.title, chapter: lc.title }),
    };
  }
  return {
    title: `${result.chapter.title} · 《${result.book.title}》· 紫微斗数古籍`,
    description: result.chapter.subtitle || `《${result.book.title}》${result.chapter.title}原文`,
  };
}

export default async function ChapterPage({ params }: { params: Promise<{ book: string; chapter: string }> }) {
  const { book: bookSlug, chapter: chIdx } = await params;
  const result = getChapter(bookSlug, parseInt(chIdx));
  if (!result) notFound();

  const { book, chapter, chapterIdx } = result;
  const { t, locale } = await getI18n();
  const vi = locale === 'vi';
  const ls = (zh: string, v = '0.03em') => (vi ? v : zh);
  const lb = localizeBook(book, locale);
  const lc = localizeChapter(book, chapterIdx, locale);
  const prevIdx = chapterIdx - 1;
  const nextIdx = chapterIdx + 1;

  return (
    <div style={{ background: 'var(--bg-page)', minHeight: '100vh' }}>
      <div className="px-6 py-4 flex items-center justify-between gap-3"
        style={{ borderBottom: '1px solid rgba(184,146,42,0.15)', background: 'var(--bg-page)' }}>
        <Link href={`/library/${book.slug}`} style={{ fontSize: '12px', color: 'var(--ac)', letterSpacing: ls('0.3em'), textDecoration: 'none' }}>
          {t('← 《{book}》目录', { book: lb.title })}
        </Link>
        <div style={{ fontSize: '12px', color: 'var(--tx-3)', letterSpacing: ls('0.15em'), textAlign: 'center' }}>
          {lc.title}
        </div>
        <Link href="/library" style={{ fontSize: '12px', color: 'var(--ac)', letterSpacing: ls('0.2em'), textDecoration: 'none', whiteSpace: 'nowrap' }}>
          {t('古籍库 →')}
        </Link>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-12">
        {/* 标题 */}
        <div className="text-center mb-10">
          <div style={{ fontSize: '11px', color: 'var(--tx-3)', letterSpacing: ls('0.25em', '0.05em'), marginBottom: '8px' }}>
            {vi ? lb.title : `《${book.title}》`} · {lb.dynasty}
          </div>
          <h1 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 700, color: 'var(--tx-0)', letterSpacing: ls('0.15em', '0.02em'), marginBottom: vi ? '4px' : '8px' }}>
            {lc.title}
          </h1>
          {vi && (
            <div style={{ fontSize: '14px', color: 'var(--tx-3)', letterSpacing: '0.1em', marginBottom: '8px' }}>
              《{book.title}》{chapter.title}
            </div>
          )}
          {lc.subtitle && (
            <div style={{ fontSize: '13px', color: 'var(--tx-2)', letterSpacing: ls('0.1em', '0') }}>
              {lc.subtitle}
            </div>
          )}
        </div>

        {/* 段落 */}
        <div style={{ background: 'var(--bg-card)', borderRadius: '14px', border: '1px solid rgba(184,146,42,0.2)', padding: '32px 28px' }}>
          {chapter.paragraphs.map((p, i) => {
            const pVi = vi ? getParagraphVi(p.id) : undefined;
            return (
            <div
              key={p.id}
              id={p.id}
              style={{
                marginBottom: i === chapter.paragraphs.length - 1 ? 0 : '20px',
                paddingBottom: i === chapter.paragraphs.length - 1 ? 0 : '20px',
                borderBottom: i === chapter.paragraphs.length - 1 ? 'none' : '1px dashed rgba(184,146,42,0.15)',
                scrollMarginTop: '80px',
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '12px',
              }}>
                <span style={{
                  fontSize: '11px',
                  color: 'var(--ac)',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  minWidth: '24px',
                }}>
                  {String(p.idx).padStart(2, '0')}
                </span>
                <p style={{
                  flex: 1,
                  fontSize: '16px',
                  color: 'var(--tx-0)',
                  lineHeight: 2,
                  letterSpacing: '0.04em',
                  fontFamily: '"PingFang SC", "Hiragino Sans GB", serif',
                }}>
                  {p.text}
                </p>
              </div>
              {pVi && (
                <p lang="vi" style={{
                  marginTop: '6px',
                  marginLeft: '36px',
                  fontSize: '14px',
                  color: 'var(--tx-1, var(--tx-0))',
                  lineHeight: 1.8,
                  borderLeft: '2px solid rgba(184,146,42,0.35)',
                  paddingLeft: '12px',
                }}>
                  {pVi}
                </p>
              )}
              {p.translation && (
                <div style={{
                  marginTop: '8px',
                  marginLeft: '36px',
                  padding: '8px 12px',
                  background: 'rgba(184,146,42,0.05)',
                  borderRadius: '6px',
                  fontSize: '13px',
                  color: 'var(--tx-2)',
                  lineHeight: 1.8,
                }}>
                  <span style={{ fontSize: '10px', color: 'var(--ac)', marginRight: '6px' }}>{t('白话')}</span>
                  {p.translation}
                </div>
              )}
              {p.niNote && (
                <div style={{
                  marginTop: '8px',
                  marginLeft: '36px',
                  padding: '8px 12px',
                  background: 'rgba(196,90,45,0.05)',
                  borderRadius: '6px',
                  fontSize: '13px',
                  color: 'var(--tx-2)',
                  lineHeight: 1.8,
                }}>
                  <span style={{ fontSize: '10px', color: 'var(--ji)', marginRight: '6px' }}>{t('倪师注')}</span>
                  {p.niNote}
                </div>
              )}
            </div>
            );
          })}
        </div>

        {/* 章节导航 */}
        <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
          {prevIdx >= 0 ? (
            <Link
              href={`/library/${book.slug}/${prevIdx}`}
              style={{
                flex: 1,
                padding: '14px 18px',
                background: 'var(--bg-card)',
                border: '1px solid rgba(184,146,42,0.2)',
                borderRadius: '10px',
                textDecoration: 'none',
                color: 'var(--tx-0)',
              }}
            >
              <div style={{ fontSize: '10px', color: 'var(--tx-3)', letterSpacing: ls('0.2em', '0.05em'), marginBottom: '2px' }}>{t('← 上一章')}</div>
              <div style={{ fontSize: '13px', fontWeight: 500 }}>{localizeChapter(book, prevIdx, locale).title}</div>
            </Link>
          ) : <div style={{ flex: 1 }} />}
          {nextIdx < book.chapters.length ? (
            <Link
              href={`/library/${book.slug}/${nextIdx}`}
              style={{
                flex: 1,
                padding: '14px 18px',
                background: 'var(--bg-card)',
                border: '1px solid rgba(184,146,42,0.2)',
                borderRadius: '10px',
                textDecoration: 'none',
                color: 'var(--tx-0)',
                textAlign: 'right',
              }}
            >
              <div style={{ fontSize: '10px', color: 'var(--tx-3)', letterSpacing: ls('0.2em', '0.05em'), marginBottom: '2px' }}>{t('下一章 →')}</div>
              <div style={{ fontSize: '13px', fontWeight: 500 }}>{localizeChapter(book, nextIdx, locale).title}</div>
            </Link>
          ) : <div style={{ flex: 1 }} />}
        </div>
      </article>
    </div>
  );
}
