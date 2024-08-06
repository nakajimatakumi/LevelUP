import styles from "@/styles/components/elements/PrivateToggle.module.css";
import Toggle from "./Toggle";
import { LABEL } from "@/constants/ButtonLabelConst";

/**
 * 公開設定トグル
 */
export default function PrivateToggle() {
  return (
    <div className={styles.root}>
      <Toggle />
      <p className={styles.label}>{LABEL.PRIVATE}</p>
    </div>
  );
}
