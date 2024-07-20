import styles from "@/features/styles/elements/Button.module.css";

type Props = {
  label: string;
};

/**
 * ボタンコンポーネント
 * @param label ボタンのラベル
 */
export default function Button({ label }: Props) {
  return <button className={styles.button}>{label}</button>;
}
