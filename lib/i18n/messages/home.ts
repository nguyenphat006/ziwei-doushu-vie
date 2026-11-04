/** 越南语词典：home（key 为中文原文） */
export const HOME_VI: Record<string, string> = {
  // ── 主题切换 / 导航 ──
  '切换亮色主题': 'Chuyển sang giao diện sáng',
  '切换暗色主题': 'Chuyển sang giao diện tối',
  '暗色': 'Tối',
  '亮色': 'Sáng',
  '紫微命盘': 'Lá số Tử Vi',
  '立即起盘': 'Lập lá số ngay',

  // ── 功能模块 FEATURES ──
  '排盘体系': 'Hệ thống lập lá số',
  '倪海厦正宗\n紫微斗数': 'Tử Vi Đẩu Số\nchính tông Nghê Hải Hạ',
  '非简化版，严格遵循倪海厦老师传承': 'Không phải bản giản lược — tuân thủ nghiêm ngặt truyền thừa của thầy Nghê Hải Hạ',
  '纳音五行局起盘，不采用网络简化算法': 'Khởi lá số theo Ngũ hành Cục nạp âm, không dùng các thuật toán giản lược trôi nổi trên mạng',
  '命宫逆数生时、身宫顺数生时，严格对齐教学规则': 'Cung Mệnh đếm nghịch theo giờ sinh, cung Thân đếm thuận theo giờ sinh — khớp chặt với quy tắc giảng dạy',
  '十四主星与四化飞星按原法推演，结构完整可复核': '14 chính tinh và Tứ Hóa phi tinh được an theo phép gốc, cấu trúc đầy đủ, có thể đối chiếu kiểm chứng',
  '命盘呈现': 'Trình bày lá số',
  '完整十四主星\n四化飞星': 'Đủ 14 chính tinh\nvà Tứ Hóa phi tinh',
  '结构清晰，一眼看懂主轴与重点': 'Bố cục rõ ràng, nhìn qua là nắm được trục chính và điểm trọng yếu',
  '十四主星完整入宫，主星关系清楚可读': '14 chính tinh an đủ vào các cung, quan hệ giữa các chính tinh rõ ràng, dễ đọc',
  '辅星与煞星同屏呈现，避免关键信息缺失': 'Phụ tinh và sát tinh hiển thị trên cùng một màn hình, không bỏ sót thông tin then chốt',
  '庙旺利陷亮度分级，快速识别强弱': 'Phân cấp độ sáng Miếu / Vượng / Lợi / Hãm, nhận biết nhanh sao mạnh hay yếu',
  '点击任意主星即可查看倪海厦老师对该星的详细解读': 'Nhấn vào bất kỳ chính tinh nào để xem lời giảng chi tiết của thầy Nghê Hải Hạ về sao đó',
  'AI 解读': 'Luận giải AI',
  '深度解盘\n不止于算': 'Luận giải chuyên sâu\nkhông chỉ là tính toán',
  '倪海厦体系知识库 × Claude AI': 'Kho tri thức hệ phái Nghê Hải Hạ × Claude AI',
  '命格分析：从命宫主星出发，结合三方四正，给出全面的性格与人生格局判断':
    'Phân tích mệnh cách: xuất phát từ chính tinh cung Mệnh, kết hợp Tam phương tứ chính, đưa ra nhận định toàn diện về tính cách và cách cục cuộc đời',
  '六大维度解读：事业方向、感情婚姻、财运模式、健康注意、家庭关系、子女缘分':
    'Luận giải 6 phương diện: hướng sự nghiệp, tình cảm hôn nhân, cách thức tài lộc, lưu ý sức khỏe, quan hệ gia đình, duyên con cái',
  '大限流年追踪：当前10年大限重点、今年流年宫位的具体提示与行动建议':
    'Theo dõi Đại hạn – Lưu niên: trọng điểm của Đại hạn 10 năm hiện tại, gợi ý cụ thể và lời khuyên hành động theo cung Lưu niên năm nay',
  '自由追问：针对你的命盘直接提问，「今年能换工作吗」「什么时候结婚运最好」':
    'Hỏi đáp tự do: đặt câu hỏi trực tiếp về lá số của bạn, như “Năm nay có nên đổi việc không?”, “Khi nào vận kết hôn tốt nhất?”',
  '格局识别': 'Nhận diện cách cục',
  '自动检测\n命盘格局': 'Tự động phát hiện\ncách cục lá số',
  '从星曜组合中发现你的命中注定': 'Khám phá điều định mệnh của bạn qua tổ hợp tinh diệu',
  '自动识别11种经典格局：紫府同宫、杀破狼格、机月同梁、廉相格、武曲七杀等':
    'Tự động nhận diện 11 cách cục kinh điển: Tử Phủ đồng cung, Sát Phá Lang, Cơ Nguyệt Đồng Lương, Liêm Tướng, Vũ Khúc – Thất Sát…',
  '辅弼夹命、日月夹命等特殊格局精准检测，并给出倪海厦体系下的标准解读':
    'Phát hiện chính xác các cách đặc biệt như Tả Hữu giáp Mệnh, Nhật Nguyệt giáp Mệnh, kèm lời giải chuẩn theo hệ phái Nghê Hải Hạ',
  '四化入命宫迁移宫的特殊状况自动标注，提示需关注的人生议题':
    'Tự động đánh dấu các trường hợp Tứ Hóa nhập cung Mệnh, cung Thiên Di, nhắc những vấn đề cuộc đời cần lưu tâm',
  '格局按吉凶等级分层展示，让你一目了然自己命盘中的优势与挑战':
    'Cách cục được phân tầng theo mức cát hung, giúp bạn thấy ngay ưu thế và thử thách trong lá số của mình',

  // ── 学习板块 SECTIONS ──
  '天纪': 'Thiên Kỷ',
  '地纪': 'Địa Kỷ',
  '人纪': 'Nhân Kỷ',
  '14 主星 · 13 宫位 · AI 解读': '14 chính tinh · 13 cung · Luận giải AI',
  '紫微 · 周易 · 奇门遁甲': 'Tử Vi · Chu Dịch · Kỳ Môn Độn Giáp',
  '倪师未竟之业 · 后辈补注': 'Di nghiệp dang dở của Nghê sư · Hậu học chú giải',
  '内经 · 伤寒 · 金匮 · 针灸': 'Nội Kinh · Thương Hàn · Kim Quỹ · Châm Cứu',
  '5 月': 'Tháng 5',
  '6 月': 'Tháng 6',
  '7 月': 'Tháng 7',
  '遗稿研读': 'Nghiên cứu di cảo',

  // ── 倪海厦核心教义 ──
  '命宫为本，三方为用': 'Lấy cung Mệnh làm gốc, Tam phương làm dụng',
  '倪师始终强调，看命必先看命宫。命宫主星决定一个人的基本格局与天生性格，三方（财帛、官禄、迁移）则决定此人的「用武之地」。四宫联动才是完整的人生图景。':
    'Nghê sư luôn nhấn mạnh: xem mệnh trước hết phải xem cung Mệnh. Chính tinh cung Mệnh quyết định cách cục cơ bản và tính cách bẩm sinh của một người, còn Tam phương (Tài Bạch, Quan Lộc, Thiên Di) quyết định “đất dụng võ” của người ấy. Bốn cung liên động mới là bức tranh trọn vẹn của cuộc đời.',
  '对宫借星，不可忽视': 'Mượn sao cung đối, chớ xem nhẹ',
  '倪师的独到之处在于重视「对宫」。任何宫位若为空宫，必须借对宫星曜来论断，命宫的对面是迁移宫，两者互相影响，这是很多初学者容易忽略的关键。':
    'Điểm độc đáo của Nghê sư là coi trọng “cung đối”. Cung nào là cung vô chính diệu thì phải mượn tinh diệu của cung đối để luận đoán; đối diện cung Mệnh là cung Thiên Di, hai cung ảnh hưởng lẫn nhau — đây là mấu chốt mà nhiều người mới học hay bỏ qua.',
  '四化才是命运的手': 'Tứ Hóa mới là bàn tay của vận mệnh',
  '星曜只是基础，四化（化禄、化权、化科、化忌）才是决定运势好坏的关键。同一颗星，有化禄与有化忌，人生轨迹可以截然不同。倪师反复强调：不看四化，命盘只解了一半。':
    'Tinh diệu chỉ là nền tảng, Tứ Hóa (Hóa Lộc, Hóa Quyền, Hóa Khoa, Hóa Kỵ) mới là then chốt quyết định vận thế tốt xấu. Cùng một ngôi sao, có Hóa Lộc hay Hóa Kỵ thì quỹ đạo cuộc đời có thể khác hẳn nhau. Nghê sư nhắc đi nhắc lại: không xem Tứ Hóa thì mới giải được một nửa lá số.',
  '大限十年，运势有节': 'Đại hạn mười năm, vận thế có nhịp',
  '倪师将人生划分为12个大限，每个大限10年。他认为人在不同的大限宫位，际遇完全不同。了解自己现在走的是哪个大限、该宫位有何星曜，才能真正把握当下的运势。':
    'Nghê sư chia đời người thành 12 Đại hạn, mỗi Đại hạn 10 năm. Ông cho rằng ở những cung Đại hạn khác nhau, cơ duyên gặp gỡ của con người hoàn toàn khác nhau. Biết mình đang đi Đại hạn nào, cung ấy có những tinh diệu gì, mới thực sự nắm được vận thế hiện tại.',

  // ── 四化简介 ──
  '吉化·增益': 'Cát hóa · Tăng ích',
  '福星到宫，主财运与福气增益。所在宫位事物顺遂，能力增强，是命盘中最受欢迎的化星。':
    'Phúc tinh đến cung, chủ tài vận và phúc khí gia tăng. Sự việc ở cung tọa thủ thuận lợi, năng lực được tăng cường — là sao hóa được ưa chuộng nhất trên lá số.',
  '吉化·权威': 'Cát hóa · Quyền uy',
  '权力星到宫，主掌控与领导力。所在宫位主强势与决断，喜入官禄宫与命宫，主事业上的实权。':
    'Quyền tinh đến cung, chủ khả năng nắm giữ và lãnh đạo. Cung tọa thủ chủ sự mạnh mẽ và quyết đoán; ưa nhập cung Quan Lộc và cung Mệnh, chủ thực quyền trong sự nghiệp.',
  '吉化·名誉': 'Cát hóa · Danh dự',
  '科名星到宫，主声誉与贵人缘。所在宫位主文名与考运，有贵人扶持，宜学术、考试与公开场合。':
    'Khoa danh tinh đến cung, chủ thanh danh và duyên quý nhân. Cung tọa thủ chủ văn danh và vận thi cử, có quý nhân nâng đỡ; hợp học thuật, thi cử và những nơi công khai.',
  '凶化·阻碍': 'Hung hóa · Trở ngại',
  '劫数星到宫，主执念与阻碍。所在宫位需特别关注，该宫人生课题将成为重要考验。':
    'Kiếp số tinh đến cung, chủ chấp niệm và trở ngại. Cung tọa thủ cần đặc biệt lưu ý, bài học cuộc đời của cung ấy sẽ thành thử thách quan trọng.',

  // ── 主星简介 ──
  '土·帝王星': 'Thổ · Đế tinh',
  '天皇贵星，统御众星。坐命者有孤傲之气，主权威显达，天生具备领导气质，适合独当一面的领导岗位。':
    'Quý tinh Thiên Hoàng, thống lĩnh các sao. Người có Tử Vi thủ Mệnh mang khí chất cô ngạo, chủ quyền uy hiển đạt, bẩm sinh có tố chất lãnh đạo, hợp với vị trí lãnh đạo tự mình gánh vác một phương.',
  '木·智慧星': 'Mộc · Trí tuệ tinh',
  '益寿星，主智谋与变动。聪慧机灵，善于筹谋，心思细腻，宜从事策划、顾问、技术类工作。':
    'Ích thọ tinh, chủ mưu trí và biến động. Thông minh lanh lợi, giỏi trù tính, tâm tư tinh tế; hợp công việc hoạch định, tư vấn, kỹ thuật.',
  '火·官禄主': 'Hỏa · Chủ Quan Lộc',
  '官禄主星，主声誉与名望。慷慨大度，重视公众形象，利官场与公职，男命力强，入庙时光明磊落。':
    'Chủ tinh Quan Lộc, chủ thanh danh và danh vọng. Hào phóng rộng lượng, coi trọng hình ảnh trước công chúng, lợi cho quan trường và công chức; mệnh nam lực mạnh, nhập Miếu thì quang minh lỗi lạc.',
  '金·财帛主': 'Kim · Chủ Tài Bạch',
  '财帛主星，主财务与决断。意志坚定，行动果敢，适合财务、金融、军警类职业，孤克之星，利晚婚。':
    'Chủ tinh Tài Bạch, chủ tài chính và quyết đoán. Ý chí kiên định, hành động quả cảm; hợp nghề tài chính, ngân hàng, quân đội, công an. Là sao cô khắc, lợi kết hôn muộn.',
  '水·福星': 'Thủy · Phúc tinh',
  '福德主星，主享乐与人缘。性情温和，人缘极好，注重生活品质，感情细腻，晚年运势佳。':
    'Chủ tinh Phúc Đức, chủ hưởng thụ và nhân duyên. Tính tình ôn hòa, rất được lòng người, chú trọng chất lượng cuộc sống, tình cảm tinh tế, vận hậu vận tốt.',
  '火·才艺星': 'Hỏa · Tài nghệ tinh',
  '次桃花星，主才艺与情欲。才华出众，感情丰富，适合艺术、政界，多才多艺但需防桃花是非。':
    'Thứ đào hoa tinh, chủ tài nghệ và tình dục. Tài hoa xuất chúng, tình cảm phong phú; hợp nghệ thuật, chính trường. Đa tài đa nghệ nhưng cần đề phòng thị phi đào hoa.',
  '土·财库星': 'Thổ · Tài khố tinh',
  '南斗主星，主财库与积蓄。稳重保守，理财能力强，是命盘的稳定力量，适合管理财务与行政。':
    'Chủ tinh Nam Đẩu, chủ kho tài và tích lũy. Điềm đạm, thận trọng, giỏi quản lý tiền bạc — là lực lượng ổn định của lá số; hợp quản lý tài chính và hành chính.',
  '水·田宅主': 'Thủy · Chủ Điền Trạch',
  '田宅主星，主财富与阴柔。细腻温柔，感受力强，女命尤佳，利不动产与积蓄，适合文艺或服务业。':
    'Chủ tinh Điền Trạch, chủ tài phú và tính âm nhu. Tinh tế dịu dàng, cảm thụ mạnh, mệnh nữ càng đẹp; lợi bất động sản và tích lũy, hợp văn nghệ hoặc ngành dịch vụ.',
  '木水·桃花': 'Mộc Thủy · Đào hoa',
  '桃花星，主欲望与才艺。多才多艺，欲望旺盛，社交活跃，宜从事艺术、公关、商业，人缘极好。':
    'Đào hoa tinh, chủ dục vọng và tài nghệ. Đa tài đa nghệ, ham muốn mạnh, giao tiếp năng động; hợp nghệ thuật, quan hệ công chúng, kinh doanh, rất được lòng người.',
  '水·是非星': 'Thủy · Thị phi tinh',
  '暗星，主口才与是非。口才出众，思辨能力强，适合律师、教育、媒体，注意口舌是非，以辩才立身。':
    'Ám tinh, chủ khẩu tài và thị phi. Ăn nói xuất chúng, tư duy biện luận mạnh; hợp luật sư, giáo dục, truyền thông. Cần đề phòng thị phi khẩu thiệt, lập thân bằng tài hùng biện.',
  '水·印星': 'Thủy · Ấn tinh',
  '印星，主辅佐与印绶。善于协调，重视礼节，正直守法，适合幕僚、行政、法律类工作，贵人运佳。':
    'Ấn tinh, chủ phò tá và ấn thụ. Giỏi điều phối, trọng lễ tiết, chính trực tuân thủ pháp luật; hợp công việc tham mưu, hành chính, pháp luật, vận quý nhân tốt.',
  '土·荫星': 'Thổ · Ấm tinh',
  '荫星，主老成与荫蔽。正直稳重，慈悲心强，老天爷会保佑，适合医疗、社会工作、宗教领域。':
    'Ấm tinh, chủ lão thành và che chở. Chính trực điềm đạm, lòng từ bi lớn, được trời phù hộ; hợp lĩnh vực y tế, công tác xã hội, tôn giáo.',
  '金火·将星': 'Kim Hỏa · Tướng tinh',
  '将星，主刚烈与开创。性格刚毅，行动力强，勇于挑战，适合创业、军警、竞争性行业，逢凶化吉。':
    'Tướng tinh, chủ cương liệt và khai sáng. Tính cách cương nghị, hành động mạnh mẽ, dám đương đầu thử thách; hợp khởi nghiệp, quân đội – công an, ngành nghề cạnh tranh, gặp hung hóa cát.',
  '水·耗星': 'Thủy · Hao tinh',
  '耗星，主变动与开拓。勇于突破，不惧改变，一生变动大但有魄力，适合开拓型工作，走别人没走过的路。':
    'Hao tinh, chủ biến động và khai phá. Dám đột phá, không sợ thay đổi, cả đời nhiều biến động nhưng có khí phách; hợp công việc mang tính khai phá, đi con đường người khác chưa từng đi.',

  // ── 功能视觉 ──
  '倪海厦排盘法': 'Phép lập lá số Nghê Hải Hạ',
  '紫微系': 'Chòm Tử Vi',
  '天府系': 'Chòm Thiên Phủ',
  '四化飞星': 'Tứ Hóa phi tinh',
  '我今年的事业运势如何？': 'Vận sự nghiệp năm nay của tôi thế nào?',
  '命宫天机化禄，今年大限走官禄宫，三方有左辅相助，事业有贵人提携，适合主动拓展…':
    'Cung Mệnh có Thiên Cơ Hóa Lộc, năm nay Đại hạn đi cung Quan Lộc, Tam phương có Tả Phù tương trợ, sự nghiệp được quý nhân nâng đỡ, nên chủ động mở rộng…',
  '什么时候感情运最好？': 'Khi nào vận tình cảm tốt nhất?',
  '杀破狼格': 'Cách Sát Phá Lang',
  '开创进取之命': 'Mệnh khai sáng, tiến thủ',
  '廉相格': 'Cách Liêm Tướng',
  '行政印绶之格': 'Cách hành chính, ấn thụ',
  '化忌入命': 'Hóa Kỵ nhập Mệnh',
  '需关注心理课题': 'Cần lưu tâm vấn đề tâm lý',
  '自动识别 11 种经典格局': 'Tự động nhận diện 11 cách cục kinh điển',

  // ── Hero ──
  '紫微斗数 · 倪海厦体系': 'Tử Vi Đẩu Số · Hệ phái Nghê Hải Hạ',
  '紫微为门 · 天地人为路 · 倪海厦为师': 'Tử Vi là cửa · Thiên Địa Nhân là đường · Nghê Hải Hạ là thầy',
  'AI 答疑 · 知行合一': 'AI giải đáp · Tri hành hợp nhất',
  '输入出生年月日时，生成专属紫微斗数命盘 — 后续天纪、地纪、人纪学习模块陆续开放。':
    'Nhập năm, tháng, ngày, giờ sinh để tạo lá số Tử Vi Đẩu Số của riêng bạn — các học phần Thiên Kỷ, Địa Kỷ, Nhân Kỷ sẽ lần lượt ra mắt.',
  '限时回馈': 'Ưu đãi có thời hạn',
  '全部功能 + AI 提问': 'Toàn bộ tính năng + hỏi AI',
  '全部功能 + AI': 'Toàn bộ tính năng + AI',
  '全免费': 'miễn phí hoàn toàn',
  '探索更多': 'Khám phá thêm',

  // ── 哲学引言 ──
  '命 · 运 · 观': 'Mệnh · Vận · Quan',
  '提前窥探命运的意义': 'Ý nghĩa của việc nhìn trước vận mệnh',
  '不在于预知未来': 'không nằm ở chỗ biết trước tương lai',
  '而在于不断认识自己': 'mà ở chỗ không ngừng thấu hiểu chính mình',
  '最终书写属于自己的人生剧本': 'để rồi tự viết nên kịch bản cuộc đời của riêng mình',

  // ── 时间轴 ──
  '倪师方法论 · 渐次展开': 'Phương pháp luận Nghê sư · Từng bước mở ra',
  '从紫微入门，逐步开放天纪 / 地纪 / 人纪学习模块': 'Nhập môn từ Tử Vi, rồi lần lượt mở các học phần Thiên Kỷ / Địa Kỷ / Nhân Kỷ',

  // ── 天地人 ──
  '天 · 地 · 人': 'Thiên · Địa · Nhân',
  '倪海厦老师的核心命运观：命运从来不是人生的全部。': 'Quan niệm vận mệnh cốt lõi của thầy Nghê Hải Hạ: vận mệnh chưa bao giờ là toàn bộ cuộc đời.',
  '他将影响人生的力量分为三个同等重要的维度。': 'Ông chia những lực ảnh hưởng đến đời người thành ba phương diện quan trọng ngang nhau.',
  '先天命运': 'Vận mệnh tiên thiên',
  '紫微斗数所揭示的，是一个人的先天命盘格局——出生时间决定的星曜布局、五行局数、命宫主星。这只是命运的三分之一，是人生的底色，而非全貌。':
    'Điều Tử Vi Đẩu Số hé lộ là cách cục lá số tiên thiên của một người — bố cục tinh diệu, Ngũ hành Cục, chính tinh cung Mệnh do thời điểm sinh quyết định. Đó chỉ là một phần ba vận mệnh, là màu nền của cuộc đời chứ không phải toàn cảnh.',
  '命盘 · 星曜 · 五行': 'Lá số · Tinh diệu · Ngũ hành',
  '地理环境': 'Môi trường địa lý',
  '你所在的地理环境、城市、国家、风水格局，乃至家庭背景与社会结构，共同构成了命运的第二个维度。同一命盘，生在不同地方，际遇可以天壤之别。':
    'Môi trường địa lý, thành phố, quốc gia, phong thủy nơi bạn sống, cho đến hoàn cảnh gia đình và cấu trúc xã hội, cùng tạo nên phương diện thứ hai của vận mệnh. Cùng một lá số, sinh ra ở những nơi khác nhau, cơ duyên có thể khác nhau một trời một vực.',
  '地域 · 风水 · 环境': 'Địa vực · Phong thủy · Môi trường',
  '人心意念': 'Tâm ý con người',
  '个人的意志、心态、选择与行动，才是改变命运最主动的力量。倪师强调：了解命盘是为了更好地做人，而不是坐等命运安排。精进自己，是最强的破局之道。':
    'Ý chí, tâm thái, lựa chọn và hành động của mỗi người mới là lực lượng chủ động nhất để thay đổi vận mệnh. Nghê sư nhấn mạnh: hiểu lá số là để sống tốt hơn, chứ không phải ngồi chờ số phận sắp đặt. Không ngừng hoàn thiện bản thân là cách phá cục mạnh mẽ nhất.',
  '意志 · 选择 · 行动': 'Ý chí · Lựa chọn · Hành động',
  '「命运不是人生的全部，加上地理位置和人念，才是。」': '“Vận mệnh không phải là toàn bộ cuộc đời; cộng thêm vị trí địa lý và tâm niệm con người mới là đủ.”',
  '— 倪海厦': '— Nghê Hải Hạ',

  // ── 倪海厦介绍 ──
  '倪海厦老师': 'Thầy Nghê Hải Hạ',
  '当代华人圈最具影响力的中医与术数大家之一': 'Một trong những bậc thầy Đông y và thuật số có ảnh hưởng nhất trong cộng đồng người Hoa đương đại',
  '美国汉唐中医学院创办人 ·「人纪」「天纪」两大教学体系传世': 'Người sáng lập Học viện Đông y Hán Đường tại Mỹ · Để lại hai hệ thống giảng dạy “Nhân Kỷ” và “Thiên Kỷ”',
  '生于': 'Sinh năm',
  '1954年': '1954',
  '台湾': 'Đài Loan',
  '离世': 'Mất năm',
  '2012年': '2012',
  '1月31日 · 享年58': 'Ngày 31/1 · Hưởng thọ 58 tuổi',
  '传承': 'Truyền thừa',
  '紫微斗数': 'Tử Vi Đẩu Số',
  '经方中医 · 易经': 'Đông y Kinh phương · Kinh Dịch',

  // ── 合盘入口 ──
  '紫微合盘': 'Hợp lá số Tử Vi',
  '输入两个人的出生信息，AI 基于倪海厦体系分析夫妻宫互参、命宫兼容性与三方四正交互，':
    'Nhập thông tin ngày sinh của hai người, AI sẽ dựa trên hệ phái Nghê Hải Hạ để phân tích tương tham cung Phu Thê, độ hòa hợp cung Mệnh và tương tác Tam phương tứ chính,',
  '给出感情匹配度、合伙可行性与最佳相处建议。': 'đưa ra mức độ hợp nhau trong tình cảm, tính khả thi khi hợp tác và lời khuyên chung sống tốt nhất.',
  '感情匹配度分析': 'Phân tích độ hợp tình cảm',
  '合伙创业评估': 'Đánh giá hợp tác khởi nghiệp',
  '亲子缘分解读': 'Luận duyên cha mẹ – con cái',
  '婚前相性评估': 'Đánh giá tương hợp trước hôn nhân',
  '开始合盘分析': 'Bắt đầu phân tích hợp lá số',

  // ── 最终 CTA ──
  '开始你的命盘之旅': 'Bắt đầu hành trình lá số của bạn',
  '你的紫微命盘': 'Lá số Tử Vi của bạn',
  '等你解读': 'đang chờ bạn khám phá',
  '输入出生年月日时，在几秒内生成你的专属命盘': 'Nhập năm, tháng, ngày, giờ sinh — chỉ vài giây là có lá số của riêng bạn',
  '再由 AI 按倪海厦体系为你深度解读': 'rồi AI sẽ luận giải chuyên sâu theo hệ phái Nghê Hải Hạ',
  '免费起盘': 'Lập lá số miễn phí',
  '✦ 紫微斗数知识库 →': '✦ Kho tri thức Tử Vi Đẩu Số →',
  '📜 古籍原典库 →': '📜 Thư viện cổ thư nguyên điển →',

  // ── Footer ──
  '倪师方法论 · 学术体系': 'Phương pháp luận Nghê sư · Hệ thống học thuật',
  '✓ 已上线': '✓ Đã ra mắt',
  '{when} 开放': 'Mở vào {when}',
  '紫微命盘 · 基于倪海厦正宗体系 · 仅供参考，命运掌握在自己手中':
    'Lá số Tử Vi · Theo hệ phái chính tông Nghê Hải Hạ · Chỉ mang tính tham khảo, vận mệnh nằm trong tay bạn',
  '本平台基于中国传统文化研究，仅提供学习参考。': 'Nền tảng này dựa trên nghiên cứu văn hóa truyền thống Trung Hoa, chỉ nhằm mục đích tham khảo học tập.',
  '不构成任何医疗、投资、法律或重大决策建议。': 'Không cấu thành bất kỳ lời khuyên y tế, đầu tư, pháp lý hay quyết định trọng đại nào.',
  '服务条款': 'Điều khoản dịch vụ',
  '隐私政策': 'Chính sách bảo mật',

  // ── ScrollIntro ──
  '跳 过': 'Bỏ qua',
  '观 天 之 象 · 察 人 之 命': 'Quan thiên chi tượng · Sát nhân chi mệnh',
  '倪海厦《天纪》正宗体系': 'Hệ thống chính tông “Thiên Kỷ” của Nghê Hải Hạ',

  // ── AnnouncementModal ──
  '致正在使用这个平台的你': 'Gửi bạn — người đang dùng nền tảng này',
  '关闭': 'Đóng',
  'LIMITED TIME · 限时回馈': 'LIMITED TIME · Ưu đãi có thời hạn',
  '5 月 1 日 — 5 月 8 日': '1/5 — 8/5',
  '平台全部功能 + AI 提问 全部免费开放': 'Toàn bộ tính năng của nền tảng + hỏi AI đều mở miễn phí',
  '说实话，我真的没想到会有这么大的流量。': 'Thú thật, tôi không ngờ lượng truy cập lại lớn đến vậy.',
  '最开始做这个平台，我的初心其实很简单：在 AI 时代，把倪师这套原本复杂、门槛很高的体系，尽量做得更简单、更高效、更容易理解。':
    'Khi bắt đầu làm nền tảng này, ý định ban đầu của tôi rất đơn giản: trong thời đại AI, biến hệ thống vốn phức tạp, ngưỡng cửa rất cao của Nghê sư thành thứ đơn giản hơn, hiệu quả hơn và dễ hiểu hơn.',
  '不一定每个人都要先学很久、看很多书，才能接触这些内容。我们希望通过这个平台，让大家用更轻松的方式，获得一些对自我、人生阶段、选择方向的参考和启发。':
    'Không nhất thiết ai cũng phải học thật lâu, đọc thật nhiều sách mới chạm tới được những nội dung này. Chúng tôi mong qua nền tảng này, mọi người có thể nhẹ nhàng hơn mà nhận được chút tham khảo và gợi mở về bản thân, về các giai đoạn cuộc đời và hướng lựa chọn.',
  '倪师曾说过一句话：人怎么可能发明出完全没有用的东西呢？': 'Nghê sư từng nói: con người làm sao có thể phát minh ra một thứ hoàn toàn vô dụng được chứ?',
  '我一直觉得，易经如此，紫微斗数也是如此。它们真正有价值的地方，不是让人被某个结果困住，而是让我们更早看见自己的性格惯性、人生课题和选择方向。看见之后，才有机会调整；理解之后，才有机会变得更好。':
    'Tôi luôn cho rằng Kinh Dịch là vậy, Tử Vi Đẩu Số cũng vậy. Giá trị thật sự của chúng không phải khiến con người bị trói buộc vào một kết quả nào đó, mà là giúp ta sớm nhìn thấy quán tính tính cách, bài học cuộc đời và hướng lựa chọn của mình. Nhìn thấy rồi mới có cơ hội điều chỉnh; thấu hiểu rồi mới có cơ hội trở nên tốt hơn.',
  '至于那些说“你当下在看这些，其实也是命运的一部分”之类的话，我就不多评价了。':
    'Còn những câu kiểu “việc bạn đang xem những thứ này cũng là một phần của số mệnh”, tôi xin không bình luận nhiều.',
  '这几天账号被小红书抬走了，': 'Mấy hôm nay tài khoản bị Xiaohongshu (Tiểu Hồng Thư) khóa mất, ',
  '5 月 3 号开始恢复正常更新。': 'từ ngày 3/5 sẽ cập nhật trở lại bình thường.',
  '最后，真心祝愿大家都能越来越了解自己，越来越爱自己，也越来越有能力爱身边的人。':
    'Cuối cùng, chân thành chúc mọi người ngày càng hiểu mình hơn, yêu bản thân hơn, và ngày càng có khả năng yêu thương những người bên cạnh.',
  '——谢谢大家 🙏': '— Cảm ơn mọi người 🙏',
  '我知道了': 'Tôi đã hiểu',
};
