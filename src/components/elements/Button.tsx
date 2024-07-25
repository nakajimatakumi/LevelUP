import styles from "@/styles/components/elements/Button.module.css";

type Props = {
  label: string;
  action?: () => void;
};

/**
 * ボタンコンポーネント
 * @param label ボタンのラベル
 */
export default function Button({ label, action }: Props) {
  return (
    <button className={styles.button} formAction={action}>
      {label}
    </button>
  );
}
