'use client';

/**
 * 命盘分享卡 — 真正的 12 宫命盘缩略图
 *
 * 设计：左侧 12 宫缩略命盘 + 右侧关键信息
 * 浏览器原生中文字体，不依赖 SSR
 */

import type { ZiweiChart } from '@/lib/ziwei/types';
import { SITE_HOST } from '@/lib/site';
import { useI18n } from '@/components/I18nProvider';

// 越南语带声调符号（ắ ệ ữ…），优先用拉丁字体完整覆盖的系统字体，再回退中文字体
const FONT_ZH = '"PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Microsoft JhengHei", sans-serif';
const FONT_VI = '"Segoe UI", "Helvetica Neue", Roboto, Arial, "Noto Sans", ' + FONT_ZH;

/** 命宫主星大字：越南语星名较长（如「Thiên Đồng · Thiên Lương」），按长度缩字号 */
function mingStarFontSize(text: string, vi: boolean): string {
  if (!vi) return '52px';
  const len = text.length;
  if (len <= 6) return '44px';
  if (len <= 10) return '34px';
  if (len <= 16) return '28px';
  return '24px';
}

const BRANCH_NAMES = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

// 紫微斗数 12 宫地支布局（按"地支盘"标准排列，固定）
// 寅卯辰巳 → 上行
// 丑    午
// 子    未
// 亥戌酉申 → 下行
const ZHIWEI_LAYOUT: Array<{ branch: number; row: number; col: number }> = [
  { branch: 2,  row: 0, col: 0 }, // 寅
  { branch: 3,  row: 0, col: 1 }, // 卯
  { branch: 4,  row: 0, col: 2 }, // 辰
  { branch: 5,  row: 0, col: 3 }, // 巳
  { branch: 1,  row: 1, col: 0 }, // 丑
  { branch: 6,  row: 1, col: 3 }, // 午
  { branch: 0,  row: 2, col: 0 }, // 子
  { branch: 7,  row: 2, col: 3 }, // 未
  { branch: 11, row: 3, col: 0 }, // 亥
  { branch: 10, row: 3, col: 1 }, // 戌
  { branch: 9,  row: 3, col: 2 }, // 酉
  { branch: 8,  row: 3, col: 3 }, // 申
];

interface ShareCardProps {
  chart: ZiweiChart;
  birth: { year: string; month: string; day: string; hour: string; minute: string; gender: 'male' | 'female'; city?: string };
  highlight?: string;
}

export default function ShareCardCanvas({ chart, birth, highlight }: ShareCardProps) {
  const { t, term, locale } = useI18n();
  const vi = locale === 'vi';
  const mingPalace = chart.palaces.find(p => p.branch === chart.mingGongBranch);
  const mingMajorStars = mingPalace?.stars.filter(s => s.type === 'major').map(s => term(s.name)) ?? [];
  const mingStarStr = mingMajorStars.length > 0 ? mingMajorStars.join(vi ? ' · ' : '·') : t('空宫');
  const mingBranchName = term(BRANCH_NAMES[chart.mingGongBranch] || '');
  const shenBranchName = term(BRANCH_NAMES[chart.shenGongBranch] || '');
  const dx = chart.daXians?.[chart.currentDaXianIndex];

  // 把每个宫位组织成 12 个格子，按布局画
  const cells = ZHIWEI_LAYOUT.map(slot => {
    const palace = chart.palaces.find(p => p.branch === slot.branch);
    const majors = palace?.stars.filter(s => s.type === 'major') ?? [];
    const isMing = palace?.branch === chart.mingGongBranch;
    const isShen = palace?.branch === chart.shenGongBranch;
    return { ...slot, palace, majors, isMing, isShen };
  });

  // 卡片尺寸：680x420（适合微信缩略 + 朋友圈）
  return (
    <div id="share-card" style={{
      width: '680px',
      height: '420px',
      background: 'linear-gradient(135deg, #fef9eb 0%, #f7e8c4 60%, #efd8a0 100%)',
      padding: '20px 28px',
      fontFamily: vi ? FONT_VI : FONT_ZH,
      position: 'relative',
      boxSizing: 'border-box',
      borderRadius: '14px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* 装饰光晕 */}
      <div style={{
        position: 'absolute', top: '-60px', left: '-60px',
        width: '180px', height: '180px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(184,146,42,0.18) 0%, transparent 70%)',
      }} />
      <div style={{
        position: 'absolute', bottom: '-50px', right: '-50px',
        width: '160px', height: '160px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(196,90,45,0.12) 0%, transparent 70%)',
      }} />

      {/* 顶部 */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '34px', height: '34px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #d4a948 0%, #b8922a 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white', fontSize: '15px', fontWeight: 700,
          }}>{vi ? 'TV' : '紫'}</div>
          <div>
            <div style={{ fontSize: '15px', color: '#3d2f10', fontWeight: 600, letterSpacing: vi ? '0.02em' : '0.12em', lineHeight: 1.2 }}>{t('紫微命盘')}</div>
            <div style={{ fontSize: '9px', color: '#a89b7c', letterSpacing: vi ? '0.08em' : '0.18em', marginTop: '2px' }}>{t('倪海厦正宗 · ZI WEI')}</div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <div style={{ fontSize: '10px', color: '#6b5d3f', letterSpacing: '0.05em' }}>
            {t('{y}年{m}月{d}日', { y: birth.year, m: birth.month, d: birth.day })} · {birth.hour.padStart(2,'0')}:{birth.minute.padStart(2,'0')}
            <span style={{ margin: '0 4px', color: '#b8922a' }}>·</span>
            {birth.gender === 'male' ? t('男命') : t('女命')}
            {birth.city && <><span style={{ margin: '0 4px', color: '#b8922a' }}>·</span>{birth.city}</>}
          </div>
          <div style={{ fontSize: '8px', color: '#b8922a', letterSpacing: '0.08em', marginTop: '2px' }}>
            {SITE_HOST}
          </div>
        </div>
      </div>

      {/* 主体：左 12 宫格子 + 右关键信息 */}
      <div style={{ display: 'flex', gap: '16px', flex: 1, position: 'relative', zIndex: 1, minHeight: 0 }}>
        {/* 左：12 宫缩略命盘 */}
        <div style={{
          width: '300px',
          height: '288px',
          background: 'rgba(255,255,255,0.5)',
          border: '1px solid rgba(184,146,42,0.3)',
          borderRadius: '8px',
          padding: '6px',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridTemplateRows: 'repeat(4, 1fr)',
          gap: '3px',
          position: 'relative',
        }}>
          {cells.map((cell, i) => {
            // 中央 4 个格子（row 1-2, col 1-2）合并为中心说明区
            if ((cell.row === 1 || cell.row === 2) && (cell.col === 1 || cell.col === 2)) return null;
            return (
              <div key={i} style={{
                gridRow: cell.row + 1,
                gridColumn: cell.col + 1,
                background: cell.isMing ? 'rgba(184,146,42,0.18)' : 'rgba(255,255,255,0.6)',
                border: cell.isMing
                  ? '1.5px solid #b8922a'
                  : '0.5px solid rgba(184,146,42,0.2)',
                borderRadius: '4px',
                padding: '4px 5px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* 宫名 + 地支 */}
                <div style={{
                  fontSize: vi ? '7px' : '8px',
                  color: cell.isMing ? '#8b6a14' : '#a89b7c',
                  letterSpacing: vi ? 0 : '0.05em',
                  ...(vi ? { whiteSpace: 'nowrap' as const } : {}),
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <span style={{ fontWeight: cell.isMing ? 700 : 400 }}>
                    {cell.palace?.name ? term(cell.palace.name) : ''}
                    {cell.isShen ? (vi ? '·Thân' : '·身') : ''}
                  </span>
                  <span style={{ fontSize: '7px', opacity: 0.7 }}>{term(BRANCH_NAMES[cell.branch])}</span>
                </div>
                {/* 主星 */}
                <div style={{
                  marginTop: '2px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1px',
                  flex: 1,
                  justifyContent: 'center',
                }}>
                  {cell.majors.length > 0 ? cell.majors.slice(0, 2).map((s, j) => (
                    <div key={j} style={{
                      fontSize: vi ? '9px' : '11px',
                      fontWeight: 600,
                      color: cell.isMing ? '#8b6a14' : '#3d2f10',
                      letterSpacing: vi ? 0 : '0.02em',
                      lineHeight: vi ? 1.25 : 1.1,
                      ...(vi ? { whiteSpace: 'nowrap' as const } : {}),
                    }}>
                      {term(s.name)}{s.siHua ? <span style={{ fontSize: vi ? '7px' : '8px', color: '#c45a2d', marginLeft: vi ? '2px' : '1px' }}>{term(s.siHua)}</span> : ''}
                    </div>
                  )) : (
                    <div style={{ fontSize: '9px', color: '#a89b7c', fontStyle: 'italic' }}>{t('空宫')}</div>
                  )}
                </div>
              </div>
            );
          })}

          {/* 中央说明区（占据 4 个格子）*/}
          <div style={{
            gridRow: '2 / 4',
            gridColumn: '2 / 4',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(184,146,42,0.06)',
            border: '0.5px dashed rgba(184,146,42,0.3)',
            borderRadius: '4px',
          }}>
            <div style={{ fontSize: '8px', color: '#a89b7c', letterSpacing: '0.2em', marginBottom: '4px' }}>ZI WEI</div>
            <div style={{ fontSize: vi ? '12px' : '14px', color: '#3d2f10', fontWeight: 600, letterSpacing: vi ? '0.02em' : '0.1em' }}>{t('紫微斗数')}</div>
            <div style={{ fontSize: '10px', color: '#6b5d3f', marginTop: '6px' }}>{t('命宫 · {b}', { b: mingBranchName })}</div>
            <div style={{ fontSize: '10px', color: '#6b5d3f' }}>{t('身宫 · {b}', { b: shenBranchName })}</div>
            <div style={{ fontSize: '10px', color: '#6b5d3f', marginTop: '4px', fontWeight: 600 }}>{term(chart.wuxingJuName)}</div>
          </div>
        </div>

        {/* 右：关键信息 */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          {/* 命宫主星 */}
          <div>
            <div style={{ fontSize: '10px', color: '#a89b7c', letterSpacing: vi ? '0.12em' : '0.25em', marginBottom: '2px' }}>{t('命 宫 · {b}', { b: mingBranchName })}</div>
            <div style={{
              fontSize: mingStarFontSize(mingStarStr, vi),
              fontWeight: 800,
              color: '#8b6a14',
              letterSpacing: vi ? 0 : '0.03em',
              lineHeight: vi ? 1.15 : 1,
              marginBottom: '12px',
            }}>{mingStarStr}</div>

            {/* 高亮 */}
            {highlight && (
              <div style={{
                fontSize: '12px',
                color: '#5b4c2e',
                fontWeight: 500,
                padding: '8px 10px',
                background: 'rgba(255,255,255,0.5)',
                borderLeft: '3px solid #b8922a',
                borderRadius: '4px',
                letterSpacing: vi ? 0 : '0.04em',
                marginBottom: '12px',
              }}>{highlight}</div>
            )}
          </div>

          {/* 当前大限 + slogan */}
          <div>
            {dx && (
              <div style={{
                fontSize: '11px',
                color: '#3d2f10',
                marginBottom: '10px',
                letterSpacing: '0.05em',
              }}>
                <span style={{ color: '#a89b7c' }}>{t('当前大限')} </span>
                <span style={{ fontWeight: 600 }}>{t('{start}–{end} 岁', { start: dx.startAge, end: dx.endAge })} · {term(dx.palaceName)}</span>
              </div>
            )}
            <div style={{
              padding: '10px 12px',
              background: 'linear-gradient(135deg, rgba(212,169,72,0.18) 0%, rgba(184,146,42,0.08) 100%)',
              border: '1px solid rgba(184,146,42,0.3)',
              borderRadius: '6px',
            }}>
              <div style={{ fontSize: '11px', color: '#3d2f10', fontWeight: 600, letterSpacing: vi ? 0 : '0.08em', lineHeight: 1.4 }}>
                {t('紫微为门 · 天地人为路')}
              </div>
              <div style={{ fontSize: '10px', color: '#8b6a14', fontWeight: 600, letterSpacing: vi ? 0 : '0.08em', lineHeight: 1.4, marginTop: '2px' }}>
                {t('倪海厦为师 · AI 答疑伴学')}
              </div>
              <div style={{ fontSize: '8px', color: '#a89b7c', letterSpacing: vi ? '0.05em' : '0.15em', marginTop: '4px' }}>
                {t('扫码起你的命盘 →')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** 截图工具：把上面的 div 转成 PNG dataURL */
export async function captureShareCard(): Promise<string | null> {
  try {
    const html2canvas = (await import('html2canvas')).default;
    const node = document.getElementById('share-card');
    if (!node) return null;
    const canvas = await html2canvas(node, {
      scale: 2,
      useCORS: true,
      backgroundColor: null,
      logging: false,
    });
    return canvas.toDataURL('image/png');
  } catch (e) {
    console.error('captureShareCard failed', e);
    return null;
  }
}

export function downloadDataURL(dataURL: string, filename: string) {
  const link = document.createElement('a');
  link.href = dataURL;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
