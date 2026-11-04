/**
 * 紫微术语 → 越南语（Hán-Việt）对照表
 *
 * 基础词表取自 iztro 自带的 vi-VN 语言包，并按越南紫微通行用语校正
 * （如「陷」作 Hãm、「童限」作 Đồng Hạn）。
 * 引擎内部仍用中文名（星名、宫名参与计算与比对），本表只用于显示。
 */
import type { Locale } from './config';

export const TERMS_VI: Record<string, string> = {
  // ── 十四主星 ──
  '紫微': 'Tử Vi', '天机': 'Thiên Cơ', '太阳': 'Thái Dương', '武曲': 'Vũ Khúc',
  '天同': 'Thiên Đồng', '廉贞': 'Liêm Trinh', '天府': 'Thiên Phủ', '太阴': 'Thái Âm',
  '贪狼': 'Tham Lang', '巨门': 'Cự Môn', '天相': 'Thiên Tướng', '天梁': 'Thiên Lương',
  '七杀': 'Thất Sát', '破军': 'Phá Quân',

  // ── 辅星 / 煞星 / 杂曜 ──
  '左辅': 'Tả Phù', '右弼': 'Hữu Bật', '文昌': 'Văn Xương', '文曲': 'Văn Khúc',
  '禄存': 'Lộc Tồn', '天马': 'Thiên Mã', '擎羊': 'Kình Dương', '陀罗': 'Đà La',
  '火星': 'Hỏa Tinh', '铃星': 'Linh Tinh', '天魁': 'Thiên Khôi', '天钺': 'Thiên Việt',
  '地空': 'Địa Không', '地劫': 'Địa Kiếp', '劫杀': 'Kiếp Sát', '天空': 'Thiên Không',
  '天刑': 'Thiên Hình', '天姚': 'Thiên Diêu', '解神': 'Giải Thần', '阴煞': 'Âm Sát',
  '天喜': 'Thiên Hỷ', '天官': 'Thiên Quan', '天福': 'Thiên Phúc', '天哭': 'Thiên Khốc',
  '天虚': 'Thiên Hư', '龙池': 'Long Trì', '凤阁': 'Phượng Các', '红鸾': 'Hồng Loan',
  '孤辰': 'Cô Thần', '寡宿': 'Quả Tú', '蜚廉': 'Phi Liêm', '破碎': 'Phá Toái',
  '台辅': 'Thai Phụ', '封诰': 'Phong Cáo', '天巫': 'Thiên Vu', '天月': 'Thiên Nguyệt',
  '三台': 'Tam Thai', '八座': 'Bát Tọa', '恩光': 'Ân Quang', '天贵': 'Thiên Quý',
  '天才': 'Thiên Tài', '天寿': 'Thiên Thọ', '截空': 'Triệt Không', '副截': 'Phó Triệt',
  '旬中': 'Tuần Trung', '旬空': 'Tuần Không', '副旬': 'Phó Tuần', '空亡': 'Không Vong',
  '截路': 'Triệt Lộ', '月德': 'Nguyệt Đức', '天伤': 'Thiên Thương', '天使': 'Thiên Sứ',
  '天厨': 'Thiên Trù', '年解': 'Niên Giải',

  // ── 长生十二神 ──
  '长生': 'Trường Sinh', '沐浴': 'Mộc Dục', '冠带': 'Quan Đới', '临官': 'Lâm Quan',
  '帝旺': 'Đế Vượng', '衰': 'Suy', '病': 'Bệnh', '死': 'Tử', '墓': 'Mộ', '绝': 'Tuyệt',
  '胎': 'Thai', '养': 'Dưỡng',

  // ── 博士十二神 ──
  '博士': 'Bác Sĩ', '力士': 'Lực Sĩ', '青龙': 'Thanh Long', '小耗': 'Tiểu Hao',
  '将军': 'Tướng Quân', '奏书': 'Tấu Thư', '飞廉': 'Phi Liêm', '喜神': 'Hỷ Thần',
  '病符': 'Bệnh Phù', '大耗': 'Đại Hao', '伏兵': 'Phục Binh', '官府': 'Quan Phủ',

  // ── 岁前十二神 ──
  '岁建': 'Tuế Kiến', '晦气': 'Hối Khí', '丧门': 'Tang Môn', '贯索': 'Quán Sách',
  '官符': 'Quan Phù', '龙德': 'Long Đức', '白虎': 'Bạch Hổ', '天德': 'Thiên Đức',
  '吊客': 'Điếu Khách', '岁破': 'Tuế Phá',

  // ── 将前十二神 ──
  '将星': 'Tướng Tinh', '攀鞍': 'Phan An', '岁驿': 'Tuế Dịch', '息神': 'Tức Thần',
  '华盖': 'Hoa Cái', '劫煞': 'Kiếp Sát', '灾煞': 'Tai Sát', '天煞': 'Thiên Sát',
  '指背': 'Chỉ Bối', '咸池': 'Hàm Trì', '月煞': 'Nguyệt Sát', '亡神': 'Vong Thần',

  // ── 运限 / 流年星 ──
  '运魁': 'Vận Khôi', '运钺': 'Vận Việt', '运昌': 'Vận Xương', '运曲': 'Vận Khúc',
  '运鸾': 'Vận Loan', '运喜': 'Vận Hỷ', '运禄': 'Vận Lộc', '运羊': 'Vận Dương',
  '运陀': 'Vận Đà', '运马': 'Vận Mã',
  '流魁': 'Lưu Khôi', '流钺': 'Lưu Việt', '流昌': 'Lưu Xương', '流曲': 'Lưu Khúc',
  '流鸾': 'Lưu Loan', '流喜': 'Lưu Hỷ', '流禄': 'Lưu Lộc', '流羊': 'Lưu Dương',
  '流陀': 'Lưu Đà', '流马': 'Lưu Mã',

  // ── 十二宫 ──
  '命宫': 'Mệnh', '命': 'Mệnh', '身宫': 'Thân', '身': 'Thân',
  '兄弟': 'Huynh Đệ', '夫妻': 'Phu Thê', '子女': 'Tử Nữ', '财帛': 'Tài Bạch',
  '疾厄': 'Tật Ách', '迁移': 'Thiên Di', '交友': 'Nô Bộc', '仆役': 'Nô Bộc',
  '奴仆': 'Nô Bộc', '官禄': 'Quan Lộc', '事业': 'Quan Lộc', '田宅': 'Điền Trạch',
  '福德': 'Phúc Đức', '父母': 'Phụ Mẫu', '来因': 'Lai Nhân',

  // ── 天干 ──
  '甲': 'Giáp', '乙': 'Ất', '丙': 'Bính', '丁': 'Đinh', '戊': 'Mậu',
  '己': 'Kỷ', '庚': 'Canh', '辛': 'Tân', '壬': 'Nhâm', '癸': 'Quý',

  // ── 地支 ──
  '子': 'Tý', '丑': 'Sửu', '寅': 'Dần', '卯': 'Mão', '辰': 'Thìn', '巳': 'Tỵ',
  '午': 'Ngọ', '未': 'Mùi', '申': 'Thân', '酉': 'Dậu', '戌': 'Tuất', '亥': 'Hợi',

  // ── 亮度 ──
  '庙': 'Miếu', '旺': 'Vượng', '得': 'Đắc', '利': 'Lợi', '平': 'Bình',
  '不': 'Bất', '闲': 'Nhàn', '陷': 'Hãm', '地': 'Địa',

  // ── 四化 ──
  '禄': 'Lộc', '权': 'Quyền', '科': 'Khoa', '忌': 'Kỵ',
  '化禄': 'Hóa Lộc', '化权': 'Hóa Quyền', '化科': 'Hóa Khoa', '化忌': 'Hóa Kỵ',
  '四化': 'Tứ Hóa', '自化': 'Tự Hóa',

  // ── 五行 / 五行局 ──
  '金': 'Kim', '木': 'Mộc', '水': 'Thủy', '火': 'Hỏa', '土': 'Thổ',
  '水二局': 'Thủy Nhị Cục', '木三局': 'Mộc Tam Cục', '金四局': 'Kim Tứ Cục',
  '土五局': 'Thổ Ngũ Cục', '火六局': 'Hỏa Lục Cục',

  // ── 性别 / 阴阳 ──
  '男': 'Nam', '女': 'Nữ',
  '阳男': 'Dương Nam', '阴男': 'Âm Nam', '阳女': 'Dương Nữ', '阴女': 'Âm Nữ',

  // ── 运限 ──
  '大限': 'Đại Hạn', '小限': 'Tiểu Hạn', '童限': 'Đồng Hạn', '流年': 'Lưu Niên',
  '流月': 'Lưu Nguyệt', '流日': 'Lưu Nhật', '流时': 'Lưu Thời', '本命': 'Bản Mệnh',

  // ── 时辰 ──
  '子时': 'Giờ Tý', '早子时': 'Giờ Tý sớm', '晚子时': 'Giờ Tý muộn',
  '丑时': 'Giờ Sửu', '寅时': 'Giờ Dần', '卯时': 'Giờ Mão', '辰时': 'Giờ Thìn',
  '巳时': 'Giờ Tỵ', '午时': 'Giờ Ngọ', '未时': 'Giờ Mùi', '申时': 'Giờ Thân',
  '酉时': 'Giờ Dậu', '戌时': 'Giờ Tuất', '亥时': 'Giờ Hợi',

  // ── 生肖 ──
  '鼠': 'Tý (Chuột)', '牛': 'Sửu (Trâu)', '虎': 'Dần (Hổ)', '兔': 'Mão (Mèo)',
  '龙': 'Thìn (Rồng)', '蛇': 'Tỵ (Rắn)', '马': 'Ngọ (Ngựa)', '羊': 'Mùi (Dê)',
  '猴': 'Thân (Khỉ)', '鸡': 'Dậu (Gà)', '狗': 'Tuất (Chó)', '猪': 'Hợi (Lợn)',

  // ── 星曜类别 ──
  '主星': 'Chính tinh', '辅星': 'Phụ tinh', '吉星': 'Cát tinh', '煞星': 'Sát tinh',
  '凶星': 'Hung tinh', '杂曜': 'Tạp diệu', '命主': 'Mệnh chủ', '身主': 'Thân chủ',
  '五行局': 'Ngũ hành cục',
};

const SUFFIXES: Array<[string, string]> = [
  ['宫', ''],    // 兄弟宫 → Huynh Đệ
  ['星', ''],    // 紫微星 → Tử Vi
];

/** 查单个术语的越南语；查不到时尝试去掉「宫」「星」后缀，再查不到返回 undefined */
export function lookupTermVi(zh: string): string | undefined {
  const direct = TERMS_VI[zh];
  if (direct) return direct;
  for (const [suffix] of SUFFIXES) {
    if (zh.length > suffix.length && zh.endsWith(suffix)) {
      const hit = TERMS_VI[zh.slice(0, -suffix.length)];
      if (hit) return hit;
    }
  }
  return undefined;
}

/**
 * 术语本地化：中文环境原样返回；越南语环境查表，查不到时
 * 对干支组合（如「甲子」「壬午」）逐字翻译，否则原样返回。
 */
export function localizeTerm(zh: string, locale: Locale): string {
  if (locale === 'zh' || !zh) return zh;
  const hit = lookupTermVi(zh);
  if (hit) return hit;
  // 干支组合 / 四柱（逐字都是干或支时才逐字翻）
  const chars = Array.from(zh);
  if (chars.length >= 2 && chars.length <= 3 && chars.every(c => /[甲乙丙丁戊己庚辛壬癸子丑寅卯辰巳午未申酉戌亥]/.test(c))) {
    return chars.map(c => TERMS_VI[c]).join(' ');
  }
  return zh;
}
