import styles from "@/styles/components/elements/Toggle.module.css";
import * as Switch from "@radix-ui/react-switch";

/**
 * トグル
 */
export default function Toggle() {
  return (
    <Switch.Root className={styles.switchRoot}>
      <Switch.Thumb className={styles.switchThumb} />
    </Switch.Root>
  );
}
