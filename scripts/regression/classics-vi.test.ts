/**
 * 古籍越南语译文完整性：每部书、每个章节、每个段落 id 都必须有越南语译文；
 * 并检查越南语检索（不分声调）与中文检索均可用、zh 模式行为与 searchClassics 一致。
 */
import { ALL_BOOKS, searchClassics, searchClassicsLocalized } from '../../lib/classics';
import { CLASSICS_VI, CLASSIC_PARAGRAPHS_VI, foldVi } from '../../lib/i18n/content/classics';

const errors: string[] = [];
const allIds = new Set<string>();

for (const book of ALL_BOOKS) {
  const vi = CLASSICS_VI[book.slug];
  if (!vi) { errors.push(`缺少书籍译文: ${book.slug}`); continue; }
  for (const k of ['title', 'dynasty', 'author', 'intro'] as const) {
    if (!vi[k]?.trim()) errors.push(`${book.slug}.${k} 为空`);
  }
  if (vi.chapters.length !== book.chapters.length) {
    errors.push(`${book.slug} 章节数不一致: zh=${book.chapters.length} vi=${vi.chapters.length}`);
  }
  book.chapters.forEach((ch, i) => {
    const vc = vi.chapters[i];
    if (!vc?.title?.trim()) errors.push(`${book.slug} 第 ${i} 章缺标题译文`);
    if (ch.subtitle && !vc?.subtitle?.trim()) errors.push(`${book.slug} 第 ${i} 章缺副标题译文`);
    for (const p of ch.paragraphs) {
      allIds.add(p.id);
      const t = vi.paragraphs[p.id];
      if (!t?.trim()) errors.push(`缺少段落译文: ${p.id}`);
      else if (/[一-鿿]/.test(t)) errors.push(`段落译文含汉字: ${p.id}`);
    }
  });
}
for (const id of Object.keys(CLASSIC_PARAGRAPHS_VI)) {
  if (!allIds.has(id)) errors.push(`多余的段落译文 id（原文不存在）: ${id}`);
}

// 检索
if (foldVi('Thất Sát Triều Đẩu') !== 'that sat trieu dau') errors.push(`foldVi 结果异常: ${foldVi('Thất Sát Triều Đẩu')}`);
const viHits = searchClassicsLocalized('that sat trieu dau', 'vi', 50);
if (!viHits.some(h => h.paragraphId === 'gsf-3-2' && h.translationSnippet?.includes('<mark>'))) errors.push('越南语无声调检索未命中 gsf-3-2');
const zhInVi = searchClassicsLocalized('七杀朝斗', 'vi', 50);
if (!zhInVi.some(h => h.paragraphId === 'gsf-3-2')) errors.push('越南语模式下中文检索未命中 gsf-3-2');
const zhA = JSON.stringify(searchClassics('化忌', 50));
const zhB = JSON.stringify(searchClassicsLocalized('化忌', 'zh', 50));
if (zhA !== zhB) errors.push('zh 模式检索结果与 searchClassics 不一致');

if (errors.length) {
  console.error(`✗ classics-vi: ${errors.length} 个问题`);
  for (const e of errors) console.error('  - ' + e);
  process.exit(1);
}
console.log(`✓ classics-vi: ${ALL_BOOKS.length} 部书、${allIds.size} 段均有越南语译文，检索正常`);
