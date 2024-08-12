import styles from "@/styles/components/elements/ListText.module.css";
import clsx from "clsx";

type Props = {
  textList: string[];
  textStyle: "normal" | "positive" | "negative";
  lineClamp: number;
  fontSize: number;
  lineHeight: number;
};

export default function ListText({
  textList,
  textStyle,
  lineClamp,
  fontSize,
  lineHeight,
}: Props) {
  const className = clsx(styles.root, {
    [styles[textStyle as keyof typeof styles]]: textStyle,
  });
  return (
    <ul className={className}>
      {textList.map((text, index) => (
        <li
          key={index}
          className={styles.listItem}
          style={{
            ["--font-size" as string]: `${fontSize}px`,
            ["--line-height" as string]: lineHeight,
            ["--line-clamp" as string]: lineClamp,
          }}
        >
          {text}
        </li>
      ))}
    </ul>
  );
}
