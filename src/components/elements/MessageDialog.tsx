import * as AlertDialog from "@radix-ui/react-alert-dialog";
import styles from "@/styles/components/elements/MessageDialog.module.css";
import Button from "./Button";
import { BUTTON_LABEL } from "@/constants/LabelConst";
import { BUTTON_VARIANT, COMPONENT_SIZE } from "@/constants/ParamConst";
import Image from "next/image";
import { ICON_PATH } from "@/constants/IconPathConst";
import ScrollArea from "./ScrollArea";

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
 * @param onConfirm 確認ボタン押下時の処理
 * @param dispButton 確認ボタンを表示するか
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
            <Button variant={BUTTON_VARIANT.ICON} className={styles.close}>
              <Image src={ICON_PATH.CLOSE} alt="close" width={25} height={25} />
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Title className={styles.title}>
            {title}
          </AlertDialog.Title>
          <AlertDialog.Description className={styles.description} asChild>
            <div>
              <ScrollArea
                verticalPadding={20}
                height={400}
                positionMove={8}
                shrinkHeight={8}
              >
                {description}
              </ScrollArea>
            </div>
          </AlertDialog.Description>
          {dispButton && (
            <div className={styles.actions}>
              <AlertDialog.Action asChild>
                <Button
                  variant={BUTTON_VARIANT.PRIMARY}
                  size={COMPONENT_SIZE.MEDIUM}
                  onClick={onConfirm}
                >
                  {BUTTON_LABEL.CONFIRM}
                </Button>
              </AlertDialog.Action>
              <AlertDialog.Cancel asChild>
                <Button
                  variant={BUTTON_VARIANT.SECONDARY}
                  size={COMPONENT_SIZE.MEDIUM}
                >
                  {BUTTON_LABEL.CANCEL}
                </Button>
              </AlertDialog.Cancel>
            </div>
          )}
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
