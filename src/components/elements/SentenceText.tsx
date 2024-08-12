import styles from "@/styles/components/elements/SentenceText.module.css";

type Props = {
  text: string;
  lineClamp: number;
  lineHeight: number;
  fontSize: number;
};

/**
 * 文章を表示するコンポーネント
 * @param text - 表示する文章
 * @param lineClamp - 行数
 * @param lineHeight - 行高
 * @param fontSize - フォントサイズ
 */
export default function SentenceText({
  text,
  lineClamp,
  lineHeight,
  fontSize,
}: Props) {
  return (
    <p
      className={styles.root}
      style={{
        ["--line-clamp" as string]: lineClamp,
        ["--line-height" as string]: lineHeight,
        ["--font-size" as string]: `${fontSize}px`,
      }}
    >
      {text}
    </p>
  );
}
