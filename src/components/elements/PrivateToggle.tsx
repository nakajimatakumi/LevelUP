import styles from "@/styles/components/elements/PrivateToggle.module.css";
import Toggle from "@/components/elements/Toggle";
import { LABEL } from "@/constants/ButtonConst";
import clsx from "clsx";

type Props = {
  size?: "small" | "medium" | "large";
  onChange?: (value: boolean) => void;
  value?: boolean;
};
/**
 * 公開設定トグル
 */
export default function PrivateToggle({
  size,
  onChange = () => {},
  value = false,
}: Props) {
  return (
    <div className={clsx(styles.root, styles[size ?? "medium"])}>
      <Toggle onChange={onChange} checked={value} />
      <p className={styles.label}>{LABEL.PRIVATE}</p>
    </div>
  );
}
