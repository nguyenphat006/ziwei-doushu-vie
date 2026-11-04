/**
 * 隐私政策 / 服务条款 的越南语正文（中文原文仍保留在 app/privacy、app/terms 页面内）
 */

const h2 = { fontSize: 18, marginTop: 32, marginBottom: 12 } as const;
const ul = { paddingLeft: 24 } as const;

export function PrivacyBodyVi() {
  return (
    <>
      <h2 style={h2}>1. Thông tin chúng tôi thu thập</h2>
      <p>Để cung cấp dịch vụ lập và luận giải lá số Tử Vi, chúng tôi có thể thu thập các thông tin sau:</p>
      <ul style={ul}>
        <li><strong>Thông tin cần thiết để lập lá số</strong>: họ tên (không bắt buộc), ngày tháng năm sinh dương lịch, giờ sinh, giới tính, kinh độ nơi sinh</li>
        <li><strong>Thông tin tài khoản (sau khi đăng ký)</strong>: số điện thoại (dùng để xác thực qua SMS và cho dịch vụ hội viên)</li>
        <li><strong>Thông tin tương tác</strong>: lượt nhấp, lượt xem trên trang và lịch sử lá số của bạn</li>
        <li><strong>Thông tin phản hồi</strong>: đánh giá &quot;đúng / không đúng&quot; và phản hồi bằng văn bản của bạn đối với nội dung luận giải</li>
        <li><strong>Thông tin thanh toán</strong>: khi mua gói hội viên hoặc dịch vụ lẻ, giao dịch được xử lý qua bên thanh toán thứ ba (Alipay / WeChat Pay); nền tảng không lưu trữ số thẻ đầy đủ hay mật khẩu</li>
      </ul>

      <h2 style={h2}>2. Cách chúng tôi sử dụng thông tin</h2>
      <ul style={ul}>
        <li>Thông tin lá số chỉ dùng cho lần luận giải hiện tại và lịch sử lá số trong tài khoản của bạn</li>
        <li>Số điện thoại dùng để đăng ký, đăng nhập và thông báo đơn hàng</li>
        <li>Thông tin phản hồi dùng để liên tục cải thiện chất lượng nội dung mệnh lý (phân tích tổng hợp sau khi đã ẩn danh)</li>
        <li>Dữ liệu tổng hợp có thể được dùng cho nghiên cứu ngành và tối ưu nền tảng</li>
      </ul>

      <h2 style={h2}>3. Chia sẻ thông tin và bên thứ ba</h2>
      <p>Ngoài các trường hợp dưới đây, chúng tôi không chia sẻ thông tin cá nhân của bạn cho bên thứ ba:</p>
      <ul style={ul}>
        <li>Nhà cung cấp dịch vụ thanh toán (Alipay / WeChat Pay): xử lý thanh toán đơn hàng</li>
        <li>Nhà cung cấp dịch vụ SMS (như Alibaba Cloud SMS): gửi mã xác thực</li>
        <li>Nhà cung cấp dịch vụ đám mây (như Vercel / Cloudflare / Alibaba Cloud): hạ tầng kỹ thuật</li>
        <li>Dịch vụ luận giải AI (như Anthropic Claude): xử lý các cuộc hội thoại &quot;hỏi tự do&quot; của bạn (đã được ẩn danh)</li>
        <li>Yêu cầu hợp pháp của cơ quan tư pháp hoặc cơ quan nhà nước theo quy định pháp luật</li>
      </ul>

      <h2 style={h2}>4. Bảo mật thông tin</h2>
      <p>Chúng tôi áp dụng các biện pháp kỹ thuật và quản lý phổ biến trong ngành để bảo vệ thông tin của bạn (mã hóa truyền tải HTTPS, mã hóa lưu trữ cơ sở dữ liệu, kiểm soát quyền truy cập…). Tuy nhiên, xin lưu ý rằng việc truyền dữ liệu qua Internet không thể đảm bảo an toàn 100%.</p>

      <h2 style={h2}>5. Quyền của bạn</h2>
      <ul style={ul}>
        <li><strong>Tra cứu</strong>: có thể xem toàn bộ lịch sử lá số và đơn hàng tại trung tâm tài khoản</li>
        <li><strong>Xóa</strong>: liên hệ bộ phận hỗ trợ để xóa lá số cụ thể trong tài khoản / hủy tài khoản</li>
        <li><strong>Xuất dữ liệu</strong>: có thể yêu cầu xuất toàn bộ dữ liệu cá nhân của bạn</li>
      </ul>

      <h2 style={h2}>6. Cookie và lưu trữ cục bộ</h2>
      <p>Trang web sử dụng cookie / localStorage để: lưu tùy chọn giao diện tối/sáng, ngôn ngữ hiển thị, lịch sử lá số gần đây và trạng thái đăng nhập hội viên. Bạn có thể tắt trong cài đặt trình duyệt, nhưng một số chức năng có thể bị ảnh hưởng.</p>

      <h2 style={h2}>7. Người chưa thành niên</h2>
      <p>Nội dung mệnh lý của nền tảng dành cho người dùng từ 18 tuổi trở lên. Người chưa thành niên vui lòng sử dụng khi có sự đồng ý của người giám hộ và không được dùng nội dung luận giải để đưa ra các quyết định quan trọng trong đời.</p>

      <h2 style={h2}>8. Thay đổi chính sách</h2>
      <p>Chính sách này có thể được cập nhật không định kỳ. Các thay đổi quan trọng sẽ được thông báo một cách rõ ràng. Việc tiếp tục sử dụng đồng nghĩa với việc bạn đồng ý với phiên bản đã cập nhật.</p>
    </>
  );
}

export function TermsBodyVi() {
  return (
    <>
      <h2 style={h2}>1. Tổng quan dịch vụ</h2>
      <p>Lá số Tử Vi (sau đây gọi là &quot;nền tảng&quot;) cung cấp dịch vụ lập và luận giải lá số dựa trên hệ thống Tử Vi Đẩu Số trong bộ 《Thiên Kỷ》 (天纪) của Nghê Hải Hạ. Mọi nội dung mệnh lý trên nền tảng chỉ mang tính tham khảo, <strong>không cấu thành bất kỳ lời khuyên y tế, đầu tư, pháp lý, tư vấn tâm lý hay quyết định quan trọng nào trong đời</strong>.</p>

      <h2 style={h2}>2. Quy tắc hành vi của người dùng</h2>
      <p>Khi sử dụng nền tảng, bạn đồng ý:</p>
      <ul style={ul}>
        <li>Chỉ sử dụng nền tảng cho mục đích hợp pháp, tham khảo cá nhân</li>
        <li>Không phát tán nội dung của nền tảng để bán, đăng lại hoặc công bố công khai</li>
        <li>Không thực hiện hành vi gây cản trở hoạt động bình thường của nền tảng</li>
        <li>Thông tin ngày giờ sinh cung cấp phải chân thực, chính xác; nền tảng không chịu trách nhiệm về sai lệch luận giải do thông tin sai</li>
      </ul>

      <h2 style={h2}>3. Sở hữu trí tuệ và điều khoản cấm · Chống thu thập dữ liệu và huấn luyện mô hình</h2>
      <p style={{ background: 'rgba(168,50,40,0.06)', border: '1px solid rgba(168,50,40,0.2)', padding: 16, borderRadius: 8 }}>
        <strong>Toàn bộ nội dung mệnh lý, kho kiến thức (bao gồm toàn bộ văn bản luận giải 14 chính tinh × 12 cung × nam nữ × Tứ Hóa × đại hạn lưu niên), thiết kế giao diện, phương án tích hợp thuật toán và kho ví dụ của nền tảng đều là sáng tạo nguyên gốc hoặc được biên soạn hợp pháp.</strong><br/><br/>
        Nghiêm cấm các hành vi sau; nền tảng bảo lưu quyền truy cứu trách nhiệm bồi thường dân sự và trách nhiệm hình sự đối với người vi phạm:<br/>
        ① Thu thập nội dung của nền tảng bằng bất kỳ phương tiện kỹ thuật nào như crawler, script tự động, gọi API hàng loạt;<br/>
        ② Sử dụng phần luận giải lá số, văn bản, dữ liệu phản hồi API do nền tảng tạo ra <strong>để huấn luyện bất kỳ mô hình học máy nào</strong> (bao gồm nhưng không giới hạn ở mô hình ngôn ngữ lớn, mô hình sinh nội dung mệnh lý, mô hình sinh văn bản…);<br/>
        ③ Bán lại hoặc đăng tải nội dung do nền tảng tạo ra lên trang web, ứng dụng hay tài khoản mạng xã hội khác;<br/>
        ④ Dịch ngược, sao chép, chỉnh sửa mã nguồn front-end hoặc back-end của nền tảng để cung cấp dịch vụ tương tự dưới danh nghĩa &quot;tự vận hành&quot;.<br/><br/>
        Văn bản đầu ra của nền tảng có gắn dấu vết (watermark) để truy xuất nguồn gốc; nội dung sao chép / huấn luyện trái phép có thể bị phát hiện và truy vết. Khi phát hiện vi phạm, nền tảng có quyền yêu cầu <strong>bồi thường 1 triệu Nhân dân tệ cho mỗi trường hợp vi phạm</strong>, đồng thời bảo lưu quyền khởi kiện ra tòa án và phối hợp điều tra với cơ quan công an.
      </p>

      <h2 style={h2}>4. Tuyên bố miễn trừ trách nhiệm</h2>
      <p>Nội dung mệnh lý của nền tảng được biên soạn dựa trên kiến thức Tử Vi Đẩu Số truyền thống và hệ thống của Nghê Hải Hạ, <strong>không đảm bảo chính xác 100%</strong>. Vận mệnh chịu ảnh hưởng chung của Tam tài Thiên, Địa, Nhân; nội dung của nền tảng chỉ là tài liệu tham khảo để hiểu bản thân, người dùng cần nhìn nhận một cách lý trí, không nên quá phụ thuộc vào bất kỳ nhận định mệnh lý đơn lẻ nào.</p>
      <p>Nền tảng không chịu trách nhiệm pháp lý đối với bất kỳ hậu quả nào phát sinh từ việc sử dụng nội dung của nền tảng (bao gồm nhưng không giới hạn ở quyết định sai lầm, ảnh hưởng tâm lý, thay đổi trong các mối quan hệ…).</p>

      <h2 style={h2}>5. Thay đổi và chấm dứt dịch vụ</h2>
      <p>Nền tảng bảo lưu quyền điều chỉnh, tạm ngừng hoặc chấm dứt một phần hay toàn bộ dịch vụ bất cứ lúc nào. Các thay đổi quan trọng sẽ được thông báo cho người dùng qua thông báo trên trang hoặc email.</p>

      <h2 style={h2}>6. Luật áp dụng và giải quyết tranh chấp</h2>
      <p>Điều khoản này áp dụng pháp luật nước Cộng hòa Nhân dân Trung Hoa. Khi phát sinh tranh chấp, hai bên cần thương lượng thiện chí; nếu thương lượng không thành, tranh chấp sẽ được đưa ra giải quyết tại Tòa án nhân dân có thẩm quyền nơi đơn vị vận hành nền tảng đặt trụ sở.</p>

      <h2 style={h2}>7. Thông tin liên hệ</h2>
      <p>Nếu có thắc mắc, vui lòng liên hệ qua WeChat / email hỗ trợ khách hàng được nền tảng công bố.</p>
    </>
  );
}
