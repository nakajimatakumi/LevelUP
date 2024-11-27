import styles from "@/components/elements/Card/Card.module.css";

type Props = {
  children: React.ReactNode;
  padding?: number;
};

/**
 * カードコンポーネント
 * @param children 子要素
 * @param padding パディング
 */
export default function Card({ children, padding = 0 }: Props) {
  return (
    <div
      className={styles.root}
      style={{ ["--padding" as string]: `${padding}px` }}
    >
      {children}
    </div>
  );
}
