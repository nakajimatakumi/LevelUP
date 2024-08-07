/**
 * 背景色から文字色を作成する関数
 * @param hex 背景色
 * @return 文字色
 */
export default function convertColor(hex: string): string {
  const amount: number = -85;
  const clamp = (value: number): number => Math.max(0, Math.min(255, value));
  const num: number = parseInt(hex.slice(1), 16);
  const r: number = clamp((num >> 16) + amount);
  const g: number = clamp(((num >> 8) & 0x00ff) + amount);
  const b: number = clamp((num & 0x0000ff) + amount);

  return `#${((1 << 24) | (r << 16) | (g << 8) | b)
    .toString(16)
    .slice(1)
    .toUpperCase()}`;
}
