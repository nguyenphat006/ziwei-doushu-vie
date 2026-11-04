import type { ProvinceInfo } from './cities';

/**
 * 越南出生地（真太阳时校正用）—— 63 个省 / 中央直辖市（2025 年合并前的传统区划）。
 *
 * · 每个省的第一项是省会（tỉnh lỵ）或直辖市市中心，经度精确到约 0.01°；
 *   少数经度跨度大、人口多的省另列几座常见城市（如 Kiên Giang 的 Phú Quốc 与省会 Rạch Giá 相差约 1.1°≈4.5 分钟）。
 * · 越南现行标准时间 UTC+7（ICT），钟表中央经线 105°E，即 utcOffsetMinutes = 420。
 *
 * ⚠ 历史时区注意（只作提示，不自动修正——与 true-solar-time.ts 一致，不处理历史时区）：
 *   按 tz 数据库 Asia/Ho_Chi_Minh 的记录，越南并非一直使用 UTC+7：
 *   · 1942-12-31 ～ 1945-03-14 全境 UTC+8；1945-03-14 ～ 1945-09-02 UTC+9（日占时期）；
 *   · 南方（法属 / 越南共和国）1947-04-01 ～ 1955-07-01 UTC+8；
 *   · 南越（越南共和国）1959-12-31 ～ 1975-06-13 使用 UTC+8（西贡时间）。
 *   上述时段在南方出生者，若填写的是当年的钟表时间，应先自行减 1 小时换成 UTC+7 再填写，
 *   否则真太阳时会偏快 60 分钟、时辰可能错一格。北方（越南民主共和国）1945-09 之后一直是 UTC+7。
 */
export const VN_UTC_OFFSET_MINUTES = 420;

export const VN_PROVINCES: ProvinceInfo[] = [
  // ─── 中央直辖市 ─────────────────────────────────────────
  { name: 'Hà Nội', cities: [
    { name: 'Hà Nội', longitude: 105.85 },
    { name: 'Sơn Tây', longitude: 105.51 },
  ] },
  { name: 'TP. Hồ Chí Minh', cities: [
    { name: 'TP. Hồ Chí Minh', longitude: 106.70 },
    { name: 'Củ Chi', longitude: 106.49 },
    { name: 'Cần Giờ', longitude: 106.95 },
  ] },
  { name: 'Hải Phòng', cities: [{ name: 'Hải Phòng', longitude: 106.68 }] },
  { name: 'Đà Nẵng', cities: [{ name: 'Đà Nẵng', longitude: 108.22 }] },
  { name: 'Cần Thơ', cities: [{ name: 'Cần Thơ', longitude: 105.78 }] },

  // ─── 各省（按越南字母序） ───────────────────────────────
  { name: 'An Giang', cities: [
    { name: 'Long Xuyên', longitude: 105.44 },
    { name: 'Châu Đốc', longitude: 105.12 },
  ] },
  { name: 'Bà Rịa – Vũng Tàu', cities: [
    { name: 'Bà Rịa', longitude: 107.17 },
    { name: 'Vũng Tàu', longitude: 107.08 },
  ] },
  { name: 'Bắc Giang', cities: [{ name: 'Bắc Giang', longitude: 106.19 }] },
  { name: 'Bắc Kạn', cities: [{ name: 'Bắc Kạn', longitude: 105.83 }] },
  { name: 'Bạc Liêu', cities: [{ name: 'Bạc Liêu', longitude: 105.72 }] },
  { name: 'Bắc Ninh', cities: [{ name: 'Bắc Ninh', longitude: 106.07 }] },
  { name: 'Bến Tre', cities: [{ name: 'Bến Tre', longitude: 106.38 }] },
  { name: 'Bình Định', cities: [{ name: 'Quy Nhơn', longitude: 109.22 }] },
  { name: 'Bình Dương', cities: [{ name: 'Thủ Dầu Một', longitude: 106.65 }] },
  { name: 'Bình Phước', cities: [{ name: 'Đồng Xoài', longitude: 106.90 }] },
  { name: 'Bình Thuận', cities: [{ name: 'Phan Thiết', longitude: 108.10 }] },
  { name: 'Cà Mau', cities: [{ name: 'Cà Mau', longitude: 105.15 }] },
  { name: 'Cao Bằng', cities: [{ name: 'Cao Bằng', longitude: 106.26 }] },
  { name: 'Đắk Lắk', cities: [{ name: 'Buôn Ma Thuột', longitude: 108.04 }] },
  { name: 'Đắk Nông', cities: [{ name: 'Gia Nghĩa', longitude: 107.69 }] },
  { name: 'Điện Biên', cities: [{ name: 'Điện Biên Phủ', longitude: 103.02 }] },
  { name: 'Đồng Nai', cities: [{ name: 'Biên Hòa', longitude: 106.82 }] },
  { name: 'Đồng Tháp', cities: [
    { name: 'Cao Lãnh', longitude: 105.63 },
    { name: 'Sa Đéc', longitude: 105.76 },
  ] },
  { name: 'Gia Lai', cities: [{ name: 'Pleiku', longitude: 108.00 }] },
  { name: 'Hà Giang', cities: [{ name: 'Hà Giang', longitude: 104.98 }] },
  { name: 'Hà Nam', cities: [{ name: 'Phủ Lý', longitude: 105.91 }] },
  { name: 'Hà Tĩnh', cities: [{ name: 'Hà Tĩnh', longitude: 105.90 }] },
  { name: 'Hải Dương', cities: [{ name: 'Hải Dương', longitude: 106.33 }] },
  { name: 'Hậu Giang', cities: [{ name: 'Vị Thanh', longitude: 105.47 }] },
  { name: 'Hòa Bình', cities: [{ name: 'Hòa Bình', longitude: 105.34 }] },
  { name: 'Hưng Yên', cities: [{ name: 'Hưng Yên', longitude: 106.05 }] },
  { name: 'Khánh Hòa', cities: [
    { name: 'Nha Trang', longitude: 109.19 },
    { name: 'Cam Ranh', longitude: 109.16 },
  ] },
  { name: 'Kiên Giang', cities: [
    { name: 'Rạch Giá', longitude: 105.08 },
    { name: 'Phú Quốc', longitude: 103.96 },
    { name: 'Hà Tiên', longitude: 104.49 },
  ] },
  { name: 'Kon Tum', cities: [{ name: 'Kon Tum', longitude: 108.00 }] },
  { name: 'Lai Châu', cities: [{ name: 'Lai Châu', longitude: 103.46 }] },
  { name: 'Lâm Đồng', cities: [
    { name: 'Đà Lạt', longitude: 108.44 },
    { name: 'Bảo Lộc', longitude: 107.81 },
  ] },
  { name: 'Lạng Sơn', cities: [{ name: 'Lạng Sơn', longitude: 106.76 }] },
  { name: 'Lào Cai', cities: [
    { name: 'Lào Cai', longitude: 103.97 },
    { name: 'Sa Pa', longitude: 103.84 },
  ] },
  { name: 'Long An', cities: [{ name: 'Tân An', longitude: 106.41 }] },
  { name: 'Nam Định', cities: [{ name: 'Nam Định', longitude: 106.17 }] },
  { name: 'Nghệ An', cities: [{ name: 'Vinh', longitude: 105.69 }] },
  { name: 'Ninh Bình', cities: [{ name: 'Ninh Bình', longitude: 105.97 }] },
  { name: 'Ninh Thuận', cities: [{ name: 'Phan Rang – Tháp Chàm', longitude: 108.99 }] },
  { name: 'Phú Thọ', cities: [{ name: 'Việt Trì', longitude: 105.40 }] },
  { name: 'Phú Yên', cities: [{ name: 'Tuy Hòa', longitude: 109.30 }] },
  { name: 'Quảng Bình', cities: [{ name: 'Đồng Hới', longitude: 106.62 }] },
  { name: 'Quảng Nam', cities: [
    { name: 'Tam Kỳ', longitude: 108.48 },
    { name: 'Hội An', longitude: 108.33 },
  ] },
  { name: 'Quảng Ngãi', cities: [{ name: 'Quảng Ngãi', longitude: 108.80 }] },
  { name: 'Quảng Ninh', cities: [
    { name: 'Hạ Long', longitude: 107.08 },
    { name: 'Móng Cái', longitude: 107.97 },
    { name: 'Cẩm Phả', longitude: 107.29 },
    { name: 'Uông Bí', longitude: 106.78 },
  ] },
  { name: 'Quảng Trị', cities: [{ name: 'Đông Hà', longitude: 107.10 }] },
  { name: 'Sóc Trăng', cities: [{ name: 'Sóc Trăng', longitude: 105.97 }] },
  { name: 'Sơn La', cities: [{ name: 'Sơn La', longitude: 103.91 }] },
  { name: 'Tây Ninh', cities: [{ name: 'Tây Ninh', longitude: 106.10 }] },
  { name: 'Thái Bình', cities: [{ name: 'Thái Bình', longitude: 106.34 }] },
  { name: 'Thái Nguyên', cities: [{ name: 'Thái Nguyên', longitude: 105.84 }] },
  { name: 'Thanh Hóa', cities: [{ name: 'Thanh Hóa', longitude: 105.78 }] },
  { name: 'Thừa Thiên Huế', cities: [{ name: 'Huế', longitude: 107.59 }] },
  { name: 'Tiền Giang', cities: [{ name: 'Mỹ Tho', longitude: 106.36 }] },
  { name: 'Trà Vinh', cities: [{ name: 'Trà Vinh', longitude: 106.34 }] },
  { name: 'Tuyên Quang', cities: [{ name: 'Tuyên Quang', longitude: 105.22 }] },
  { name: 'Vĩnh Long', cities: [{ name: 'Vĩnh Long', longitude: 105.97 }] },
  { name: 'Vĩnh Phúc', cities: [{ name: 'Vĩnh Yên', longitude: 105.60 }] },
  { name: 'Yên Bái', cities: [{ name: 'Yên Bái', longitude: 104.87 }] },
];
