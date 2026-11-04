/**
 * 星曜描述的越南语版本（显示层专用）
 *
 * - STAR_DESCRIPTIONS_VI：对应 lib/ziwei/constants.ts 的 STAR_DESCRIPTIONS（keywords / nature）
 * - STAR_DETAIL_VI：对应 components/StarDetailPanel.tsx 内的 STAR_DETAIL（十四主星详解）
 * - MINOR_STAR_NOTES_VI：对应 StarDetailPanel 内辅星 / 煞星的简短说明
 *
 * key 一律为中文星名（引擎标识），中文原文保留在原处不删。
 */
import type { Locale } from '../config';

export interface StarDescriptionText {
  keywords: string; // 以「·」分隔，与中文版一致
  nature: string;
}

export interface StarDetailText {
  niHaixia: string;
  classical: string;
  bestPalace: string;
  worstPalace: string;
  career: string;
  relationship: string;
  wealth: string;
  health: string;
}

export const STAR_DESCRIPTIONS_VI: Record<string, StarDescriptionText> = {
  '紫微': { keywords: 'Đế vương·Tôn quý·Độc lập', nature: 'Trung tính thiên cát' },
  '天机': { keywords: 'Trí tuệ·Cơ biến·Mưu lược', nature: 'Cát tinh' },
  '太阳': { keywords: 'Dương cương·Quan quý·Khảng khái', nature: 'Cát tinh' },
  '武曲': { keywords: 'Tài phú·Cương nghị·Quả đoán', nature: 'Trung tính' },
  '天同': { keywords: 'Ôn hòa·Hưởng phúc·Tùy duyên', nature: 'Cát tinh' },
  '廉贞': { keywords: 'Tài nghệ·Hình tù·Đào hoa', nature: 'Trong hung có cát' },
  '天府': { keywords: 'Kho tài·Ổn trọng·Bảo thủ', nature: 'Cát tinh' },
  '太阴': { keywords: 'Nhu mỹ·Tài phú·Âm nhu', nature: 'Cát tinh' },
  '贪狼': { keywords: 'Dục vọng·Đào hoa·Đa tài', nature: 'Trung tính' },
  '巨门': { keywords: 'Khẩu thiệt·Thị phi·Hùng biện', nature: 'Trong hung có cát' },
  '天相': { keywords: 'Phò tá·Hành chính·Ấn thụ', nature: 'Cát tinh' },
  '天梁': { keywords: 'Che chở·Y dược·Bề trên', nature: 'Cát tinh' },
  '七杀': { keywords: 'Tướng tinh·Quả quyết·Cô khắc', nature: 'Hung tinh' },
  '破军': { keywords: 'Khai sáng·Biến động·Phá hoại', nature: 'Hung tinh' },
};

export const STAR_DETAIL_VI: Record<string, StarDetailText> = {
  '紫微': {
    niHaixia: 'Nghê sư cho rằng Tử Vi là sao hoàng đế; người có Tử Vi tọa Mệnh mang khí chất cô cao, thích ở một mình, không ưa bị người khác quản thúc. Tử Vi cần Tả Phù, Hữu Bật giáp mới phát huy được khí chất đế vương, nếu không chỉ là "cô quân", giàu mà không sang. Tử Vi ở cung Thìn, Tuất là tốt nhất, cùng Thiên Phủ tạo thành cách song tinh, tài quan song mỹ, "xuất tướng nhập tướng". Tử Vi sợ nhất Hỏa Tinh, Linh Tinh, Kình Dương, Đà La đồng cung; gặp sát thì cô quý, có quyền mà không có tiền.',
    classical: 'Cổ quyết: "Tử Vi là ngôi đế tọa, lâm Mệnh chủ tôn quý, thống lĩnh chúng tinh; người tọa Mệnh chủ quyền uy hiển đạt." Nam Bắc Sơn Nhân chú: "Tử Vi thủ Mệnh tại Thìn, tài quan song mỹ, xuất tướng nhập tướng, vị đến Tam công; an Mệnh tại Tý thì phú quý không bền, về sau chẳng đẹp."',
    bestPalace: 'Cung Mệnh (Thìn, Tuất), cung Quan Lộc',
    worstPalace: 'Cung Tật Ách, cung Phu Thê',
    career: 'Chính trường, quản lý, tự khởi nghiệp; bẩm sinh có khí chất đế vương, hợp với vị trí lãnh đạo tự mình gánh vác một phương',
    relationship: 'Tình cảm bị động, lòng tự trọng cao, cần đối phương chủ động; có xu hướng cô độc, kết hôn muộn thì tốt',
    wealth: 'Tài vận ổn định, giữ của giỏi hơn tiến thủ; ở Thìn, Tuất tài quan song mỹ, hợp nhất với đầu tư tích lũy',
    health: 'Thuộc Thổ, chú ý tỳ vị, hệ tiêu hóa. Kỵ làm việc quá sức, nên giữ nếp sinh hoạt điều độ',
  },
  '天机': {
    niHaixia: 'Nghê sư nói Thiên Cơ là sao tham mưu, thông minh nhất trong các sao, nhưng thông minh lộ ra ngoài thì hại thân. Thiên Cơ Hóa Kỵ phiền toái nhất, chủ "thông minh lại bị thông minh hại". Thiên Cơ thuộc Mộc, linh động hay biến; ở Mệnh thì suy nghĩ nhanh nhạy nhưng thường nhiều mưu ít quyết, cần rời quê đi xa mới phát triển. Ứng biến linh hoạt, tùy cơ mà động là đặc điểm lớn nhất.',
    classical: 'Cổ quyết: "Người sinh ra tinh tế khéo léo, tự thích làm kinh doanh; Thiên Cơ thuộc Mộc, buôn bán đều nhiều cơ trí, rời tông ắt xa họ hàng." Nam Bắc Sơn Nhân chú: "Thiên Cơ ở đất Miếu, Vượng, chủ người tinh minh, giỏi hoạch định; ở đất Hãm thì u tối, phần nhiều làm nghề buôn bán."',
    bestPalace: 'Cung Mệnh (tại Mão), cung Quan Lộc',
    worstPalace: 'Cung Phu Thê',
    career: 'Chuyên gia kỹ thuật, mưu sĩ, nhà nghiên cứu, CNTT, hoạch định; dùng đầu óc hơn dùng tay chân, hợp phát triển xa quê',
    relationship: 'Tình cảm hay thay đổi, suy nghĩ quá nhiều, khó chuyên nhất; nên kết hôn muộn, sau khi cưới cần học cách buông bớt lo nghĩ',
    wealth: 'Kiếm tiền nhờ trí tuệ và kỹ năng, không giỏi giữ của; theo nghề chuyên môn kỹ thuật thì tài vận ổn định',
    health: 'Thuộc Mộc, chú ý gan mật, hệ thần kinh. Suy nghĩ nhiều dễ mất ngủ, nên tập tĩnh tâm, thiền định',
  },
  '太阳': {
    niHaixia: 'Nghê sư cho rằng Thái Dương là sao của "đại nam nhân", từ Mão đến Ngọ là nhập Miếu, quang minh chính đại; sau Ngọ dần lạc Hãm. Người Thái Dương tọa Mệnh khảng khái, trọng thể diện; mệnh nam thì hợp, mệnh nữ thì quá mạnh mẽ. Thái Dương đại diện cho cha và bề trên; ở Mệnh chủ tính cách hướng ngoại, cởi mở, thích được mọi người nhìn thấy, hợp nhất với công chức hoặc sự nghiệp công chúng. Lạc Hãm thì trước siêng sau lười, cô quả lao lực.',
    classical: 'Cổ quyết: "Thái Dương cư Ngọ là nhập Miếu, ánh sáng rực rỡ, chủ quý hiển, mệnh nam tốt nhất; lạc Hãm thì cô quả lao lực, trước siêng sau lười." Nam Bắc Sơn Nhân chú: "Thái Dương thủ Mệnh tại Ngọ, tài quan song mỹ, xuất tướng nhập tướng; an Mệnh tại Thìn, trung niên tài quan chuyển tốt, người sinh năm Ất gặp hung cũng đại lợi."',
    bestPalace: 'Cung Mệnh (Mão đến Ngọ), cung Quan Lộc',
    worstPalace: 'Cung Phu Thê (mệnh nữ), cung Tật Ách',
    career: 'Công chức, chính trường, quản lý, quan hệ công chúng, giáo dục, truyền thông; thích đứng trước đám đông, hợp với sự nghiệp công chúng',
    relationship: 'Mệnh nam có duyên nhưng đa tình; mệnh nữ độc lập, mạnh mẽ, hôn nhân cần mài giũa, nên tìm người dịu dàng chu đáo',
    wealth: 'Tài vận nhờ nỗ lực, rộng rãi hay giúp người, không giỏi tích lũy; nhập Miếu thì tài vượng, lạc Hãm thì thăng trầm',
    health: 'Thuộc Hỏa, chú ý tim, mắt. Ở vị trí lạc Hãm dễ quá sức, cần nghỉ ngơi đầy đủ',
  },
  '武曲': {
    niHaixia: 'Nghê sư xem Vũ Khúc là chủ tinh của Tài Bạch, cứng rắn bất khuất, sợ nhất cô khắc. Người Vũ Khúc tọa Mệnh ý chí kiên định, hợp tài chính, quản lý tiền bạc, nhưng tình cảm quá thẳng, dễ làm tổn thương người khác. Vũ Khúc Hóa Kỵ phải cẩn thận tai nạn huyết quang. Vũ Khúc ở Thìn, Tuất, Sửu, Mùi đắc Vượng địa, đồng cung với Thất Sát thành cách "Tướng tài", là cách cục tài phú rất tốt.',
    classical: 'Cổ quyết: "Vũ Khúc thuộc Kim, tính cương cường, một đời nhiều hình khắc; thủ Mệnh ở Vượng địa thì xuất tướng nhập tướng." Nam Bắc Sơn Nhân chú: "Vũ Khúc thủ Mệnh, tam phương tứ chính đều cát, tài quan song mỹ; võ chức thêm Phụ, Bật, Xương, Khúc cũng chủ đại quý; đồng cung với Thất Sát là cách Tướng tài, chủ đại phú."',
    bestPalace: 'Cung Mệnh (Thìn, Tuất, Sửu, Mùi), cung Tài Bạch, cung Quan Lộc',
    worstPalace: 'Cung Phu Thê',
    career: 'Tài chính, quân đội, công an, kế toán, kỹ thuật công trình; năng lực thực thi rất mạnh, hợp lĩnh vực cần bản lĩnh và quyết đoán',
    relationship: 'Tình cảm thẳng thắn, thiếu lãng mạn, cần người dịu dàng bổ trợ, kỵ tình cảm cô khắc',
    wealth: 'Bản mệnh là tài tinh, tài vận rất mạnh, năng lực quản lý tiền vượt trội; ở Thìn, Tuất tài quan song mỹ',
    health: 'Thuộc Kim, chú ý phổi, hệ hô hấp, răng. Khi Hóa Kỵ cần đề phòng tai nạn huyết quang',
  },
  '天同': {
    niHaixia: 'Nghê sư nói Thiên Đồng là phúc tinh, cũng là sao lười nhất. Người Thiên Đồng tọa Mệnh thích hưởng phúc, không ưa cạnh tranh, hợp công việc ổn định. Thiên Đồng đồng cung Thiên Lương là tốt nhất, vừa hưởng phúc vừa có bảo đảm. Thiên Đồng Hóa Lộc là Hóa Lộc đẹp nhất, chủ một đời cơm áo không lo, vui vẻ thong dong. Thiên Đồng kỵ lạc Hãm, lạc Hãm thì phúc giảm, cần hóa giải với hung tinh.',
    classical: 'Cổ quyết: "Thiên Đồng là sao phúc đức, người tọa Mệnh hưởng phúc có thừa, chủ một đời tiêu dao tự tại, không phải lao khổ." Nam Bắc Sơn Nhân chú: "Thiên Đồng thủ Mệnh, tam phương không sát, một đời vui vẻ, cơm áo đầy đủ; thêm cát tinh thì phú quý song toàn, tính tình ôn hòa, được lòng người."',
    bestPalace: 'Cung Mệnh, cung Phúc Đức',
    worstPalace: 'Cung Quan Lộc',
    career: 'Dịch vụ, giải trí, ẩm thực, văn nghệ; môi trường thoải mái vui vẻ là hợp nhất, kỵ áp lực cạnh tranh cao',
    relationship: 'Tình cảm ôn hòa, không chủ động, dễ chấp nhận một cách bị động; hôn nhân khá ổn định, tính tình dễ gần',
    wealth: 'Tài vận không nổi bật, dựa vào lương ổn định, không giỏi đầu cơ; cơm áo không lo nhưng khó đại phú',
    health: 'Thuộc Thủy, chú ý thận, bàng quang. Thể chất khá yếu, nên vận động vừa phải, giữ tâm thái thư thái',
  },
  '廉贞': {
    niHaixia: 'Nghê sư cho rằng Liêm Trinh là "thứ đào hoa", tài hoa xuất chúng nhưng tình cảm phức tạp. Liêm Trinh Hóa Kỵ rất hung, chủ kiện tụng, tù ngục, tai nạn. Liêm Trinh đồng cung Thiên Tướng thì hóa hung thành cát, thành cách "hành chính ấn thụ". Liêm Trinh ngũ hành thuộc Hỏa, tính cương liệt, một đời nhiều thăng trầm, tài nghệ hơn người; nếu giữ được chính đạo, không sa tà thì có thể thành đại khí.',
    classical: 'Cổ quyết: "Liêm Trinh là thứ đào hoa, tài hoa xuất chúng, tình cảm nhiều sóng gió; Liêm Tướng đồng cung, hóa hung thành cát, thành cách hành chính ấn thụ, có thể nắm quyền bính." Nam Bắc Sơn Nhân chú: "Liêm Trinh thủ Mệnh, gặp cát tinh thì tài hoa xuất chúng; Hóa Kỵ thì kiện tụng quấn thân, chủ tai họa huyết quang, phải đề phòng."',
    bestPalace: 'Cung Quan Lộc (phối Thiên Tướng), cung Mệnh (khi Hóa Lộc)',
    worstPalace: 'Cung Mệnh (khi Hóa Kỵ), cung Phu Thê',
    career: 'Nghệ thuật, giải trí, pháp luật, công chức (phối Thiên Tướng); tài nghệ xuất chúng, giữ nghề chính đáng mới lâu bền',
    relationship: 'Nhiều đào hoa, tình cảm phức tạp, dễ vướng tranh chấp tình cảm; nên kết hôn muộn, chọn người chín chắn',
    wealth: 'Tài vận thăng trầm, kiếm tiền nhờ tài nghệ; khi Hóa Kỵ đề phòng tranh chấp tài chính và rủi ro pháp lý',
    health: 'Thuộc Hỏa, chú ý tim, máu, gan. Khi Hóa Kỵ đề phòng tai nạn và phẫu thuật, lưu ý huyết quang',
  },
  '天府': {
    niHaixia: 'Nghê sư nói Thiên Phủ là sao kho tài, sao thủ thành, không chủ động phát tài nhưng giữ được của. Người Thiên Phủ tọa Mệnh ổn trọng, bảo thủ; mệnh nữ tốt nhất, vượng phu hưng gia. Thiên Phủ thích nhất Tử Vi đồng cung hoặc xung chiếu, thành cách song tinh, tài quan song mỹ. Thiên Phủ sợ Không Kiếp giáp, gặp Không Kiếp thì kho tài cạn đáy, không giữ được của.',
    classical: 'Cổ quyết: "Thiên Phủ là sao kho tài, người thủ Mệnh ổn trọng bảo thủ, chủ tích của vượng nhà; mệnh nữ gặp thì vượng phu ích tử, gia đạo hưng long." Nam Bắc Sơn Nhân chú: "Thiên Phủ thủ Mệnh, tam phương cát tụ, tài quan song mỹ, phú quý an khang; gặp Không Kiếp thì kho tài thủng, khó tích của."',
    bestPalace: 'Cung Mệnh, cung Tài Bạch, cung Điền Trạch',
    worstPalace: 'Cung Thiên Di',
    career: 'Quản lý hành chính, tài chính, bảo hiểm, bất động sản; cầu ổn định, không mạo hiểm, hợp nghề nghiệp kiểu thủ thành',
    relationship: 'Tình cảm ổn định, chăm lo gia đình, là người bạn đời tốt, coi trọng cảm giác an toàn và bảo đảm kinh tế',
    wealth: 'Tài vận rất tốt, năng lực giữ của mạnh, hợp nhất với đầu tư tích lũy và mua sắm bất động sản',
    health: 'Thuộc Thổ, chú ý tỳ vị, tiêu hóa. Thể chất vững vàng, nên ăn uống và sinh hoạt điều độ',
  },
  '太阴': {
    niHaixia: 'Nghê sư cho rằng Thái Âm là tài tinh, lợi cho mệnh nữ, đồng thời đại diện cho mẹ và vợ trong mệnh nam. Thái Âm nhập Miếu thì tài vận rất tốt, ở đất Hãm thì tài vận bị trở ngại. Thái Âm Hóa Kỵ cần chú ý chuyện của người thân là nữ. Thái Âm ở Hợi, Tý nhập Miếu, ánh sáng chiếu trọn, chủ thanh nhã tinh tế, tình cảm phong phú, coi trọng thế giới nội tâm và đời sống tinh thần.',
    classical: 'Cổ quyết: "Thái Âm là tài tinh, lợi mệnh nữ; Hợi, Tý nhập Miếu, ánh sáng chiếu trọn, tài vận cực vượng; tại Ngọ lạc Hãm, u sầu đa tình, tài vận bình thường." Nam Bắc Sơn Nhân chú: "Thái Âm thủ Mệnh, nhập Miếu thì tài phú dồi dào, mệnh nữ càng tốt; lạc Hãm thì phải nỗ lực mới giàu, tình cảm tinh tế."',
    bestPalace: 'Cung Mệnh (Hợi, Tý), cung Tài Bạch',
    worstPalace: 'Cung Mệnh (tại Ngọ, đất Hãm)',
    career: 'Tài chính, ngân hàng, bất động sản, nghệ thuật, giáo dục; tỉ mỉ kiên nhẫn, hợp nghề cần thẩm mỹ và sự dịu dàng',
    relationship: 'Tình cảm dịu dàng tinh tế, coi trọng cảm nhận nội tâm, cần mối quan hệ ổn định có cảm giác an toàn',
    wealth: 'Nhập Miếu tài vận cực vượng, lạc Hãm thì cần nỗ lực; quản lý tiền cẩn thận, giỏi tích lũy, không giỏi mạo hiểm',
    health: 'Thuộc Thủy, chú ý thận, tử cung (mệnh nữ). Cảm xúc dao động ảnh hưởng sức khỏe, nên giữ tâm trạng thoải mái',
  },
  '贪狼': {
    niHaixia: 'Nghê sư nói Tham Lang là sao đa tài đa nghệ nhất, đào hoa nặng nhất. Tham Lang Hóa Lộc nhập Mệnh thì sức hút tỏa khắp, ai gặp cũng mến. Tham Lang là sao phát muộn, sau trung niên mới thật sự phát đạt. Tham Lang ở Dần, Thân nhập Miếu là tốt nhất, đào hoa vượng, tài nghệ siêu quần; Hóa Lộc thì tài vận đại phát, nhưng nếu gặp Không Kiếp thì một đời nhiều sóng gió, khó tụ tài.',
    classical: 'Cổ quyết: "Tham Lang phát phúc hanh thông, đa tài đa nghệ, đào hoa nặng nhất; nhưng khó qua tuổi ba mươi, phần nhiều phát muộn. Lạc Hãm gặp sát lại cát, đó là lý của Tham Lang lạc Hãm." Nam Bắc Sơn Nhân chú: "Tham Lang thủ Mệnh, gặp cát thì phúc lộc thọ đủ, phát phúc hanh thông; nhưng lâu về sau khó được chết lành, nên tu thân dưỡng đức mới được thiện chung."',
    bestPalace: 'Cung Mệnh (Hóa Lộc), cung Phúc Đức, cung Thiên Di',
    worstPalace: 'Cung Tật Ách',
    career: 'Nghệ thuật, giải trí, quan hệ công chúng, bán hàng, phong thủy ngũ thuật; dựa vào quan hệ và tài nghệ, kiểu người đa tài',
    relationship: 'Đào hoa cực vượng, tình cảm đa dạng; nên kết hôn muộn, sau khi cưới cần kiềm chế đào hoa mới bạc đầu giai lão',
    wealth: 'Kiếm tiền nhờ quan hệ và tài nghệ, tài vận trung vãn niên mới ổn; Hóa Lộc thì tài nguyên rộng mở, thời trẻ nên giữ vững',
    health: 'Thuộc Mộc (kiêm Thủy), chú ý gan, thận. Đào hoa quá vượng dễ hao tổn tinh lực, nên tiết chế điều dưỡng',
  },
  '巨门': {
    niHaixia: 'Nghê sư cho rằng Cự Môn là sao khẩu thiệt thị phi, nhưng Hóa Lộc, Hóa Quyền thì chuyển cát, thành cách kiếm tiền bằng tài ăn nói. Người Cự Môn tọa Mệnh đa nghi, giỏi biện luận, hợp làm luật sư, giáo viên, bán hàng. Cự Môn kỵ nhất Hóa Kỵ, chủ khẩu thiệt thị phi không dứt, thậm chí dẫn đến kiện tụng. Cự Môn ở Tý, Ngọ khá tốt, ăn nói giỏi, chủ lập thân bằng lời nói.',
    classical: 'Cổ quyết: "Cự Môn là ám diệu, chủ khẩu thiệt thị phi; Hóa Lộc, Quyền thì chuyển thành mưu sinh bằng tài ăn nói, chủ phú quý." Nam Bắc Sơn Nhân chú: "Cự Môn thủ Mệnh, gặp Hóa Lộc, Quyền, người làm nghề bằng miệng lưỡi đại cát; Hóa Kỵ thì khẩu thiệt liên lụy, kiện tụng quấn thân, cần thận trọng lời nói."',
    bestPalace: 'Cung Quan Lộc (Hóa Lộc, Quyền), cung Mệnh (Tý, Ngọ)',
    worstPalace: 'Cung Phu Thê, cung Tật Ách (Hóa Kỵ)',
    career: 'Luật sư, giáo viên, bán hàng, người dẫn chương trình, chuyên gia đàm phán; tài ăn nói là năng lực cạnh tranh cốt lõi',
    relationship: 'Đa nghi đa lự, dễ nghĩ quá nhiều; giao tiếp là chìa khóa của hôn nhân, cần chọn người bạn đời kiên nhẫn',
    wealth: 'Kiếm tiền nhờ tài ăn nói và kỹ năng chuyên môn; Hóa Lộc thì tài vận khá tốt, Hóa Kỵ đề phòng tranh chấp tài chính, khẩu thiệt liên lụy',
    health: 'Thuộc Thủy, chú ý thận, tai, khoang miệng. Lo nghĩ nhiều dễ hại thân, nên học cách thư giãn giảm áp lực',
  },
  '天相': {
    niHaixia: 'Nghê sư nói Thiên Tướng là sao ấn thụ, phụ trách việc hành chính sự vụ. Người Thiên Tướng tọa Mệnh khuôn phép đúng mực, hợp công chức hành chính. Thiên Tướng cần có sao mạnh phối hợp mới phát huy được, một mình tọa Mệnh thì khá bình thường. Thiên Tướng thích nhất có Liêm Trinh đi cùng, thành cách Liêm Tướng, có thể nắm đại quyền hành chính; sợ nhất Phá Quân đồng cung, thành cách "Hình Kỵ giáp Ấn", chủ hung hiểm.',
    classical: 'Cổ quyết: "Thiên Tướng là sao ấn thụ, chủ hành chính sự vụ; Liêm Tướng đồng cung, hóa hung thành cát, nắm đại quyền hành chính." Nam Bắc Sơn Nhân chú: "Thiên Tướng thủ Mệnh, khuôn phép đúng mực, hợp công chức; được Liêm Trinh phối hợp có thể thành rường cột quốc gia; Phá Quân đồng thủ thì khó tránh hình khắc."',
    bestPalace: 'Cung Quan Lộc, cung Mệnh (phối Liêm Trinh)',
    worstPalace: 'Cung Tài Bạch, cung Mệnh (phối Phá Quân thành Hình Kỵ giáp Ấn)',
    career: 'Công chức, quản lý hành chính, thư ký, trợ lý; giỏi vai trò hỗ trợ, cần có sao mạnh dẫn đường',
    relationship: 'Tình cảm ổn định, trung hậu thật thà, là người bạn đời tốt, nhưng cần đối phương định hướng',
    wealth: 'Tài vận bình ổn, tích lũy nhờ lương, không hợp đầu tư mạo hiểm, quản lý tiền kiểu thủ thành là tốt nhất',
    health: 'Thuộc Thủy, chú ý thận, hệ bạch huyết. Thể chất trung bình, nên giữ thói quen sinh hoạt điều độ',
  },
  '天梁': {
    niHaixia: 'Nghê sư cho rằng Thiên Lương là ấm tinh, có thể che chở người khác, cũng đại diện cho y dược, tôn giáo. Người Thiên Lương tọa Mệnh có duyên với bề trên, thời trẻ nhiều gian truân, về già hưởng phúc. Thiên Lương sợ nhất Hóa Kỵ, chủ bề trên hoặc sức khỏe có vấn đề. Thiên Lương đồng cung Thái Dương là tốt nhất, "nhật nguyệt tịnh minh", quý nhân che chở, một đời có quý nhân tương trợ, cuối cùng được bình an.',
    classical: 'Cổ quyết: "Thiên Lương là ấm tinh, chủ che chở bảo hộ; người tọa Mệnh có duyên với bề trên, thời trẻ chịu rèn giũa, về già hưởng thanh phúc." Nam Bắc Sơn Nhân chú: "Thiên Lương thủ Mệnh, phải gặp cát tinh mới phát đạt; gặp Thái Dương đồng cung, nhật nguyệt tịnh minh, chủ quý hiển, một đời nhiều quý nhân giúp đỡ."',
    bestPalace: 'Cung Mệnh, cung Phụ Mẫu, cung Phúc Đức',
    worstPalace: 'Cung Mệnh (khi Hóa Kỵ), cung Tài Bạch',
    career: 'Y tế, tôn giáo, pháp luật, công tác xã hội, từ thiện; thích giúp người, có tấm lòng che chở mọi người',
    relationship: 'Tình cảm thường với người chênh lệch tuổi khá nhiều, hoặc duyên đến muộn; cần kiên nhẫn chờ đợi mới gặp lương duyên',
    wealth: 'Tài vận nhờ quý nhân giúp đỡ; thời trẻ tài vận kém, về già mới vững, nên giữ không nên xông pha',
    health: 'Thuộc Thổ, chú ý tỳ vị, xương cốt. Cần coi trọng chăm sóc sức khỏe tuổi già, nên phòng ngừa và điều dưỡng sớm',
  },
  '七杀': {
    niHaixia: 'Nghê sư nói Thất Sát là sao tướng quân, quả quyết, xông xáo mạnh mẽ, nhưng có tính cô khắc. Thất Sát tọa Mệnh nhất định phải có phụ tinh hóa giải tính cô độc, nếu không thì lục thân duyên mỏng. Thất Sát đồng cung Vũ Khúc là cách Tướng tài, rất tốt. Thất Sát sợ nhất "Trúc La tam hạn" (Dương, Đà, Hỏa, Linh cùng chiếu), chủ đại hung, phải đề phòng tai nạn. Thất Sát Hóa Lộc lại thành cát, có thể thành bậc đại tướng.',
    classical: 'Cổ quyết: "Thất Sát là sao tướng quân, quả quyết xông xáo; người thủ Mệnh tính cô khắc nặng, lục thân duyên mỏng." Nam Bắc Sơn Nhân chú: "Thất Sát thủ Mệnh, tam hợp cát tụ thì đại quý; gặp Trúc La tam hạn (Dương, Đà, Hỏa, Linh) chủ đại hung, đề phòng tai họa bất ngờ, đề phòng hình khắc."',
    bestPalace: 'Cung Mệnh (có phụ tinh), cung Quan Lộc',
    worstPalace: 'Cung Phu Thê, cung Phụ Mẫu',
    career: 'Quân đội, công an, khởi nghiệp, giao dịch tài chính, lĩnh vực tự mình gánh vác; cần quyết đoán nhanh và bản lĩnh',
    relationship: 'Tình cảm cô khắc, khó tìm bạn đời phù hợp, cần người bao dung được cá tính mạnh mẽ, nên kết hôn muộn',
    wealth: 'Tài vận biến động lớn, có cơ hội đại phú nhưng cũng lên xuống thất thường; đồng cung Vũ Khúc thành cách Tướng tài, đại quý',
    health: 'Thuộc Kim, chú ý phổi, đại tràng. Tính nóng nảy dễ hại thân, nên học cách kiểm soát cảm xúc và tu thân',
  },
  '破军': {
    niHaixia: 'Nghê sư nói Phá Quân là sao giỏi phá cũ lập mới nhất, cũng là một trong những sao cô khắc nhất. Phá Quân Hóa Lộc mới chuyển tốt, chủ phá rồi mới lập. Người Phá Quân tọa Mệnh lục thân duyên mỏng nhưng năng lực khai sáng cực mạnh. Phá Quân hợp nhất với cải cách, đổi mới; khi Hóa Lộc tài vận chuyển vượng, một phá một lập, cuối cùng thành tựu sự nghiệp.',
    classical: 'Cổ quyết: "Phá Quân là sao giỏi phá cũ lập mới nhất, người tọa Mệnh cô khắc, lục thân duyên mỏng, nhưng năng lực khai sáng siêu cường; Hóa Lộc thì phá rồi mới lập, có thể thành đại nghiệp." Nam Bắc Sơn Nhân chú: "Phá Quân thủ Mệnh, một đời nhiều sóng gió; Hóa Lộc thì sau khi phá tài mới xây dựng lại được, tài vận rốt cuộc chuyển tốt, chủ thành tựu lúc về già."',
    bestPalace: 'Cung Quan Lộc (Hóa Lộc), cung Thiên Di',
    worstPalace: 'Cung Phu Thê, cung Phụ Mẫu',
    career: 'Sự nghiệp khai phá, quân đội, công an, cải cách, quản trị thay đổi; hợp công việc tiên phong không ngừng mở lĩnh vực mới',
    relationship: 'Tình cảm nhiều sóng gió, hợp tan bất định, lục thân duyên mỏng; cần chọn người bạn đời độc lập và bao dung',
    wealth: 'Tài vận lên xuống lớn, Hóa Lộc thì chuyển tốt; thủ thành thì tài lui, cần không ngừng mở cục diện mới mới tích được của',
    health: 'Thuộc Thủy, chú ý thận, bàng quang, hệ sinh dục. Thể chất thất thường, nên duy trì thói quen vận động đều đặn',
  },
};

/** 辅星 / 煞星简述（中文原文见 StarDetailPanel 的 MINOR_STAR_NOTES） */
export const MINOR_STAR_NOTES_VI: Record<string, string> = {
  '文昌': 'Văn Xương nhập cung, chủ học hành thi cử thuận lợi, giấy tờ ấn tín có lợi, nên làm công việc liên quan đến chữ nghĩa. Cổ quyết: "Văn Xương khoa giáp, chủ văn chương hiển đạt, thi ắt đỗ."',
  '文曲': 'Văn Khúc nhập cung, chủ tài nghệ xuất chúng, ăn nói giỏi, giỏi biểu đạt, thiên phú nghệ thuật mạnh. Cổ quyết: "Văn Khúc là sao tài nghệ, văn võ song toàn, tài ăn nói hơn người."',
  '左辅': 'Tả Phù nhập cung, chủ quý nhân giúp đỡ, có người nâng đỡ, việc của cung này được ủng hộ thiện ý. Cổ quyết: "Tả Phù là sao trợ lực, tọa Mệnh thì nhiều quý nhân, gặp hung hóa cát."',
  '右弼': 'Hữu Bật nhập cung, chủ quý nhân giúp đỡ, phần nhiều là quý nhân nữ, việc của cung này có người hỗ trợ. Cổ quyết: "Hữu Bật là sao âm trợ, nhiều quý nhân nữ, hóa hiểm thành an."',
  '天魁': 'Thiên Khôi nhập cung, chủ quý nhân "ban ngày", quý nhân nam nhiều, có sức gặp hung hóa cát. Cổ quyết: "Thiên Khôi là Thiên Ất quý nhân, gặp ắt có quý nhân phò trì."',
  '天钺': 'Thiên Việt nhập cung, chủ quý nhân "ban đêm", quý nhân nữ nhiều, tăng thêm khí cát tường. Cổ quyết: "Thiên Việt là Ngọc Đường quý nhân, chủ âm trợ, nhiều quý nhân nữ."',
  '禄存': 'Lộc Tồn nhập cung, chủ tài lộc thủ thành, cung này có tài khí nhưng thuộc kiểu tài vận bảo thủ. Cổ quyết: "Lộc Tồn là sao tài lộc, chủ giữ của có thừa, tiến tài vững vàng."',
  '天马': 'Thiên Mã nhập cung, chủ bôn ba biến động, cầu tài trong vận động, nên chủ động xuất kích, không nên ôm cây đợi thỏ. Cổ quyết: "Thiên Mã chủ động, gặp Lộc thì tài lộc song toàn, trong động sinh tài."',
  '地空': 'Địa Không nhập cung, chủ việc của cung này có cảm giác hụt hẫng, tinh thần hao tán, nên chú ý sức khỏe tâm lý. Cổ quyết: "Địa Không chủ hư hao, nhập Mệnh phần nhiều tinh thần mơ hồ, phải đề phòng ảo tưởng."',
  '地劫': 'Địa Kiếp nhập cung, chủ việc của cung này có tổn thất bất ngờ, tiền của cần thận trọng, đề phòng tiểu nhân. Cổ quyết: "Địa Kiếp chủ kiếp tài, nhập Mệnh thì tài vận bị tổn, đề phòng mất mát bất ngờ."',
  '火星': 'Hỏa Tinh nhập cung, chủ việc của cung này nóng vội bốc đồng, cảm xúc dao động, nhưng gặp Tham Lang lại thành cát. Cổ quyết: "Hỏa Tinh chủ nóng nảy, nhưng gặp Tham Lang đồng cung lại thành cách Hỏa Tham, chủ bạo phát."',
  '铃星': 'Linh Tinh nhập cung, chủ việc của cung này có trở ngại ngầm, đề phòng tiểu nhân sau lưng, mọi việc nên kín đáo. Cổ quyết: "Linh Tinh chủ ám sát, nhập Mệnh phần nhiều bị địch ngầm, phải đề phòng thị phi sau lưng."',
  '擎羊': 'Kình Dương nhập cung, chủ hình khắc, việc của cung này nhiều trắc trở, có tai họa huyết quang hoặc tai nạn. Cổ quyết: "Kình Dương là sao hình khắc, nhập Mệnh phần nhiều hình khắc, phải đề phòng tai nạn huyết quang."',
  '陀罗': 'Đà La nhập cung, chủ thị phi quấn thân, việc của cung này dây dưa không quyết, mọi việc nên chuẩn bị sớm. Cổ quyết: "Đà La chủ thị phi trì trệ, nhập Mệnh thì làm việc chậm chạp, phải đề phòng dây dưa không dứt."',
};

export function localizeStarDescription<T extends StarDescriptionText>(name: string, desc: T, locale: Locale): T {
  if (locale === 'zh') return desc;
  const vi = STAR_DESCRIPTIONS_VI[name];
  return vi ? { ...desc, ...vi } : desc;
}

export function localizeStarDetail(name: string, detail: StarDetailText, locale: Locale): StarDetailText {
  if (locale === 'zh') return detail;
  return STAR_DETAIL_VI[name] ?? detail;
}

export function localizeMinorStarNote(name: string, zh: string, locale: Locale): string {
  if (locale === 'zh') return zh;
  return MINOR_STAR_NOTES_VI[name] ?? zh;
}
