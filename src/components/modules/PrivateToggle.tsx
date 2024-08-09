import styles from "@/styles/components/modules/PrivateToggle.module.css";
import Toggle from "@/components/elements/Toggle";
import { LABEL } from "@/constants/ButtonConst";

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
