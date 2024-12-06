import * as Switch from "@radix-ui/react-switch";
import styles from "@/components/elements/Toggle/Toggle.module.css";

type Props = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};
/**
 * トグル
 */
export default function Toggle({ checked, onChange }: Props) {
  return (
    <Switch.Root
      className={styles.switchRoot}
      checked={checked}
      onCheckedChange={onChange}
    >
      <Switch.Thumb className={styles.switchThumb} />
    </Switch.Root>
  );
}
