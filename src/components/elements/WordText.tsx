import styles from "@/styles/components/elements/WordText.module.css";
import clsx from "clsx";

type Props = {
  text: string;
  size: "extraSmall" | "small" | "medium" | "large" | "extraLarge" | "none";
  length:
    | "extraShort"
    | "short"
    | "medium"
    | "long"
    | "extraLong"
    | "fit"
    | "none";
  className?: string;
};

/**
 * 単語を表示するコンポーネント
 * @param text テキスト
 * @param size サイズ
 * @param length 長さ
 * @param className クラス名
 */
export default function WordText({ text, size, length, className }: Props) {
  return (
    <p className={clsx(styles.text, styles[size], styles[length], className)}>
      {text}
    </p>
  );
}
