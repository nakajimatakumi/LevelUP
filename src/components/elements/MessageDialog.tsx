import * as AlertDialog from "@radix-ui/react-alert-dialog";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import styles from "@/styles/components/elements/MessageDialog.module.css";
import Button from "./Button";
import { LABEL, SIZE, VARIANT } from "@/constants/ButtonConst";
import Image from "next/image";
import { ICON_PATH } from "@/constants/IconPathConst";

type Props = {
  dispButton?: boolean;
  children: React.ReactElement;
  title: string;
  description: string | React.ReactElement;
  onConfirm?: () => void;
};

/**
 * メッセージダイアログコンポーネント
 * @param children ボタン
 * @param title タイトル
 * @param description 説明
 */
export default function MessageDialog({
  dispButton = true,
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
          <AlertDialog.Cancel className={styles.close} asChild>
            <Button variant={VARIANT.ICON}>
              <Image src={ICON_PATH.CLOSE} alt="close" width={25} height={25} />
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Title className={styles.title}>
            {title}
          </AlertDialog.Title>
          <AlertDialog.Description className={styles.description}>
            <ScrollArea.Root className={styles.scrollAreaRoot}>
              <ScrollArea.Viewport className={styles.scrollAreaViewport}>
                {description}
              </ScrollArea.Viewport>
              <ScrollArea.Scrollbar
                className={styles.scrollAreaScrollbar}
                orientation="vertical"
              >
                <ScrollArea.Thumb className={styles.scrollAreaThumb} />
              </ScrollArea.Scrollbar>
            </ScrollArea.Root>
          </AlertDialog.Description>
          {dispButton && (
            <div className={styles.actions}>
              <AlertDialog.Action asChild>
                <Button
                  variant={VARIANT.PRIMARY}
                  size={SIZE.MEDIUM}
                  onClick={onConfirm}
                >
                  {LABEL.CONFIRM}
                </Button>
              </AlertDialog.Action>
              <AlertDialog.Cancel asChild>
                <Button variant={VARIANT.SECONDARY} size={SIZE.MEDIUM}>
                  {LABEL.CANCEL}
                </Button>
              </AlertDialog.Cancel>
            </div>
          )}
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
