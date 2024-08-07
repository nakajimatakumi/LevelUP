import styles from "@/styles/components/elements/Button.module.css";
import Image from "next/image";

type Props = {
  label?: string;
  iconPath?: string;
};

/**
 * ボタンコンポーネント
 * @param label ボタンのラベル
 */
export default function Button({ label, iconPath }: Props) {
  return iconPath ? (
    <button className={styles.root}>
      <Image src={iconPath} alt="" width={24} height={24} />
    </button>
  ) : (
    <button className={styles.button}>{label}</button>
  );
}
