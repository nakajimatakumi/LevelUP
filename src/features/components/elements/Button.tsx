import styles from "@/features/styles/elements/Button.module.css";

/**
 * ボタンコンポーネント
 * @param label ボタンのラベル
 */

type props = {
  label: string;
};

export default function Button({ label }: props) {
  return <button className={styles.button}>{label}</button>;
}
