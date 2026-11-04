/**
 * 知识库（/knowledge）越南语内容
 *
 * - 主题标签 TOPIC_LABEL 的越南语版
 * - 十四主星简介 STAR_BRIEF_SEO 的越南语版
 * - 论断正文（一句话定调/核心论断/命盘依据/经典出处）：开源版 STAR_DB 为空，
 *   此处预留 KNOWLEDGE_ARTICLES_VI（key = `${starSlug}/${topic}`），有译文时优先使用。
 * URL slug 不变。
 */
import type { Locale } from '../config';
import type { TopicKey } from '@/lib/ziwei/db-analysis';
import { TOPIC_LABEL } from '@/lib/ziwei/db-analysis';
import { STAR_BRIEF_SEO } from '@/lib/seo/knowledge';

export const TOPIC_LABEL_VI: Record<TopicKey, string> = {
  overview:    'Tổng quan mệnh cách',
  personality: 'Tính cách',
  love:        'Tình cảm hôn nhân',
  career:      'Sự nghiệp nghề nghiệp',
  wealth:      'Tài lộc vận thế',
  health:      'Sức khỏe',
  family:      'Anh em, hợp tác',
  children:    'Duyên con cái',
  move:        'Di chuyển, xuất ngoại',
  friends:     'Quan hệ, quý nhân',
  home:        'Nhà đất, bất động sản',
  spirit:      'Tinh thần, phúc đức',
  parents:     'Cha mẹ, bề trên',
};

export const STAR_BRIEF_VI: Record<string, string> = {
  '紫微': 'Tử Vi là Đế tinh, chủ sự tôn quý, hóa khí là Tôn. Thủ Mệnh thì có khí chất lãnh đạo, hợp với tổ chức lớn, vị trí cao.',
  '天机': 'Thiên Cơ là sao trí tuệ, chủ linh hoạt biến hóa, hóa khí là Thiện. Thủ Mệnh thì thông minh lanh lợi, hợp làm tham mưu, hoạch định.',
  '太阳': 'Thái Dương là sao quý của nam, chủ danh dự và công vụ, hóa khí là Quý. Thủ Mệnh thì quang minh lỗi lạc, hợp công chức, danh tiếng.',
  '武曲': 'Vũ Khúc là Tài tinh, chủ cương nghị quả quyết, hóa khí là Tài. Thủ Mệnh thì giỏi quản lý tiền bạc, hợp thực nghiệp, tài chính.',
  '天同': 'Thiên Đồng là Phúc tinh, chủ ôn hòa hưởng thụ, hóa khí là Phúc. Thủ Mệnh thì tính tình ôn hòa, có phúc khí.',
  '廉贞': 'Liêm Trinh là thứ đào hoa tinh, văn võ kiêm toàn, hóa khí là Tù. Thủ Mệnh thì đa tài đa nghệ, tình cảm phong phú.',
  '天府': 'Thiên Phủ là Nam Đế, sao giữ kho tài, chủ vững vàng thận trọng, hóa khí là Lệnh. Thủ Mệnh thì phẩm hạnh đoan chính, giỏi giữ của.',
  '太阴': 'Thái Âm là sao Mặt Trăng chủ phú quý, chủ điền trạch giàu có, hóa khí là Phú. Thủ Mệnh thì tình cảm tinh tế, mệnh nữ tốt nhất.',
  '贪狼': 'Tham Lang là sao đào hoa, dục vọng, đa tài, giỏi giao tiếp, hóa khí là Đào hoa. Thủ Mệnh thì nhiều tài nghệ, giao du rộng.',
  '巨门': 'Cự Môn là sao thị phi, khẩu tài, chủ tranh biện, truyền thông, hóa khí là Ám. Thủ Mệnh thì ăn nói giỏi, hợp làm luật sư, giáo viên.',
  '天相': 'Thiên Tướng là Ấn tinh phụ tá, chủ trung hậu thật thà, hóa khí là Ấn. Thủ Mệnh thì phẩm hạnh đoan chính, hợp hành chính, pháp vụ.',
  '天梁': 'Thiên Lương là sao lão nhân, Ấm tinh, giỏi gặp hung hóa cát, hóa khí là Ấm. Thủ Mệnh thì từ bi lương thiện, hợp ngành luật, y.',
  '七杀': 'Thất Sát là Tướng tinh, chủ cô độc, quả quyết, mạo hiểm, hóa khí là Túc sát. Thủ Mệnh thì cương nghị quả quyết, hợp quân cảnh, khởi nghiệp.',
  '破军': 'Phá Quân là sao phá cũ lập mới, chủ duyên lục thân mỏng, hóa khí là Hao. Thủ Mệnh thì khai sáng, biến động, hợp chuyên môn kỹ thuật.',
};

export interface KnowledgeArticleVi {
  dingdiao?: string;
  lundian?: string;
  yiju?: string;
  chuchu?: string;
}

/** 论断正文越南语版（key = `${starSlug}/${topic}`）。开源版内容库为空，故此处也为空。 */
export const KNOWLEDGE_ARTICLES_VI: Record<string, KnowledgeArticleVi> = {};

export function getTopicLabel(topic: TopicKey, locale: Locale): string {
  return locale === 'vi' ? TOPIC_LABEL_VI[topic] ?? TOPIC_LABEL[topic] : TOPIC_LABEL[topic];
}

export function getStarBrief(star: string, locale: Locale): string {
  const zh = STAR_BRIEF_SEO[star] ?? '';
  return locale === 'vi' ? STAR_BRIEF_VI[star] ?? zh : zh;
}

/** 返回按语言选择的论断四段；越南语缺译文时回退中文原文 */
export function localizeKnowledgeParsed<T extends { dingdiao: string; lundian: string; yiju: string; chuchu: string }>(
  parsed: T, slug: string, topic: TopicKey, locale: Locale,
): T {
  if (locale !== 'vi') return parsed;
  const vi = KNOWLEDGE_ARTICLES_VI[`${slug}/${topic}`];
  if (!vi) return parsed;
  return {
    ...parsed,
    dingdiao: vi.dingdiao ?? parsed.dingdiao,
    lundian: vi.lundian ?? parsed.lundian,
    yiju: vi.yiju ?? parsed.yiju,
    chuchu: vi.chuchu ?? parsed.chuchu,
  };
}
