import clsx from "clsx";
import styles from "@/components/elements/ListText/ListText.module.css";

type Props = {
  textList: string[];
  textStyle: "normal" | "positive" | "negative";
  fontSize: number;
  lineHeight: number;
};

/**
 * リストテキスト
 * @param textList テキストリスト
 * @param textStyle テキストスタイル
 * @param fontSize フォントサイズ
 * @param lineHeight 行高さ
 */
export default function ListText({
  textList,
  textStyle,
  fontSize,
  lineHeight,
}: Props) {
  const className = clsx(styles.root, {
    [styles[textStyle as keyof typeof styles]]: textStyle,
  });
  return (
    <ul
      className={className}
      style={{
        ["--font-size" as string]: `${fontSize}px`,
        ["--line-height" as string]: lineHeight,
      }}
    >
      {textList.map((text, index) => (
        <li key={index} className={styles.listItem}>
          {text}
        </li>
      ))}
    </ul>
  );
}
