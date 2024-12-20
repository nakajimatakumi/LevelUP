import clsx from "clsx";
import { BUTTON_LABEL } from "@/constants/LabelConst";
import { Toggle } from "@/components/";
import styles from "@/styles/components/modules/PrivateToggle.module.css";

type Props = {
  size?: "small" | "medium" | "large";
  onChange: (value: boolean) => void;
  value: boolean;
};
/**
 * 公開設定トグル
 * @param size サイズ
 * @param onChange 公開設定変更時の処理
 * @param value 公開設定の状態
 */
export default function PrivateToggle({ size, onChange, value }: Props) {
  return (
    <div className={clsx(styles.root, styles[size ?? "medium"])}>
      <Toggle onChange={onChange} checked={value} />
      <p className={styles.label}>{BUTTON_LABEL.PRIVATE}</p>
    </div>
  );
}
