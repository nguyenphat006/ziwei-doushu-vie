/** 古籍越南语译文结构（与 lib/classics/types.ts 的 Book 一一对应） */
export interface ChapterVi {
  title: string;
  subtitle?: string;
}

export interface BookVi {
  title: string;
  dynasty: string;
  author: string;
  intro: string;
  /** 与原书 chapters 同序 */
  chapters: ChapterVi[];
  /** 段落 id → 越南语译文（dịch nghĩa） */
  paragraphs: Record<string, string>;
}
