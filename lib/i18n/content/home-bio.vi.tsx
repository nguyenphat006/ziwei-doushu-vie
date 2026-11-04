/**
 * 首页「倪海厦介绍」长文的越南语版本（含内联 <strong>/<em>，故单独做成组件）。
 * 中文原文仍保留在 app/page.tsx 内。
 */
export function NiBioVi({ gold, muted }: { gold: string; muted: string }) {
  return (
    <>
      <p>
        <strong style={{ color: gold }}>Tiểu sử</strong>:{' '}
        Ông Nghê Hải Hạ (1954–2012) sinh tại Đài Loan, thuở trẻ theo học nhiều danh y Đông y, chuyên sâu phái Kinh phương
        (truyền thừa “Thương Hàn Luận” 《伤寒论》). Đến tuổi trung niên ông sang Mỹ hành nghề y, sáng lập <strong>Học viện Đông y Hán Đường</strong>,
        hơn hai mươi năm truyền dạy có hệ thống Đông y và thuật số truyền thống.
        Ông qua đời tại Đài Loan ngày 31/1/2012 vì ung thư gan, hưởng thọ 58 tuổi.
      </p>
      <p>
        <strong style={{ color: gold }}>Hệ thống giảng dạy</strong>:{' '}
        Nghê sư hệ thống hóa sở học cả đời thành hai loạt bài giảng công khai.
        {' '}<strong>“Nhân Kỷ” (人纪)</strong> gồm “Châm Cứu Đại Thành”, “Thần Nông Bản Thảo Kinh”, “Hoàng Đế Nội Kinh”, “Thương Hàn Luận”, “Kim Quỹ Yếu Lược” —
        đây là “kỷ cương của con người”, đặt nền con đường học Đông y trọn vẹn;
        {' '}<strong>“Thiên Kỷ” (天纪)</strong> gồm Tử Vi Đẩu Số và Kinh Dịch — đây là “kỷ cương của trời”, thành quả hệ thống hóa việc nghiên cứu thuật số.
        Hai phần hợp lại là di sản truyền thừa trọn vẹn nhất Nghê sư để lại cho hậu thế.
      </p>
      <p>
        <strong style={{ color: gold }}>Lập trường Tử Vi</strong>:{' '}
        Về Tử Vi Đẩu Số, Nghê sư thuộc rõ ràng <strong>phái Tam Hợp phương Nam</strong>, chủ trương “lấy cung Mệnh làm gốc, lấy Tam phương tứ chính làm dụng, lấy Tứ Hóa làm cương”.
        Trong khóa “Thiên Kỷ”, ông nói thẳng: “<em>Phi tinh (Tứ Hóa) bay qua bay lại quá phức tạp, tôi không làm cái đó, dù sao đại đạo chí giản</em>” —
        lập trường này phân biệt rõ ông với phái Phi Tinh rườm rà.
      </p>
      <p>
        <strong style={{ color: gold }}>Thái độ học thuật</strong>:{' '}
        Nghê sư phản đối học thuộc lòng khẩu quyết một cách máy móc, nhấn mạnh “hiểu nguyên lý hơn học thuộc”, “logic có thể kiểm chứng hơn huyền học thần bí”.
        Thái độ ấy đưa Tử Vi Đẩu Số từ một hệ thống khép kín truyền riêng thầy – trò trở thành hệ thống tri thức hiện đại, có hệ thống, có thể kiểm chứng và có thể học được.
      </p>
      <p>
        <strong style={{ color: gold }}>Ảnh hưởng đương đại</strong>:{' '}
        Video bài giảng của Nghê sư lan truyền rộng rãi trên Bilibili, YouTube và nhiều nền tảng khác, được thế hệ mới yêu thích mệnh lý và Đông y công nhận là bài nhập môn bắt buộc.
        Ông không chỉ là người truyền thừa Tử Vi Đẩu Số, mà còn là một trong những nhân vật then chốt đưa mệnh lý và Đông y truyền thống vào hệ thống tri thức hiện đại.
      </p>
      <p style={{ fontSize: '11px', color: muted, fontStyle: 'italic', marginTop: '12px' }}>
        Mọi luận giải trên nền tảng này được biên soạn dựa trên giáo trình công khai “Thiên Kỷ” của Nghê sư, bản đời Minh của “Tử Vi Đẩu Số Toàn Thư” (紫微斗数全书)
        và các cổ thư phái Tam Hợp truyền thống, chỉ mang tính tham khảo về văn hóa và phát triển bản thân. Bản thân Nghê sư không có bất kỳ liên hệ thương mại nào với nền tảng này.
      </p>
    </>
  );
}
