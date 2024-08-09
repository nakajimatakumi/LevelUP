import * as AlertDialog from "@radix-ui/react-alert-dialog";
import styles from "@/styles/components/elements/MessageDialog.module.css";
import Button from "./Button";
import { LABEL, SIZE, VARIANT } from "@/constants/ButtonConst";

type Props = {
  children: React.ReactElement;
  title: string;
  description: string;
  onConfirm: () => void;
};

/**
 * メッセージダイアログコンポーネント
 * @param children ボタン
 * @param title タイトル
 * @param description 説明
 */
export default function MessageDialog({
  children,
  title,
  description,
  onConfirm,
}: Props) {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>{children}</AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className={styles.overlay} />
        <AlertDialog.Content className={styles.content}>
          <AlertDialog.Title className={styles.title}>
            {title}
          </AlertDialog.Title>
          <AlertDialog.Description className={styles.description}>
            {description}
          </AlertDialog.Description>
          <div className={styles.actions}>
            <AlertDialog.Cancel asChild>
              <Button variant={VARIANT.SECONDARY} size={SIZE.MEDIUM}>
                {LABEL.CANCEL}
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <Button
                variant={VARIANT.PRIMARY}
                size={SIZE.MEDIUM}
                onClick={onConfirm}
              >
                {LABEL.CONFIRM}
              </Button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
