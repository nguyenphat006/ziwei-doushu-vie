<div align="center">

# Tử Vi Đẩu Số · Bộ máy lập lá số mã nguồn mở (bản tiếng Việt)

### Thuật toán là trí tuệ truyền thống chung, không nên bị khóa sau bức tường.

[中文](./README.md) · [English](./README.en.md) · **Tiếng Việt**

</div>

Đây là bản Việt hóa của dự án [Renhuai123/ziwei-doushu](https://github.com/Renhuai123/ziwei-doushu). Hệ thống lập lá số **Tử Vi Đẩu Số** dựa trên giáo trình 《天纪》 (*Thiên Kỷ*) của **Nghê Hải Hạ** (倪海厦), gồm thuật toán an sao đầy đủ, Tứ Hóa, kho cách cục, nguyên văn cổ thư và giao diện demo.

Bản này bổ sung:

- **Giao diện song ngữ Việt / Trung**: mặc định tiếng Việt, đổi ngôn ngữ bằng nút ở góc dưới bên trái (lựa chọn được lưu trong cookie).
- **Tên sao, cung, can chi theo Hán-Việt**: Tử Vi, Thiên Cơ, Mệnh, Phu Thê, Hóa Lộc/Quyền/Khoa/Kỵ, Miếu/Vượng/Đắc/Lợi/Bình/Hãm…
- **Nội dung đã dịch**: cách cục, bách khoa 14 chính tinh × 12 chủ đề, cổ thư (nguyên văn kèm bản dịch nghĩa), điều khoản và chính sách.
- **Nơi sinh tại Việt Nam**: 63 tỉnh/thành (danh sách trước sáp nhập 2025) để hiệu chỉnh giờ mặt trời thật theo múi giờ UTC+7.

## Cài đặt và chạy

Cần Node.js 20 trở lên.

```bash
npm install
npm run dev        # mở http://localhost:3000
```

Kiểm tra:

```bash
npm run typecheck  # kiểm tra kiểu TypeScript
npm test           # các bài test hồi quy của bộ máy lập lá số
```

**Không cần API key để lập lá số.** Lá số được tính ngay trên trình duyệt.

### Bật AI luận giải (Gemini miễn phí)

1. Lấy API key miễn phí tại https://aistudio.google.com/apikey
2. Tạo file `.env.local` (đã nằm trong .gitignore) với nội dung:
   ```
   GEMINI_API_KEY=key-của-bạn
   ```
3. Khởi động lại `npm run dev`, lập lá số rồi bấm các chủ đề luận giải hoặc đặt câu hỏi.

Mặc định dùng `gemini-3.5-flash-lite` (gói miễn phí khoảng 500 lượt/ngày, có giới hạn theo phút). Đổi model bằng `GEMINI_MODEL`. Cũng dùng được DeepSeek (`DEEPSEEK_API_KEY`) hoặc dịch vụ tương thích OpenAI bất kỳ (`AI_BASE_URL`, `AI_API_KEY`, `AI_MODEL`); xem `.env.example`.

Lưu ý: gói miễn phí của Google có thể dùng dữ liệu gửi lên để cải thiện sản phẩm, nên đừng nhập thông tin nhạy cảm.

## Các trang

| Đường dẫn | Chức năng |
|---|---|
| `/chart` | Lập lá số: 12 cung, chính tinh, phụ tinh, độ sáng, Tứ Hóa, đại hạn, lưu niên, cách cục |
| `/heming` | Hợp lá số hai người (lập lá số được; phần AI phân tích cần tự viết API) |
| `/knowledge` | Bách khoa 14 chính tinh × 12 chủ đề |
| `/library` | Thư viện cổ thư: Cốt Tủy Phú, Tử Vi Đẩu Số Toàn Tập, Tử Vi Đẩu Số Toàn Thư; có tìm kiếm |

## Lưu ý khi dùng ở Việt Nam

- **Giờ mặt trời thật**: chọn nơi sinh để hệ thống hiệu chỉnh theo kinh độ (kinh tuyến chuẩn 105°E). Không chọn thì tính theo giờ đồng hồ.
- **Múi giờ lịch sử**: miền Nam Việt Nam từng dùng UTC+8 (khoảng 1959–1975). Người sinh ở miền Nam giai đoạn này nên đổi giờ đồng hồ về UTC+7 (trừ 1 giờ) trước khi lập lá số. Hệ thống **không tự động** điều chỉnh việc này.
- **Âm lịch**: bộ máy dùng lịch âm Trung Quốc (múi giờ UTC+8). Lịch âm Việt Nam (UTC+7) đôi khi lệch một ngày ở đầu tháng hoặc lệch tháng nhuận, ví dụ Tết Mậu Thân 1968. Trường hợp sinh sát ranh giới tháng nên đối chiếu thêm.

## Kiến trúc đa ngôn ngữ

| File | Vai trò |
|---|---|
| `lib/i18n/config.ts` | Danh sách ngôn ngữ, ngôn ngữ mặc định, tên cookie |
| `lib/i18n/terms.ts` | Từ điển thuật ngữ Tử Vi Trung → Hán-Việt, hàm `localizeTerm()` |
| `lib/i18n/messages/*.ts` | Từ điển câu chữ giao diện, dùng nguyên văn tiếng Trung làm khóa |
| `lib/i18n/content/` | Bản dịch nội dung dài: cách cục, bách khoa, cổ thư, nhân vật nổi tiếng… |
| `components/I18nProvider.tsx` | Hook `useI18n()` cho client component, gồm `t()` và `term()` |
| `lib/i18n/server.ts` | `getI18n()` cho server component và `generateMetadata` |

Bộ máy lập lá số (`lib/ziwei/`) vẫn dùng tên tiếng Trung để tính toán và so sánh. Việc dịch chỉ diễn ra ở lớp hiển thị, nên kết quả an sao giữ nguyên như bản gốc.

Thêm một câu mới vào giao diện:

```tsx
const { t, term } = useI18n();
<span>{t('共 {n} 条', { n })}</span>   // thêm '共 {n} 条': 'Tổng cộng {n} mục' vào messages/*.ts
<span>{term(star.name)}</span>          // '紫微' → 'Tử Vi'
```

Nếu thiếu bản dịch, giao diện hiển thị tiếng Trung gốc. Ở môi trường dev, console sẽ in cảnh báo `[i18n] missing vi`.

## Không có trong mã nguồn mở

Kho luận đoán (`lib/ziwei/db-analysis.ts` chỉ là placeholder), prompt AI gốc của bản thương mại, API `/api/heming` (AI phân tích hợp lá số) và hệ thống người dùng đều không có trong bản mã nguồn mở. Bản này đã tự viết `/api/interpret` (`app/api/interpret/route.ts`, prompt ở `lib/ziwei/chart-prompt.ts`) để luận giải một lá số.

## Giấy phép

- Code: [MIT](./LICENSE)
- Dataset: [CC BY 4.0](./DATASET-LICENSE)
- Cổ thư: phạm vi công cộng
- Nguyên văn lời Nghê Hải Hạ (`docs/tianji-ziwei/`): **CC BY-NC-SA 4.0, không dùng cho mục đích thương mại**

Xem chi tiết ở [README gốc (tiếng Trung)](./README.md).
