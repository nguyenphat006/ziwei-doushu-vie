/**
 * 古籍原典查询库 — 入口
 *
 * 加载所有古籍数据 + 提供查询/搜索 API
 * 数据为 JSON 静态打包，零 DB 依赖、零网络请求
 */

import type { Book, Paragraph, SearchHit } from './types';
import { guSuiFu } from './data/gusuifu';
import { ziWeiQuanJi } from './data/quanji';
import { ziWeiQuanShu } from './data/quanshu';
import type { Locale } from '../i18n/config';
import { foldVi, getParagraphVi } from '../i18n/content/classics';

/** 所有已收录古籍 */
export const ALL_BOOKS: Book[] = [
  guSuiFu,
  ziWeiQuanJi,
  ziWeiQuanShu,
];

/** 总段落数（用于首页统计） */
export const TOTAL_PARAGRAPHS = ALL_BOOKS.reduce(
  (sum, b) => sum + b.chapters.reduce((s, c) => s + c.paragraphs.length, 0),
  0,
);

/** 按 slug 取书 */
export function getBookBySlug(slug: string): Book | null {
  return ALL_BOOKS.find(b => b.slug === slug) ?? null;
}

/** 按章节序号取章节 */
export function getChapter(bookSlug: string, chapterIdx: number) {
  const book = getBookBySlug(bookSlug);
  if (!book) return null;
  const chapter = book.chapters[chapterIdx];
  if (!chapter) return null;
  return { book, chapter, chapterIdx };
}

/** 按段落 id 取段落（含书与章节信息）*/
export function getParagraphById(id: string) {
  for (const book of ALL_BOOKS) {
    for (let i = 0; i < book.chapters.length; i++) {
      const ch = book.chapters[i];
      const p = ch.paragraphs.find(p => p.id === id);
      if (p) {
        return { book, chapter: ch, chapterIdx: i, paragraph: p };
      }
    }
  }
  return null;
}

/**
 * 全文搜索
 *
 * 简单子字符串匹配（不分词，对中文 OK）
 * 大小写不敏感、繁简转换暂不支持
 */
export function searchClassics(query: string, limit = 30): SearchHit[] {
  const q = query.trim();
  if (q.length < 1) return [];

  const hits: SearchHit[] = [];
  for (const book of ALL_BOOKS) {
    for (const chapter of book.chapters) {
      for (const p of chapter.paragraphs) {
        const idx = p.text.indexOf(q);
        if (idx < 0) continue;

        // 提取上下文（前后各 40 字）
        const start = Math.max(0, idx - 40);
        const end = Math.min(p.text.length, idx + q.length + 40);
        const before = p.text.slice(start, idx);
        const matched = p.text.slice(idx, idx + q.length);
        const after = p.text.slice(idx + q.length, end);

        const snippet = (start > 0 ? '…' : '')
          + escapeHtml(before)
          + `<mark>${escapeHtml(matched)}</mark>`
          + escapeHtml(after)
          + (end < p.text.length ? '…' : '');

        hits.push({
          bookSlug: book.slug,
          bookTitle: book.title,
          chapterTitle: chapter.title,
          paragraphId: p.id,
          snippet,
          text: p.text,
        });

        if (hits.length >= limit) return hits;
      }
    }
  }
  return hits;
}

/** 以原文下标 [idx, idx+len) 为中心截取上下文并高亮 */
function makeSnippet(text: string, idx: number, len: number, ctx: number): string {
  const start = Math.max(0, idx - ctx);
  const end = Math.min(text.length, idx + len + ctx);
  return (start > 0 ? '…' : '')
    + escapeHtml(text.slice(start, idx))
    + `<mark>${escapeHtml(text.slice(idx, idx + len))}</mark>`
    + escapeHtml(text.slice(idx + len, end))
    + (end < text.length ? '…' : '');
}

/**
 * 按语言检索。
 * - zh：与 searchClassics 完全相同
 * - vi：同时匹配中文原文（子串）与越南语译文（不分大小写、不分声调），
 *       命中译文时附带译文高亮片段；每条结果都带上译文
 */
export function searchClassicsLocalized(query: string, locale: Locale, limit = 30): SearchHit[] {
  if (locale === 'zh') return searchClassics(query, limit);
  const q = query.trim();
  if (q.length < 1) return [];
  const qFolded = foldVi(q);

  const hits: SearchHit[] = [];
  for (const book of ALL_BOOKS) {
    for (let ci = 0; ci < book.chapters.length; ci++) {
      const chapter = book.chapters[ci];
      for (const p of chapter.paragraphs) {
        const vi = getParagraphVi(p.id);
        const zhIdx = p.text.indexOf(q);
        const viIdx = vi ? foldVi(vi).indexOf(qFolded) : -1;
        if (zhIdx < 0 && viIdx < 0) continue;

        hits.push({
          bookSlug: book.slug,
          bookTitle: book.title,
          chapterTitle: chapter.title,
          paragraphId: p.id,
          chapterIdx: ci,
          snippet: zhIdx >= 0 ? makeSnippet(p.text, zhIdx, q.length, 40) : escapeHtml(p.text),
          text: p.text,
          translation: vi,
          translationSnippet: vi && viIdx >= 0 ? makeSnippet(vi, viIdx, qFolded.length, 90) : undefined,
        });
        if (hits.length >= limit) return hits;
      }
    }
  }
  return hits;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export type { Book, Chapter, Paragraph, SearchHit } from './types';
