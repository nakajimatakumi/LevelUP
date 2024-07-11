import styles from "@/features/styles/elements/Button.module.css";

type props = {
  label: string;
};

/**
 * ボタンコンポーネント
 * @param label ボタンのラベル
 */
export default function Button({ label }: props) {
  return <button className={styles.button}>{label}</button>;
}
