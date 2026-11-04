/**
 * 格局（lib/ziwei/patterns.ts）输出的越南语本地化层
 *
 * patterns.ts 保持中文输出不变（回归测试按中文断言），这里在显示层把
 * name / description / palaces / conditions / source 以及命宫摘要翻成越南语。
 * 静态字符串走精确对照表；带星名 / 宫名 / 地支的动态字符串走正则模板，
 * 捕获到的术语交给 localizeTerm。查不到时回退中文。
 *
 * 覆盖校验：scripts/regression/patterns-vi.test.ts（扫大量命盘，输出不得残留汉字）。
 */
import type { Locale } from '../config';
import { localizeTerm } from '../terms';
import type { Pattern, getMingGongSummary } from '../../ziwei/patterns';

type MingGongSummary = ReturnType<typeof getMingGongSummary>;

const T = (zh: string) => localizeTerm(zh, 'vi');
const list = (zh: string) => zh.split('、').map(T).join(', ');

// ────────────────── 格局名 ──────────────────
const NAME_VI: Record<string, string> = {
  '君臣庆会': 'Quân Thần Khánh Hội',
  '紫府同宫': 'Tử Phủ Đồng Cung',
  '府相朝垣': 'Phủ Tướng Triều Viên',
  '阳梁昌禄': 'Dương Lương Xương Lộc',
  '火贪格': 'Hỏa Tham cách',
  '铃贪格': 'Linh Tham cách',
  '武贪格': 'Vũ Tham cách',
  '杀破狼': 'Sát Phá Tham',
  '机月同梁': 'Cơ Nguyệt Đồng Lương',
  '廉贞天相格': 'Liêm Trinh Thiên Tướng cách',
  '武曲七杀': 'Vũ Khúc Thất Sát',
  '天同天梁格': 'Thiên Đồng Thiên Lương cách',
  '日月同宫': 'Nhật Nguyệt Đồng Cung',
  '日月夹命': 'Nhật Nguyệt Giáp Mệnh',
  '巨日同宫': 'Cự Nhật Đồng Cung',
  '石中隐玉': 'Thạch Trung Ẩn Ngọc',
  '明珠出海': 'Minh Châu Xuất Hải',
  '紫微入命': 'Tử Vi Nhập Mệnh',
  '辅弼夹命': 'Tả Hữu Giáp Mệnh',
  '昌曲夹命': 'Xương Khúc Giáp Mệnh',
  '魁钺夹命': 'Khôi Việt Giáp Mệnh',
  '双禄朝垣': 'Song Lộc Triều Viên',
  '三奇加会': 'Tam Kỳ Gia Hội',
  '羊陀夹忌': 'Kình Đà Giáp Kỵ',
  '火铃夹命': 'Hỏa Linh Giáp Mệnh',
  '空劫夹命': 'Không Kiếp Giáp Mệnh',
  '廉杀羊': 'Liêm Sát Dương',
  '巨火羊': 'Cự Hỏa Dương',
  '铃昌陀武': 'Linh Xương Đà Vũ',
  '马头带箭': 'Mã Đầu Đới Tiễn',
  '禄存守命': 'Lộc Tồn Thủ Mệnh',
  '禄存守身': 'Lộc Tồn Thủ Thân',
  '天马入命': 'Thiên Mã Nhập Mệnh',
  '天马在迁': 'Thiên Mã tại Thiên Di',
  '化禄入财': 'Hóa Lộc Nhập Tài Bạch',
  '化权入官': 'Hóa Quyền Nhập Quan Lộc',
  '化科入命': 'Hóa Khoa Nhập Mệnh',
  '化科入身': 'Hóa Khoa Nhập Thân',
  '机月同梁三星会': 'Cơ Nguyệt Đồng Lương (hội ba sao)',
  '昌曲坐命': 'Xương Khúc Tọa Mệnh',
  '昌曲同会': 'Xương Khúc Đồng Hội',
  '辅弼同会': 'Tả Hữu Đồng Hội',
  '魁钺同会': 'Khôi Việt Đồng Hội',
  '科权双会': 'Khoa Quyền Song Hội',
};

const NAME_TEMPLATES: Array<[RegExp, (m: RegExpMatchArray) => string]> = [
  [/^(.+)化禄入命$/, m => `${T(m[1])} Hóa Lộc Nhập Mệnh`],
  [/^(.+)化忌入命$/, m => `${T(m[1])} Hóa Kỵ Nhập Mệnh`],
  [/^(.+)化忌入迁$/, m => `${T(m[1])} Hóa Kỵ Nhập Thiên Di`],
];

// ────────────────── 描述 ──────────────────
const DESC_VI: Record<string, string> = {
  // 君臣庆会
  '紫微入命，左辅右弼同会，帝王得贤臣辅佐，主大富大贵、统御之命。一生贵人不绝，宜走政商高位、跨界领袖之途。':
    'Tử Vi nhập Mệnh, Tả Phù Hữu Bật cùng hội chiếu – bậc đế vương có hiền thần phò tá, chủ đại phú đại quý, mệnh của người thống lĩnh. Cả đời quý nhân không dứt, hợp đi con đường địa vị cao trong chính trường, thương trường hoặc làm thủ lĩnh đa lĩnh vực.',
  // 紫府同宫
  '紫微天府同入命宫，帝相并临，尊贵之命。主品行端正、衣食无忧、有领导才能，宜担任要职。需要左右辅弼来配合方为完整大格。':
    'Tử Vi và Thiên Phủ cùng nhập Mệnh, đế tinh và tướng tinh cùng giáng lâm, là mệnh tôn quý. Chủ phẩm hạnh đoan chính, cơm áo không lo, có tài lãnh đạo, hợp đảm nhận chức vụ trọng yếu. Cần có Tả Phù Hữu Bật phối hợp mới thành đại cách trọn vẹn.',
  '紫微天府同宫但未坐命，主一生有贵人贵气依托，但本身不一定大富贵，需看会照吉煞而定。':
    'Tử Vi và Thiên Phủ đồng cung nhưng không tọa Mệnh: cả đời có quý nhân, quý khí để nương tựa, song bản thân chưa chắc đại phú quý, phải xem cát tinh hay sát tinh hội chiếu mà định.',
  // 府相朝垣
  '天府天相分守命宫三方四正，文武并济、权印双辉，主一生衣食丰足、地位崇高。古书云"府相朝垣千钟食禄"，常见于政界、企业管理者。':
    'Thiên Phủ và Thiên Tướng chia nhau trấn giữ tam phương tứ chính của Mệnh, văn võ kiêm toàn, quyền và ấn cùng rạng, chủ cả đời cơm áo dư đầy, địa vị cao. Sách xưa nói "Phủ Tướng triều viên, thiên chung thực lộc" (Phủ Tướng chầu Mệnh, hưởng lộc nghìn chung), thường gặp ở người làm chính trị, quản lý doanh nghiệp.',
  // 阳梁昌禄
  '太阳、天梁、文昌、禄存四星齐会命宫三方，号称"科举之星"，主清贵显达、考运极佳，宜走学术、文教、研究、专业认证之路，一生功名易就。':
    'Thái Dương, Thiên Lương, Văn Xương, Lộc Tồn cùng hội tam phương của Mệnh, được gọi là "sao khoa cử", chủ thanh quý hiển đạt, vận thi cử rất tốt; hợp con đường học thuật, giáo dục, nghiên cứu, chứng chỉ chuyên môn, cả đời công danh dễ thành.',
  // 武贪格
  '武曲贪狼会命，财星与桃花欲望星交辉，古书云"武贪不发少年人"——三十岁后方能厚积薄发。主中年以后大富大贵，财源由人脉、应酬、欲望管理而来，适合金融、投机、销售、娱乐业。':
    'Vũ Khúc và Tham Lang hội Mệnh, tài tinh cùng sao đào hoa – dục vọng giao huy. Sách xưa nói "Vũ Tham bất phát thiếu niên nhân" (Vũ Tham không phát lúc tuổi trẻ) – sau ba mươi tuổi mới tích lũy dày mà bùng phát. Chủ từ trung niên trở đi đại phú đại quý, tiền tài đến từ quan hệ, giao tế và biết quản trị dục vọng; hợp tài chính, đầu cơ, kinh doanh bán hàng, giải trí.',
  // 杀破狼
  '七杀、破军、贪狼三星会命，开创闯荡之命格。一生变动多、不甘平凡，宜创业、军警、业务、销售。中年后才能稳定守成，年轻时易因冲动失利。':
    'Thất Sát, Phá Quân, Tham Lang cùng hội Mệnh – mệnh cách khai sáng, xông pha. Cả đời nhiều biến động, không cam chịu tầm thường, hợp khởi nghiệp, quân đội – công an, nghiệp vụ, kinh doanh. Sau trung niên mới ổn định giữ thành, lúc trẻ dễ thất bại vì bốc đồng.',
  // 机月同梁
  '天机太阴天同天梁四星齐入命迁财官，文质彬彬、聪慧善谋。最适合公职、学术、文艺、医疗、服务等需稳定累积的行业，不宜大冒险大投机。':
    'Thiên Cơ, Thái Âm, Thiên Đồng, Thiên Lương cùng nhập Mệnh – Thiên Di – Tài Bạch – Quan Lộc, nho nhã lịch thiệp, thông minh giỏi mưu tính. Hợp nhất với công chức, học thuật, văn nghệ, y tế, dịch vụ – những ngành cần tích lũy ổn định; không nên mạo hiểm hay đầu cơ lớn.',
  // 廉贞天相
  '廉贞天相同宫，印绶格局，主秉公处事、清廉之名，宜任公职、行政管理、法务、企划。怕见擎羊化忌，则反主官非。':
    'Liêm Trinh Thiên Tướng đồng cung, là cách cục ấn thụ, chủ làm việc công minh, có tiếng thanh liêm; hợp công chức, quản lý hành chính, pháp vụ, hoạch định. Sợ gặp Kình Dương hoặc Hóa Kỵ, khi đó lại chủ kiện tụng quan sự.',
  // 武曲七杀
  '武曲七杀同宫，将星配财星，主果决刚毅、理财能力强，适合金融、军警、创业。但忌见化忌煞星，否则凶险。一生奋斗、积财但操心。':
    'Vũ Khúc Thất Sát đồng cung, tướng tinh phối tài tinh, chủ quyết đoán cương nghị, giỏi quản lý tài chính; hợp tài chính, quân đội – công an, khởi nghiệp. Nhưng kỵ gặp Hóa Kỵ và sát tinh, nếu không sẽ hung hiểm. Cả đời phấn đấu, tích được của nhưng nhiều lo toan.',
  // 天同天梁
  '天同天梁同宫，福星与荫星共会，主宽厚和善、乐于助人，宜医疗、教育、宗教、社会公益。但偏温和保守，难成大富大贵之局。':
    'Thiên Đồng Thiên Lương đồng cung, phúc tinh và ấm tinh cùng hội, chủ khoan hậu hiền hòa, vui lòng giúp người; hợp y tế, giáo dục, tôn giáo, công ích xã hội. Nhưng thiên về ôn hòa bảo thủ, khó thành cục đại phú đại quý.',
  // 日月夹命
  '太阳太阴分居命宫两侧夹照，光明磊落，一生贵人相助，事业蓬勃。男主官贵，女主旺夫兴家。日月须不落陷方为真夹。':
    'Thái Dương và Thái Âm nằm hai bên kẹp chiếu cung Mệnh, quang minh lỗi lạc, cả đời có quý nhân giúp đỡ, sự nghiệp hưng thịnh. Nam chủ quan quý, nữ chủ vượng phu hưng gia. Nhật Nguyệt phải không hãm địa mới là thật giáp.',
  // 石中隐玉
  '巨门坐命子午，外表平凡而内蕴才学。早年默默无闻、中年方显贵气，宜走专业、研究、口才、传媒。需有禄权或文昌相助方能"凿石见玉"。':
    'Cự Môn tọa Mệnh tại Tý hoặc Ngọ, bề ngoài bình thường mà bên trong ẩn chứa tài học. Thuở trẻ âm thầm không tiếng tăm, trung niên mới hiển lộ quý khí; hợp chuyên môn, nghiên cứu, nghề dùng khẩu tài, truyền thông. Cần có Lộc, Quyền hoặc Văn Xương trợ giúp mới "đục đá thấy ngọc".',
  // 明珠出海
  '命未空宫，对宫丑宫日月同辉拱照，号"明珠出海"。主出生平凡、后天努力出头，宜远赴他乡、学术研究或大公司高位，主大富大贵。':
    'Mệnh tại Mùi là cung vô chính diệu, đối cung Sửu có Nhật Nguyệt đồng huy củng chiếu, gọi là "Minh Châu Xuất Hải" (ngọc sáng ra biển). Chủ xuất thân bình thường, nhờ nỗ lực về sau mà nổi bật; hợp đi xa lập nghiệp, nghiên cứu học thuật hoặc giữ vị trí cao ở công ty lớn, chủ đại phú đại quý.',
  // 紫微入命
  '紫微独坐命宫，帝王之星，自尊心强、有领导魅力。但紫微最忌"在野孤君"——若无左右辅弼相会，反成孤高自傲、易招毁谤。':
    'Tử Vi độc tọa cung Mệnh, là sao đế vương, lòng tự tôn cao, có sức hút lãnh đạo. Nhưng Tử Vi kỵ nhất cảnh "tại dã cô quân" (vua lẻ loi nơi đồng nội) – nếu không có Tả Phù Hữu Bật hội hợp thì lại thành cô cao tự phụ, dễ chuốc lời gièm pha.',
  // 辅弼夹命
  '左辅右弼夹命，传统论述认为此格象征贵人相助与福厚特质。适合走仕途、大企业管理等能发挥组织才能的方向。古书云"左辅右弼，终身福厚"——强调此格在组织协调中的优势。':
    'Tả Phù Hữu Bật giáp Mệnh, theo luận thuyết truyền thống cách này tượng trưng cho quý nhân tương trợ và phúc hậu. Hợp con đường quan trường, quản lý doanh nghiệp lớn – những hướng phát huy được tài tổ chức. Sách xưa nói "Tả Phụ Hữu Bật, chung thân phúc hậu" (cả đời phúc dày) – nhấn mạnh ưu thế của cách này trong tổ chức, điều phối.',
  // 昌曲夹命
  '文昌文曲夹命宫，主聪明俊秀、文采斐然，宜走文教、学术、艺术、写作。古书云"昌曲夹命主科甲"，最利考运。':
    'Văn Xương Văn Khúc giáp cung Mệnh, chủ thông minh tuấn tú, văn chương xuất sắc; hợp giáo dục, học thuật, nghệ thuật, viết lách. Sách xưa nói "Xương Khúc giáp Mệnh chủ khoa giáp" (đỗ đạt khoa bảng), lợi nhất cho thi cử.',
  // 魁钺夹命
  '天魁天钺夹命，男称天乙、女称玉堂，一生贵人提携。考试、求职、关键时刻常有意外贵人相助。':
    'Thiên Khôi Thiên Việt giáp Mệnh, nam gọi là Thiên Ất, nữ gọi là Ngọc Đường, cả đời được quý nhân nâng đỡ. Khi thi cử, xin việc hay lúc then chốt thường có quý nhân bất ngờ ra tay giúp đỡ.',
  // 双禄朝垣
  '化禄、禄存同会命宫三方四正，财源涌动、衣食丰足。古书云"双禄朝垣，富比陶朱"，主一生不愁财，多有正财横财兼得。':
    'Hóa Lộc và Lộc Tồn cùng hội tam phương tứ chính của Mệnh, tài nguyên dồi dào, cơm áo đủ đầy. Sách xưa nói "Song Lộc triều viên, phú tỷ Đào Chu" (giàu sánh Đào Chu Công), chủ cả đời không lo tiền bạc, thường được cả chính tài lẫn hoạnh tài.',
  // 三奇加会
  '化禄、化权、化科三吉化齐会命宫三方四正，号称"三奇加会"。主一生功名、财富、贵人三全，是紫微斗数最高吉格之一。':
    'Hóa Lộc, Hóa Quyền, Hóa Khoa – ba cát hóa cùng hội tam phương tứ chính của Mệnh, gọi là "Tam Kỳ Gia Hội". Chủ cả đời công danh, tài lộc, quý nhân đều trọn, là một trong những cát cách cao nhất của Tử Vi Đẩu Số.',
  // 羊陀夹忌
  '化忌坐命，左右擎羊陀罗夹命，古书云"羊陀夹忌为败局"，主一生劳碌奔波、坎坷不顺、身心俱疲。需以德行修养与积极做事化解，凡事谨慎为上。':
    'Hóa Kỵ tọa Mệnh, hai bên có Kình Dương Đà La kẹp Mệnh. Sách xưa nói "Dương Đà giáp Kỵ vi bại cục" (Kình Đà giáp Kỵ là cục thất bại), chủ cả đời lao lực bôn ba, gập ghềnh trắc trở, thân tâm mỏi mệt. Cần lấy tu dưỡng đức hạnh và tích cực làm việc để hóa giải, mọi việc lấy cẩn trọng làm đầu.',
  // 火铃夹命
  '火星铃星分居命宫前后两宫夹命，主性急、易冲动、突发意外或纠纷。需培养耐性、避免冲动决策。':
    'Hỏa Tinh và Linh Tinh nằm ở hai cung trước sau kẹp Mệnh, chủ tính nóng vội, dễ bốc đồng, dễ gặp sự cố bất ngờ hoặc tranh chấp. Cần rèn tính kiên nhẫn, tránh quyết định theo cảm xúc.',
  // 空劫夹命
  '地空地劫夹命，主财来财去、思想脱俗、易遁入宗教哲学。古书云"空劫夹命，财不聚"。宜技艺、宗教、研究等不重物质之业。':
    'Địa Không Địa Kiếp giáp Mệnh, chủ tiền đến rồi đi, tư tưởng thoát tục, dễ tìm đến tôn giáo, triết học. Sách xưa nói "Không Kiếp giáp Mệnh, tài bất tụ" (tiền không tụ). Hợp nghề kỹ nghệ, tôn giáo, nghiên cứu – những nghề không nặng vật chất.',
  // 廉杀羊
  '廉贞、七杀、擎羊三星会照命宫三方，传统论述中标记为需要特别关注的组合。此格在大限流年触发时提醒保持谨慎态度：驾驶安全、人际和平、医疗决策需理性——强调主动管理而非消极宿命。':
    'Liêm Trinh, Thất Sát, Kình Dương cùng hội chiếu tam phương của Mệnh, trong luận thuyết truyền thống được đánh dấu là tổ hợp cần đặc biệt lưu ý. Khi bị kích hoạt ở Đại hạn, Lưu niên, cách này nhắc nhở giữ thái độ thận trọng: an toàn khi lái xe, hòa khí trong quan hệ, quyết định y tế cần lý trí – nhấn mạnh chủ động quản lý chứ không phó mặc số mệnh.',
  // 巨火羊
  '巨门、火星、擎羊三星会照，传统古籍记载此格为需要警惕之组合（古文"终身缢死"为宿命论表述，今已不适用）。现代理解为：此组合象征直言易触发冲突、情绪激烈时需要自我觉察。修养方向是：练习温和表达、主动化解对立、培养情绪管理。':
    'Cự Môn, Hỏa Tinh, Kình Dương cùng hội chiếu, cổ thư ghi đây là tổ hợp cần cảnh giác (câu cổ văn "chung thân ải tử" là cách nói định mệnh luận, nay không còn phù hợp). Cách hiểu hiện đại: tổ hợp này tượng trưng cho việc nói thẳng dễ gây xung đột, khi cảm xúc dâng cao cần tự nhận biết. Hướng tu dưỡng: tập diễn đạt ôn hòa, chủ động hóa giải đối lập, rèn khả năng quản lý cảm xúc.',
  // 铃昌陀武
  '铃星、文昌、陀罗、武曲四星齐会，传统古籍记载此为需要特别关注之组合（古文"限至投河"为宿命论表述，非现代理解）。现代建议为：此组合在大限流年触发时，提醒理性处理重大决策、关注情绪波动、维持生活的稳定性——强调主动管理而非消极等待。':
    'Linh Tinh, Văn Xương, Đà La, Vũ Khúc cùng hội, cổ thư ghi đây là tổ hợp cần đặc biệt lưu ý (câu cổ văn "hạn chí đầu hà" là cách nói định mệnh luận, không phải cách hiểu hiện đại). Lời khuyên hiện đại: khi tổ hợp này bị kích hoạt ở Đại hạn, Lưu niên, hãy xử lý các quyết định lớn một cách lý trí, để ý dao động cảm xúc, giữ cuộc sống ổn định – nhấn mạnh chủ động quản lý chứ không thụ động chờ đợi.',
  // 马头带箭
  '擎羊于午宫坐命，号"马头带箭"，古书云"威镇边疆"。此格象征果决行动力与竞争精神，适合需要执行力与果敢决策的职业方向。传统论述同时提醒此格需要配合吉利星曜才能最优发挥——强调组合影响而非单星独论。':
    'Kình Dương tọa Mệnh tại cung Ngọ, gọi là "Mã Đầu Đới Tiễn" (đầu ngựa mang tên), sách xưa nói "uy trấn biên cương". Cách này tượng trưng cho năng lực hành động quyết đoán và tinh thần cạnh tranh, hợp các nghề cần khả năng thực thi và quyết định dứt khoát. Luận thuyết truyền thống đồng thời nhắc rằng cách này cần cát tinh phối hợp mới phát huy tốt nhất – nhấn mạnh ảnh hưởng của tổ hợp chứ không luận riêng một sao.',
  // 禄存守命 / 守身
  '禄存坐命，主一生衣食无忧、财禄稳定。性格保守，善积累，但羊陀夹禄须防小人。最宜配化禄、左辅右弼方为大格。':
    'Lộc Tồn tọa Mệnh, chủ cả đời cơm áo không lo, tài lộc ổn định. Tính cách bảo thủ, giỏi tích lũy, nhưng Kình Đà giáp Lộc nên phải đề phòng tiểu nhân. Tốt nhất phối với Hóa Lộc, Tả Phù Hữu Bật mới thành đại cách.',
  '禄存入身宫，主中年后财源稳定、得禄自享。倪师说「禄存入身，财气近身」——配偶或事业方向能带来稳定财禄。':
    'Lộc Tồn nhập cung Thân, chủ sau trung niên nguồn tài ổn định, có lộc tự hưởng. Nghê sư nói "Lộc Tồn nhập Thân, tài khí cận thân" (tài khí ở sát bên mình) – vợ/chồng hoặc hướng sự nghiệp có thể mang lại tài lộc ổn định.',
  // 天马
  '天马坐命，主一生奔波、动中得财，宜走商旅、外勤、跨界发展。倪师说「天马入命，无禄不发」——若再会禄存或化禄即「禄马交驰」之富格。':
    'Thiên Mã tọa Mệnh, chủ cả đời bôn ba, trong động mà được tài; hợp buôn bán đi xa, công việc bên ngoài, phát triển đa lĩnh vực. Nghê sư nói "Thiên Mã nhập Mệnh, vô Lộc bất phát" (không có Lộc thì không phát) – nếu hội thêm Lộc Tồn hoặc Hóa Lộc thì thành phú cách "Lộc Mã giao trì".',
  '天马在迁移宫，主外出有利、远行得财，宜异乡发展。配化禄主异地生财，配煞星则旅途多波折。':
    'Thiên Mã tại cung Thiên Di, chủ ra ngoài có lợi, đi xa được tài, hợp phát triển nơi đất khách. Phối Hóa Lộc chủ sinh tài ở xứ người, phối sát tinh thì đường xa nhiều trắc trở.',
  // 昌曲
  '文昌文曲同入命宫，主聪明俊秀、文采斐然，宜文学、教育、写作、咨询。最忌化忌——昌曲化忌主文书契约暗亏。':
    'Văn Xương Văn Khúc cùng nhập Mệnh, chủ thông minh tuấn tú, văn chương xuất sắc; hợp văn học, giáo dục, viết lách, tư vấn. Kỵ nhất Hóa Kỵ – Xương Khúc Hóa Kỵ chủ thiệt thòi ngầm về giấy tờ, hợp đồng.',
  '文昌文曲同会三方四正，主才华横溢、口才文笔俱佳。宜走需要表达与文采的行业，化科加持则名声大显。':
    'Văn Xương Văn Khúc cùng hội tam phương tứ chính, chủ tài hoa dồi dào, cả khẩu tài lẫn văn bút đều giỏi. Hợp những ngành cần khả năng diễn đạt và văn chương; có Hóa Khoa trợ lực thì danh tiếng vang xa.',
  // 辅弼同会
  '左辅右弼同会命宫三方四正，主一生贵人不绝、人缘极佳。最宜领导岗位与团队合作型工作。倪师说「辅弼夹命，平生贵人多」——你不是单打独斗的命，要善用人际网络。':
    'Tả Phù Hữu Bật cùng hội tam phương tứ chính của Mệnh, chủ cả đời quý nhân không dứt, nhân duyên rất tốt. Hợp nhất với vị trí lãnh đạo và công việc làm việc nhóm. Nghê sư nói "Phụ Bật giáp Mệnh, bình sinh quý nhân đa" (cả đời nhiều quý nhân) – bạn không phải mệnh đơn thương độc mã, hãy khéo dùng mạng lưới quan hệ.',
  // 魁钺同会
  '天魁天钺同会命宫三方四正，主"天乙贵人"加持，关键时刻总有贵人提携。倪师说「魁钺夹命，必为贵人」——遇到困难时身边会出现得力相助者，宜主动维护人脉。':
    'Thiên Khôi Thiên Việt cùng hội tam phương tứ chính của Mệnh, chủ được "Thiên Ất quý nhân" phù trợ, lúc then chốt luôn có quý nhân nâng đỡ. Nghê sư nói "Khôi Việt giáp Mệnh, tất vi quý nhân" – khi gặp khó khăn bên cạnh sẽ xuất hiện người giúp đỡ đắc lực, nên chủ động vun đắp các mối quan hệ.',
  // 科权双会
  '化科 + 化权 同会三方四正，主名权双美——既有学识/名声（科），又有掌控力（权），宜走"专业权威"路线（如医生、律师、教授、技术骨干），名利双收且根基扎实。':
    'Hóa Khoa và Hóa Quyền cùng hội tam phương tứ chính, chủ danh và quyền đều đẹp – vừa có học thức/danh tiếng (Khoa), vừa có năng lực nắm quyền (Quyền); hợp con đường "chuyên gia có uy tín" (như bác sĩ, luật sư, giáo sư, kỹ thuật viên nòng cốt), danh lợi song toàn mà nền tảng vững chắc.',
};

const HUA_LU_EXTRA: Record<string, string> = {
  '武曲化禄属正财，宜实业、金融。': ' Vũ Khúc Hóa Lộc thuộc chính tài, hợp sản xuất kinh doanh thực, tài chính.',
  '太阴化禄属阴财、不动产。': ' Thái Âm Hóa Lộc thuộc âm tài, bất động sản.',
  '贪狼化禄属人脉财、桃花财。': ' Tham Lang Hóa Lộc thuộc tiền từ quan hệ, tiền nhờ duyên đào hoa.',
  '': '',
};

const DESC_TEMPLATES: Array<[RegExp, (m: RegExpMatchArray) => string | undefined]> = [
  // 火贪 / 铃贪
  [/^贪狼遇(火星|铃星)(同宫|三方会照)，主突发横财、突如其来的机遇。古书云“贪狼遇火铃，必发横财”，但来得快去得也快，宜见好就收。(本盘破格条件已触发，发力打折。)?$/,
    m => `Tham Lang gặp ${T(m[1])} ${m[2] === '同宫' ? 'đồng cung' : 'hội chiếu từ tam phương'}, chủ bất ngờ phát hoạnh tài, cơ hội ập đến bất chợt. Sách xưa nói "Tham Lang ngộ Hỏa Linh, tất phát hoạnh tài" (Tham Lang gặp Hỏa Linh ắt phát của bất ngờ), nhưng đến nhanh thì đi cũng nhanh, nên biết điểm dừng.${m[3] ? ' Lá số này đã chạm điều kiện phá cách, sức phát bị giảm.' : ''}`],
  // 日月同宫
  [/^太阳太阴于(.)宫同宫，阴阳平衡，文武兼备。主异性缘佳、事业顺遂、名声远播。(未宫日月双美尤佳。|丑宫日月同宫力量较平。)$/,
    m => `Thái Dương Thái Âm đồng cung tại ${T(m[1])}, âm dương cân bằng, văn võ kiêm toàn. Chủ có duyên với người khác giới, sự nghiệp thuận lợi, danh tiếng lan xa. ${m[2].startsWith('未') ? 'Nhật Nguyệt ở cung Mùi song mỹ, càng tốt.' : 'Nhật Nguyệt đồng cung ở Sửu thì lực bình thường hơn.'}`],
  // 巨日同宫
  [/^巨门太阳同(.)宫，太阳化解巨门暗曜，主以口才、传媒、外语、专业立业。寅宫为佳，申宫力减。怕巨门化忌则官非。$/,
    m => `Cự Môn Thái Dương đồng cung tại ${T(m[1])}, Thái Dương hóa giải tính ám của Cự Môn, chủ lập nghiệp bằng khẩu tài, truyền thông, ngoại ngữ, chuyên môn. Ở Dần là tốt, ở Thân lực giảm. Sợ Cự Môn Hóa Kỵ thì vướng kiện tụng quan sự.`],
  // X化禄入命
  [/^(.+?)化禄坐命，主生财顺利、人缘佳、机缘多。(.*)$/,
    m => m[2] in HUA_LU_EXTRA
      ? `${T(m[1])} Hóa Lộc tọa Mệnh, chủ sinh tài thuận lợi, nhân duyên tốt, nhiều cơ hội.${HUA_LU_EXTRA[m[2]]}`
      : undefined],
  // X化忌入命
  [/^(.+?)化忌坐命宫，需留意自身固执、心理障碍或健康隐患，凡事退一步思考。化忌不一定坏，代表此星能量需要特别关注。$/,
    m => `${T(m[1])} Hóa Kỵ tọa cung Mệnh, cần lưu ý tính cố chấp của bản thân, trở ngại tâm lý hoặc mầm bệnh tiềm ẩn, mọi việc nên lùi một bước mà suy xét. Hóa Kỵ không hẳn là xấu, nó cho thấy năng lượng của sao này cần được đặc biệt chú ý.`],
  // X化忌入迁
  [/^(.+?)化忌坐迁移宫，外出、远行、人际关系易有波折，宜守不宜动。$/,
    m => `${T(m[1])} Hóa Kỵ tọa cung Thiên Di, ra ngoài, đi xa, quan hệ giao tiếp dễ gặp trắc trở, nên giữ hơn là động.`],
  // 化禄入财
  [/^(.+?)化禄入财帛宫，主财源畅通、收入稳定。倪师讲化禄是「正财」象征——这个化禄星所代表的能力（(.+?)的核心特质）是你赚钱的主轴。配禄存或天马则财源更广。$/,
    m => `${T(m[1])} Hóa Lộc nhập cung Tài Bạch, chủ nguồn tài thông suốt, thu nhập ổn định. Nghê sư giảng Hóa Lộc là biểu tượng của "chính tài" – năng lực mà sao Hóa Lộc này đại diện (phẩm chất cốt lõi của ${T(m[2])}) chính là trục kiếm tiền của bạn. Phối Lộc Tồn hoặc Thiên Mã thì nguồn tài càng rộng.`],
  // 化权入官
  [/^(.+?)化权入官禄宫，主事业有掌控力、能担当独当一面的职位。化权代表权力与执行力——(.+?)化权说明你在事业上能成为决策者或核心执行者，宜走管理或技术权威路线。$/,
    m => `${T(m[1])} Hóa Quyền nhập cung Quan Lộc, chủ sự nghiệp có sức kiểm soát, có thể đảm nhận vị trí tự mình gánh vác một phương. Hóa Quyền đại diện cho quyền lực và năng lực thực thi – ${T(m[2])} Hóa Quyền cho thấy trong sự nghiệp bạn có thể trở thành người ra quyết định hoặc người thực thi nòng cốt, hợp đi theo hướng quản lý hoặc chuyên gia kỹ thuật có uy tín.`],
  // 化科入命/身
  [/^(.+?)化科入(命|身)宫，主名声、文书、学术运。倪师讲化科是「贵人星」——(.+?)化科带来的是被人看重的特质，宜从事文书、教育、研究、咨询、文创等“以名取利”的方向。$/,
    m => `${T(m[1])} Hóa Khoa nhập cung ${m[2] === '命' ? 'Mệnh' : 'Thân'}, chủ vận về danh tiếng, giấy tờ văn thư, học thuật. Nghê sư giảng Hóa Khoa là "sao quý nhân" – ${T(m[3])} Hóa Khoa mang lại phẩm chất được người khác coi trọng; hợp làm văn thư, giáo dục, nghiên cứu, tư vấn, sáng tạo văn hóa – những hướng "lấy danh cầu lợi".`],
  // 机月同梁三星会
  [/^机月同梁需天机、太阴、天同、天梁四星齐会三方四正方为完整真格；本盘只会齐其中 3 颗（(.+?)），缺(.+?)未会，并非完整真格，力量减一档。文质带谋，宜公职、教研、医疗、服务等靠积累与稳定的行业，关键看缺位星与四化的配合。$/,
    m => `Cơ Nguyệt Đồng Lương cần đủ bốn sao Thiên Cơ, Thái Âm, Thiên Đồng, Thiên Lương cùng hội tam phương tứ chính mới là chân cách trọn vẹn; lá số này chỉ hội được 3 sao (${list(m[1])}), thiếu ${list(m[2])}, không phải chân cách trọn vẹn, lực giảm một bậc. Nho nhã mà có mưu tính, hợp công chức, giảng dạy – nghiên cứu, y tế, dịch vụ – những ngành dựa vào tích lũy và ổn định; mấu chốt là xem sao còn thiếu và Tứ Hóa phối hợp ra sao.`],
];

// ────────────────── 条件（必须 / 加分 / 破格） ──────────────────
const COND_VI: Record<string, string> = {
  // 君臣庆会
  '紫微入命': 'Tử Vi nhập Mệnh',
  '左辅右弼同会三方四正': 'Tả Phù Hữu Bật cùng hội tam phương tứ chính',
  '再会文昌或文曲': 'Hội thêm Văn Xương hoặc Văn Khúc',
  '魁钺贵人加照': 'Quý nhân Khôi Việt chiếu thêm',
  '紫微化权': 'Tử Vi Hóa Quyền',
  '地空地劫双夹会照（紫微忌空劫）': 'Địa Không Địa Kiếp cùng hội chiếu (Tử Vi kỵ Không Kiếp)',
  // 紫府同宫
  '紫微天府同入命宫': 'Tử Vi Thiên Phủ cùng nhập Mệnh',
  '紫微天府同宫（不在命宫，会照减力）': 'Tử Vi Thiên Phủ đồng cung (không ở Mệnh, hội chiếu nên giảm lực)',
  '左辅右弼同会': 'Tả Phù Hữu Bật cùng hội',
  '再会昌曲': 'Hội thêm Xương Khúc',
  '紫府宫坐空劫（破紫府之贵气）': 'Cung Tử Phủ có Không Kiếp tọa thủ (phá quý khí của Tử Phủ)',
  '紫府宫见双煞同坐': 'Cung Tử Phủ có hai sát tinh đồng tọa',
  // 府相朝垣
  '天府坐命三方': 'Thiên Phủ tọa tam phương của Mệnh',
  '天相坐命三方': 'Thiên Tướng tọa tam phương của Mệnh',
  '两星不同宫': 'Hai sao không đồng cung',
  '命宫见禄': 'Cung Mệnh gặp Lộc',
  '再会左辅': 'Hội thêm Tả Phù',
  '命宫坐煞星': 'Cung Mệnh có sát tinh tọa thủ',
  '三方四正煞星过多': 'Tam phương tứ chính quá nhiều sát tinh',
  // 阳梁昌禄
  '太阳会命宫三方': 'Thái Dương hội tam phương của Mệnh',
  '天梁会命宫三方': 'Thiên Lương hội tam phương của Mệnh',
  '文昌会命宫三方': 'Văn Xương hội tam phương của Mệnh',
  '禄存会命宫三方': 'Lộc Tồn hội tam phương của Mệnh',
  '太阳庙旺': 'Thái Dương miếu vượng',
  '天梁庙旺': 'Thiên Lương miếu vượng',
  '再会化科': 'Hội thêm Hóa Khoa',
  '太阳落陷（阳梁失辉）': 'Thái Dương hãm địa (Dương Lương mất ánh sáng)',
  '三方煞重': 'Tam phương sát tinh nặng',
  // 火贪 / 铃贪
  '贪狼会照命宫三方': 'Tham Lang hội chiếu tam phương của Mệnh',
  '贪狼庙旺': 'Tham Lang miếu vượng',
  '贪狼化禄/化权': 'Tham Lang Hóa Lộc / Hóa Quyền',
  '贪狼宫又见羊陀（破横发之力）': 'Cung Tham Lang lại gặp Kình Đà (phá sức hoạnh phát)',
  '贪狼遇空劫（财来财去）': 'Tham Lang gặp Không Kiếp (tiền đến rồi đi)',
  // 武贪
  '武曲贪狼同宫（丑/未）': 'Vũ Khúc Tham Lang đồng cung (Sửu/Mùi)',
  '武曲贪狼对宫拱照': 'Vũ Khúc Tham Lang ở đối cung củng chiếu',
  '会照命宫三方': 'Hội chiếu tam phương của Mệnh',
  '再遇火星/铃星（火贪/铃贪叠加）': 'Gặp thêm Hỏa Tinh / Linh Tinh (chồng thêm Hỏa Tham / Linh Tham)',
  '武曲化禄': 'Vũ Khúc Hóa Lộc',
  '武贪宫见羊陀': 'Cung Vũ Tham gặp Kình Đà',
  '武贪宫遇空劫': 'Cung Vũ Tham gặp Không Kiếp',
  // 杀破狼
  '七杀、破军、贪狼三星齐入命宫三方四正': 'Thất Sát, Phá Quân, Tham Lang cùng nhập tam phương tứ chính của Mệnh',
  '三方有化禄或化权（动得有力）': 'Tam phương có Hóa Lộc hoặc Hóa Quyền (động mà có lực)',
  '辅弼同会（变动中得贵人）': 'Tả Hữu cùng hội (trong biến động được quý nhân)',
  '煞星过重（动而无成）': 'Sát tinh quá nặng (động mà không thành)',
  '命坐空劫（动得辛苦）': 'Mệnh có Không Kiếp tọa thủ (động mà vất vả)',
  // 机月同梁
  '天机、太阴、天同、天梁四星齐入命宫三方四正': 'Thiên Cơ, Thái Âm, Thiên Đồng, Thiên Lương cùng nhập tam phương tứ chính của Mệnh',
  '煞星过多（机月同梁忌煞）': 'Quá nhiều sát tinh (Cơ Nguyệt Đồng Lương kỵ sát)',
  '命宫坐煞': 'Cung Mệnh có sát tinh tọa thủ',
  // 廉贞天相
  '廉贞天相同宫': 'Liêm Trinh Thiên Tướng đồng cung',
  '见禄存或廉贞化禄': 'Gặp Lộc Tồn hoặc Liêm Trinh Hóa Lộc',
  '左辅会照': 'Tả Phù hội chiếu',
  '廉相宫坐擎羊（廉杀羊倾向）': 'Cung Liêm Tướng có Kình Dương tọa thủ (có xu hướng Liêm Sát Dương)',
  '廉贞化忌': 'Liêm Trinh Hóa Kỵ',
  // 武曲七杀
  '武曲七杀同宫': 'Vũ Khúc Thất Sát đồng cung',
  '武曲化权': 'Vũ Khúc Hóa Quyền',
  '武曲化忌（武曲化忌为财劫之兆）': 'Vũ Khúc Hóa Kỵ (điềm bị cướp, hao tài)',
  '武杀宫煞星过多': 'Cung Vũ Sát quá nhiều sát tinh',
  // 天同天梁
  '天同天梁同宫': 'Thiên Đồng Thiên Lương đồng cung',
  '文昌会照': 'Văn Xương hội chiếu',
  '天同化禄': 'Thiên Đồng Hóa Lộc',
  '煞星同坐': 'Sát tinh đồng tọa',
  // 日月同宫
  '未宫日月同辉（古书云未宫日月双美）': 'Nhật Nguyệt đồng huy ở cung Mùi (sách xưa nói Nhật Nguyệt ở Mùi song mỹ)',
  '昌曲会照': 'Xương Khúc hội chiếu',
  '日月宫煞星同坐': 'Cung Nhật Nguyệt có sát tinh đồng tọa',
  // 日月夹命
  '太阳太阴分居命宫前后两宫': 'Thái Dương Thái Âm nằm ở hai cung trước sau cung Mệnh',
  '太阴庙旺': 'Thái Âm miếu vượng',
  '日月落陷（夹命无光）': 'Nhật Nguyệt hãm địa (giáp Mệnh mà không có ánh sáng)',
  // 巨日同宫
  '寅宫太阳庙旺，巨门得日光化解是非': 'Thái Dương ở Dần miếu vượng, Cự Môn được ánh dương hóa giải thị phi',
  '巨门化禄/化权（口才生财）': 'Cự Môn Hóa Lộc / Hóa Quyền (nhờ khẩu tài sinh tài)',
  '巨门化忌（口舌官非）': 'Cự Môn Hóa Kỵ (khẩu thiệt, kiện tụng)',
  '申宫太阳偏西，巨门暗曜更显': 'Ở Thân Thái Dương đã ngả về tây, tính ám của Cự Môn càng lộ',
  // 石中隐玉
  '巨门化禄/化权': 'Cự Môn Hóa Lộc / Hóa Quyền',
  '文昌会照（石中隐玉得明）': 'Văn Xương hội chiếu (ngọc trong đá được soi sáng)',
  '巨门化忌（玉藏深泥）': 'Cự Môn Hóa Kỵ (ngọc vùi sâu trong bùn)',
  '命坐煞星': 'Mệnh có sát tinh tọa thủ',
  // 明珠出海
  '命宫在未为空宫': 'Cung Mệnh tại Mùi, vô chính diệu',
  '对宫丑宫为太阳太阴同度': 'Đối cung Sửu có Thái Dương Thái Âm đồng độ',
  '辅弼相助': 'Tả Hữu tương trợ',
  '煞星会照（珠光黯淡）': 'Sát tinh hội chiếu (ánh ngọc mờ nhạt)',
  // 紫微入命
  '紫微独坐命宫（无天府同坐）': 'Tử Vi độc tọa cung Mệnh (không có Thiên Phủ đồng tọa)',
  '文昌文曲同会': 'Văn Xương Văn Khúc cùng hội',
  '无辅弼（孤君无臣）': 'Không có Tả Hữu (vua lẻ loi không bề tôi)',
  '紫微遇空劫（古书最忌）': 'Tử Vi gặp Không Kiếp (sách xưa kỵ nhất)',
  // 夹命类
  '左辅右弼分居命宫前后两宫': 'Tả Phù Hữu Bật nằm ở hai cung trước sau cung Mệnh',
  '再会魁钺': 'Hội thêm Khôi Việt',
  '文昌文曲分居命宫前后两宫': 'Văn Xương Văn Khúc nằm ở hai cung trước sau cung Mệnh',
  '天魁天钺分居命宫前后两宫': 'Thiên Khôi Thiên Việt nằm ở hai cung trước sau cung Mệnh',
  // 双禄 / 三奇
  '化禄会照三方四正': 'Hóa Lộc hội chiếu tam phương tứ chính',
  '禄存会照三方四正': 'Lộc Tồn hội chiếu tam phương tứ chính',
  '命坐空劫（双禄遇空，财来财去）': 'Mệnh có Không Kiếp tọa thủ (song Lộc gặp Không, tiền đến rồi đi)',
  '化禄、化权、化科三吉化齐会命宫三方四正': 'Hóa Lộc, Hóa Quyền, Hóa Khoa – ba cát hóa cùng hội tam phương tứ chính của Mệnh',
  // 恶格
  '化忌坐命': 'Hóa Kỵ tọa Mệnh',
  '擎羊陀罗分居命宫前后两宫': 'Kình Dương Đà La nằm ở hai cung trước sau cung Mệnh',
  '火星铃星分居命宫前后两宫': 'Hỏa Tinh Linh Tinh nằm ở hai cung trước sau cung Mệnh',
  '地空地劫分居命宫前后两宫': 'Địa Không Địa Kiếp nằm ở hai cung trước sau cung Mệnh',
  '廉贞、七杀、擎羊三星会照三方四正': 'Liêm Trinh, Thất Sát, Kình Dương cùng hội chiếu tam phương tứ chính',
  '巨门、火星、擎羊三星会照三方四正': 'Cự Môn, Hỏa Tinh, Kình Dương cùng hội chiếu tam phương tứ chính',
  '铃星、文昌、陀罗、武曲四星会照三方四正': 'Linh Tinh, Văn Xương, Đà La, Vũ Khúc cùng hội chiếu tam phương tứ chính',
  // 马头带箭
  '擎羊于午宫坐命': 'Kình Dương tọa Mệnh tại cung Ngọ',
  '再会七杀或破军（武职大贵）': 'Hội thêm Thất Sát hoặc Phá Quân (đại quý về võ nghiệp)',
  '魁钺加照': 'Khôi Việt chiếu thêm',
  // 基础格局
  '禄存入命宫': 'Lộc Tồn nhập cung Mệnh',
  '禄存入身宫': 'Lộc Tồn nhập cung Thân',
  '天马入命宫': 'Thiên Mã nhập cung Mệnh',
  '天马入迁移宫': 'Thiên Mã nhập cung Thiên Di',
  '文昌、文曲同会命宫三方四正': 'Văn Xương, Văn Khúc cùng hội tam phương tứ chính của Mệnh',
  '左辅、右弼同会命宫三方四正': 'Tả Phù, Hữu Bật cùng hội tam phương tứ chính của Mệnh',
  '天魁、天钺同会命宫三方四正': 'Thiên Khôi, Thiên Việt cùng hội tam phương tứ chính của Mệnh',
  '化科、化权同会命宫三方四正': 'Hóa Khoa, Hóa Quyền cùng hội tam phương tứ chính của Mệnh',
};

const PALACE_SHORT: Record<string, string> = { '命': 'Mệnh', '迁': 'Thiên Di', '身': 'Thân' };

const COND_TEMPLATES: Array<[RegExp, (m: RegExpMatchArray) => string]> = [
  [/^贪狼(同宫|会照)(火星|铃星)$/, m => `Tham Lang ${m[1] === '同宫' ? 'đồng cung với' : 'hội chiếu'} ${T(m[2])}`],
  [/^太阳太阴同入(.)宫$/, m => `Thái Dương Thái Âm cùng nhập cung ${T(m[1])}`],
  [/^巨门太阳同入(.)宫$/, m => `Cự Môn Thái Dương cùng nhập cung ${T(m[1])}`],
  [/^巨门入命于(.)宫$/, m => `Cự Môn nhập Mệnh tại cung ${T(m[1])}`],
  [/^(.+?)化禄坐命宫$/, m => `${T(m[1])} Hóa Lộc tọa cung Mệnh`],
  [/^(.+?)化忌坐(命|迁)宫$/, m => `${T(m[1])} Hóa Kỵ tọa cung ${PALACE_SHORT[m[2]]}`],
  [/^(.+?)化禄入财帛宫$/, m => `${T(m[1])} Hóa Lộc nhập cung Tài Bạch`],
  [/^(.+?)化权入官禄宫$/, m => `${T(m[1])} Hóa Quyền nhập cung Quan Lộc`],
  [/^(.+?)化科入(命|身)宫$/, m => `${T(m[1])} Hóa Khoa nhập cung ${PALACE_SHORT[m[2]]}`],
  [/^三方四正会(.+?)（机月同梁缺(.+?)）$/, m => `Tam phương tứ chính hội ${list(m[1])} (Cơ Nguyệt Đồng Lương thiếu ${list(m[2])})`],
];

// ────────────────── 出处 ──────────────────
const BOOK_VI: Record<string, string> = {
  '紫微斗数全书': 'Tử Vi Đẩu Số Toàn Thư',
  '紫微斗数全集': 'Tử Vi Đẩu Số Toàn Tập',
  '紫微斗数骨髓赋': 'Tử Vi Đẩu Số Cốt Tủy Phú',
  '骨髓赋': 'Cốt Tủy Phú',
};

const SECTION_VI: Record<string, string> = {
  '禄存星': 'Sao Lộc Tồn',
  '天马星': 'Sao Thiên Mã',
  '四化论': 'Luận Tứ Hóa',
  '文星论': 'Luận Văn tinh',
  '辅弼论': 'Luận Tả Hữu',
  '魁钺论': 'Luận Khôi Việt',
  '四化会照': 'Tứ Hóa hội chiếu',
};

function translateSection(zh: string): string | undefined {
  if (SECTION_VI[zh]) return SECTION_VI[zh];
  if (NAME_VI[zh]) return NAME_VI[zh];
  // 「君臣庆会格」→ 「Quân Thần Khánh Hội cách」
  if (zh.endsWith('格') && NAME_VI[zh.slice(0, -1)]) return `${NAME_VI[zh.slice(0, -1)]} cách`;
  return undefined;
}

function translateSource(zh: string): string {
  const m = zh.match(/^《([^·》]+)(?:·([^》]+))?》$/);
  if (!m) return zh;
  const book = BOOK_VI[m[1]];
  if (!book) return zh;
  if (!m[2]) return `«${book}»`;
  const sec = translateSection(m[2]);
  return sec ? `«${book}» – ${sec}` : zh;
}

// ────────────────── 通用匹配 ──────────────────
function translateWith(
  zh: string,
  table: Record<string, string>,
  templates: Array<[RegExp, (m: RegExpMatchArray) => string | undefined]>,
): string {
  if (Object.prototype.hasOwnProperty.call(table, zh)) return table[zh];
  for (const [re, fn] of templates) {
    const m = zh.match(re);
    if (m) {
      const out = fn(m);
      if (out !== undefined) return out;
    }
  }
  return zh;
}

const trName = (zh: string) => translateWith(zh, NAME_VI, NAME_TEMPLATES);
const trDesc = (zh: string) => translateWith(zh, DESC_VI, DESC_TEMPLATES);
const trCond = (zh: string) => translateWith(zh, COND_VI, COND_TEMPLATES);

/** 格局本地化：中文环境原样返回，越南语环境翻译所有可见字段 */
export function localizePattern(p: Pattern, locale: Locale): Pattern {
  if (locale === 'zh') return p;
  return {
    ...p,
    name: trName(p.name),
    description: trDesc(p.description),
    palaces: p.palaces.map(x => localizeTerm(x, locale)),
    conditions: p.conditions && {
      required: p.conditions.required.map(trCond),
      bonus: p.conditions.bonus?.map(trCond),
      breaking: p.conditions.breaking?.map(trCond),
    },
    source: p.source && translateSource(p.source),
  };
}

// ────────────────── 命宫摘要 ──────────────────
const KEYWORD_VI: Record<string, string> = {
  '尊贵': 'Tôn quý', '独立': 'Độc lập', '领导': 'Lãnh đạo',
  '智慧': 'Trí tuệ', '机变': 'Linh hoạt ứng biến', '善谋': 'Giỏi mưu tính',
  '阳刚': 'Dương cương', '官贵': 'Quan quý', '慷慨': 'Hào phóng',
  '财富': 'Tài phú', '刚毅': 'Cương nghị', '果断': 'Quả quyết',
  '温和': 'Ôn hòa', '享福': 'Hưởng phúc', '随缘': 'Tùy duyên',
  '才艺': 'Tài nghệ', '桃花': 'Đào hoa', '多变': 'Đa biến',
  '财库': 'Kho tài', '稳重': 'Chín chắn', '保守': 'Bảo thủ',
  '柔美': 'Nhu mỹ', '细腻': 'Tinh tế',
  '欲望': 'Dục vọng', '多才': 'Đa tài',
  '善辩': 'Giỏi biện luận', '多思': 'Suy tư nhiều', '口才': 'Khẩu tài',
  '辅佐': 'Phò tá', '行政': 'Hành chính', '稳健': 'Vững vàng',
  '荫护': 'Che chở', '医药': 'Y dược', '长辈': 'Bề trên',
  '将星': 'Tướng tinh', '果决': 'Quyết đoán', '孤克': 'Cô khắc',
  '开创': 'Khai sáng', '变动': 'Biến động', '破旧': 'Phá cũ',
};

const NATURE_VI: Record<string, string> = {
  '帝王星': 'Sao đế vương', '智慧星': 'Sao trí tuệ', '贵人星': 'Sao quý nhân',
  '财帛星': 'Sao tài bạch', '福德星': 'Sao phúc đức', '桃花星': 'Sao đào hoa',
  '财库星': 'Sao kho tài', '财富星': 'Sao tài phú', '是非星': 'Sao thị phi',
  '印绶星': 'Sao ấn thụ', '荫庇星': 'Sao che chở (ấm tinh)', '将帅星': 'Sao tướng soái',
  '变动星': 'Sao biến động', '空宫': 'Cung vô chính diệu',
};

export function localizeMingGongSummary(s: MingGongSummary, locale: Locale): MingGongSummary {
  if (locale === 'zh') return s;
  return {
    stars: s.stars.map(x => localizeTerm(x, locale)),
    keywords: s.keywords.map(k => KEYWORD_VI[k] ?? k),
    nature: s.nature ? (NATURE_VI[s.nature] ?? s.nature) : s.nature,
  };
}
