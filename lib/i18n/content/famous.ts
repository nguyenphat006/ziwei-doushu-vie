/**
 * 名人命盘（lib/ziwei/famous.ts）的越南语版本，按 FamousPerson.id 索引。
 * 中国人名一律用汉越音（如 毛泽东 → Mao Trạch Đông），外国人用通行原名。
 * 注意：lib/ziwei/famous.ts 为 server-only，这里只引用类型。
 */
import type { Locale } from '../config';
import type { FamousPerson } from '../../ziwei/famous';

export interface FamousPersonText {
  name: string;
  description: string;
  notable: string;
}

export const FAMOUS_VI: Record<string, FamousPersonText> = {
  'ma-yun': {
    name: 'Mã Vân (Jack Ma)',
    description: 'Nhà sáng lập Alibaba',
    notable: 'Lá số cho thấy sức mạnh phá cách rồi tái thiết cực lớn; tinh diệu cung Quan Lộc tương ứng rõ rệt với đế chế thương mại Internet.',
  },
  'li-jiacheng': {
    name: 'Lý Gia Thành (Li Ka-shing)',
    description: 'Siêu tỷ phú Hồng Kông, người sáng lập tập đoàn CK Hutchison',
    notable: 'Tứ Hóa ở cung Tài Bạch là ví dụ tuyệt vời để nghiên cứu lá số người giàu nhất phương Đông; Lộc Tồn giữ của, càng tích càng dày.',
  },
  'ren-zhengfei': {
    name: 'Nhậm Chính Phi',
    description: 'Nhà sáng lập Huawei',
    notable: 'Cách cục Thất Sát nhập Mệnh, một đời đi ngược gió, càng bị chèn ép càng mạnh mẽ — giáo trình sống cho lý thuyết Thất Sát của Nghê sư.',
  },
  'zhang-ailing': {
    name: 'Trương Ái Linh',
    description: 'Bậc thầy văn học hiện đại Trung Quốc',
    notable: 'Tổ hợp sao cô độc trong lá số đối chiếu kỳ lạ với cuộc tình truyền kỳ và thành tựu văn chương của bà.',
  },
  'jay-chou': {
    name: 'Châu Kiệt Luân (Jay Chou)',
    description: 'Thiên vương nhạc pop Hoa ngữ',
    notable: 'Tổ hợp Văn Khúc và Tham Lang, mệnh trời sinh tài nghệ; lá số giải thích vì sao anh có thể vượt qua mọi phong cách âm nhạc.',
  },
  'wang-fei': {
    name: 'Vương Phi (Faye Wong)',
    description: 'Nữ ca sĩ mang màu sắc huyền thoại nhất làng nhạc Hoa ngữ',
    notable: 'Tinh diệu cung Phu Thê tương ứng rõ rệt với hai cuộc hôn nhân truyền kỳ của bà; cách cục tình cảm rất đáng nghiên cứu.',
  },
  'lin-zhiling': {
    name: 'Lâm Chí Linh',
    description: 'Người mẫu, diễn viên nổi tiếng Đài Loan',
    notable: 'Điển hình mỹ nhân Thái Âm thủ Mệnh; lá số ấn chứng hoàn hảo nhận định của Nghê sư: "Thái Âm nhập Mệnh, con gái đẹp nhất".',
  },
  'steve-jobs': {
    name: 'Steve Jobs',
    description: 'Đồng sáng lập Apple',
    notable: 'Cách cục Phá Quân nhập Mệnh: bị cha mẹ ruột bỏ rơi rồi lại dựng nên đế chế Apple — lá số điển hình của "phá rồi mới lập".',
  },
  'elon-musk': {
    name: 'Elon Musk',
    description: 'Nhà sáng lập Tesla, SpaceX',
    notable: 'Biểu hiện tột cùng của cách Sát Phá Tham, sao Dịch Mã (Thiên Mã) trong lá số rất vượng; cả đời không ngừng thay đổi ranh giới tương lai của nhân loại.',
  },
  'yao-ming': {
    name: 'Diêu Minh (Yao Ming)',
    description: 'Trung phong huyền thoại NBA, gương mặt đại diện bóng rổ Trung Quốc',
    notable: 'Thiên Lương thủ Mệnh, cao lớn uy nghiêm; tinh tượng cung Quan Lộc khớp rõ rệt với thành tựu sự nghiệp.',
  },
  'li-na': {
    name: 'Lý Na (Li Na)',
    description: 'Tay vợt Trung Quốc vô địch Grand Slam',
    notable: 'Thất Sát hóa khí, số mệnh định sẵn phải cạnh tranh; Đại hạn, Lưu niên tương ứng chính xác với thời điểm vô địch Roland Garros.',
  },
};

export const FAMOUS_CATEGORY_VI: Record<string, string> = {
  '商业': 'Kinh doanh',
  '文艺': 'Văn nghệ',
  '科技': 'Công nghệ',
  '体育': 'Thể thao',
  '历史': 'Lịch sử',
};

/** 返回越南语显示文本；中文环境或缺条目时返回原中文字段 */
export function localizeFamousPerson(person: FamousPerson, locale: Locale): FamousPersonText & { category: string } {
  const vi = locale === 'vi' ? FAMOUS_VI[person.id] : undefined;
  if (!vi) {
    return { name: person.name, description: person.description, notable: person.notable, category: person.category };
  }
  return { ...vi, category: FAMOUS_CATEGORY_VI[person.category] ?? person.category };
}
