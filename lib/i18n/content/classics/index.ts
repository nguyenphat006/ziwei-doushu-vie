/**
 * 古籍越南语译文入口
 *
 * 原文（中文）保留在 lib/classics/data/*，这里只按 slug / 章节序号 / 段落 id 提供越南语译文。
 * 越南语模式下阅读页显示「原文 + 越南语译文」，书名/章节名以越南语为主、中文为辅。
 */
import type { Locale } from '../../config';
import type { BookVi } from './types';
import { GUSUIFU_VI } from './gusuifu';
import { QUANJI_VI } from './quanji';
import { QUANSHU_VI } from './quanshu';

export type { BookVi, ChapterVi } from './types';

/** slug → 越南语译文 */
export const CLASSICS_VI: Record<string, BookVi> = {
  gusuifu: GUSUIFU_VI,
  quanji: QUANJI_VI,
  quanshu: QUANSHU_VI,
};

/** 段落 id → 越南语译文（扁平索引） */
export const CLASSIC_PARAGRAPHS_VI: Record<string, string> = Object.assign(
  {},
  ...Object.values(CLASSICS_VI).map(b => b.paragraphs),
);

export function getBookVi(slug: string): BookVi | undefined {
  return CLASSICS_VI[slug];
}

export function getParagraphVi(id: string): string | undefined {
  return CLASSIC_PARAGRAPHS_VI[id];
}

interface BookLike {
  slug: string;
  title: string;
  dynasty: string;
  author: string;
  intro: string;
  chapters: { title: string; subtitle?: string }[];
}

/** 书的显示字段（越南语模式取译文，缺失时回退中文） */
export function localizeBook(book: BookLike, locale: Locale) {
  const vi = locale === 'vi' ? getBookVi(book.slug) : undefined;
  return {
    title: vi?.title ?? book.title,
    /** 中文原书名（越南语模式下作为副标题显示） */
    titleZh: book.title,
    dynasty: vi?.dynasty ?? book.dynasty,
    author: vi?.author ?? book.author,
    intro: vi?.intro ?? book.intro,
  };
}

/** 章节的显示字段 */
export function localizeChapter(book: BookLike, chapterIdx: number, locale: Locale) {
  const ch = book.chapters[chapterIdx];
  const vi = locale === 'vi' ? getBookVi(book.slug)?.chapters[chapterIdx] : undefined;
  return {
    title: vi?.title ?? ch?.title ?? '',
    titleZh: ch?.title ?? '',
    subtitle: vi?.subtitle ?? ch?.subtitle,
  };
}

/**
 * 越南语检索用的折叠：小写 + 去声调符号 + đ→d。
 * 逐字符折叠，保证折叠后字符串与原文下标一一对应（便于高亮）。
 */
export function foldVi(s: string): string {
  let out = '';
  for (const ch of s) {
    let f = ch.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    if (f === 'đ') f = 'd';
    // 极少数字符折叠后长度变化时保持原字符，避免下标错位
    out += f.length === ch.length ? f : ch;
  }
  return out;
}
