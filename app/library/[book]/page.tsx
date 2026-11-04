/**
 * /library/[book] — 单部古籍目录页
 */

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ALL_BOOKS, getBookBySlug } from '@/lib/classics';
import { getI18n } from '@/lib/i18n/server';
import { localizeBook, localizeChapter } from '@/lib/i18n/content/classics';

export async function generateStaticParams() {
  return ALL_BOOKS.map(b => ({ book: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ book: string }> }) {
  const { book: slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) return {};
  const { t, locale } = await getI18n();
  const lb = localizeBook(book, locale);
  return {
    title: locale === 'vi'
      ? `${lb.title} (${lb.titleZh}) · ${lb.dynasty} · ${t('紫微斗数古籍原典库')}`
      : `《${book.title}》· ${book.dynasty} · 紫微斗数古籍原典库`,
    description: lb.intro,
  };
}

export default async function BookPage({ params }: { params: Promise<{ book: string }> }) {
  const { book: slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) notFound();
  const { t, locale } = await getI18n();
  const vi = locale === 'vi';
  const ls = (zh: string, v = '0.03em') => (vi ? v : zh);
  const lb = localizeBook(book, locale);

  return (
    <div style={{ background: 'var(--bg-page)', minHeight: '100vh' }}>
      <div className="px-6 py-4 flex items-center justify-between gap-3"
        style={{ borderBottom: '1px solid rgba(184,146,42,0.15)', background: 'var(--bg-page)' }}>
        <Link href="/library" style={{ fontSize: '12px', color: 'var(--ac)', letterSpacing: ls('0.3em'), textDecoration: 'none', whiteSpace: 'nowrap' }}>
          {t('← 古籍库')}
        </Link>
        <div style={{ fontSize: '12px', color: 'var(--tx-3)', letterSpacing: ls('0.2em'), textAlign: 'center' }}>
          {vi ? lb.title : `《${book.title}》`}
        </div>
        <Link href="/" style={{ fontSize: '12px', color: 'var(--ac)', letterSpacing: ls('0.2em'), textDecoration: 'none', whiteSpace: 'nowrap' }}>
          {t('首页 →')}
        </Link>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* 书名信息 */}
        <div className="text-center mb-12">
          <div style={{ fontSize: '11px', color: 'var(--tx-3)', letterSpacing: ls('0.3em', '0.05em'), marginBottom: '8px' }}>
            {lb.dynasty} · {lb.author}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, color: 'var(--tx-0)', letterSpacing: ls('0.15em', '0.02em'), marginBottom: vi ? '4px' : '14px' }}>
            {vi ? lb.title : `《${book.title}》`}
          </h1>
          {vi && (
            <div style={{ fontSize: '15px', color: 'var(--tx-3)', letterSpacing: '0.1em', marginBottom: '14px' }}>
              《{lb.titleZh}》
            </div>
          )}
          <p style={{ fontSize: '13px', color: 'var(--tx-2)', lineHeight: 1.8, maxWidth: '500px', margin: '0 auto' }}>
            {lb.intro}
          </p>
        </div>

        {/* 章节目录 */}
        <div style={{ background: 'var(--bg-card)', borderRadius: '14px', border: '1px solid rgba(184,146,42,0.2)', overflow: 'hidden' }}>
          <div style={{ padding: '14px 20px', borderBottom: '1px solid rgba(184,146,42,0.15)', fontSize: '11px', color: 'var(--tx-3)', letterSpacing: ls('0.3em', '0.1em') }}>
            {t('CHAPTERS · 章节目录')}
          </div>
          {book.chapters.map((chapter, i) => {
            const lc = localizeChapter(book, i, locale);
            return (
              <Link
                key={i}
                href={`/library/${book.slug}/${i}`}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '14px',
                  padding: '14px 20px',
                  borderBottom: i === book.chapters.length - 1 ? 'none' : '1px dashed rgba(184,146,42,0.15)',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'background 0.15s',
                }}
                className="hover:bg-amber-50"
              >
                <div style={{ fontSize: '12px', color: 'var(--ac)', fontWeight: 600, minWidth: '40px', letterSpacing: '0.1em' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '15px', color: 'var(--tx-0)', fontWeight: 500, letterSpacing: ls('0.08em', '0.01em'), marginBottom: '2px' }}>
                    {lc.title}
                    {vi && (
                      <span style={{ fontSize: '11px', color: 'var(--tx-3)', fontWeight: 400, marginLeft: '8px', letterSpacing: '0.05em' }}>
                        {chapter.title}
                      </span>
                    )}
                  </div>
                  {lc.subtitle && (
                    <div style={{ fontSize: '11px', color: 'var(--tx-3)' }}>
                      {lc.subtitle}
                    </div>
                  )}
                </div>
                <div style={{ fontSize: '10px', color: 'var(--tx-3)', letterSpacing: ls('0.1em', '0'), whiteSpace: 'nowrap' }}>
                  {t('{n} 段', { n: chapter.paragraphs.length })}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--ac)' }}>→</div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
