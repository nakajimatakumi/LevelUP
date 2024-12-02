import Image from "next/image";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { BUTTON_LABEL } from "@/constants/LabelConst";
import { BUTTON_VARIANT, COMPONENT_SIZE } from "@/constants/ParamConst";
import { ICON_PATH } from "@/constants/IconPathConst";
import { Button, ScrollArea } from "@/components";
import styles from "@/components/elements/MessageDialog/MessageDialog.module.css";

type Props = {
  dispButton?: boolean;
  children?: React.ReactElement;
  title: string;
  description: string | React.ReactElement;
  onConfirm?: () => void;
  onOpenChange?: (open: boolean) => void;
  isOpen?: boolean;
  additionalStyle?: React.CSSProperties;
};

/**
 * メッセージダイアログコンポーネント
 * @param children ボタン
 * @param title タイトル
 * @param description 説明
 * @param onConfirm 確認ボタン押下時の処理
 * @param onOpenChange 表示状態変更時の処理
 * @param isOpen 表示状態
 * @param dispButton 確認ボタンを表示するか
 * @param additionalStyle 追加スタイル
 */
export default function MessageDialog({
  dispButton = true,
  children,
  title,
  description,
  onConfirm,
  onOpenChange,
  isOpen,
  additionalStyle,
}: Props) {
  return (
    <AlertDialog.Root onOpenChange={onOpenChange} open={isOpen}>
      <AlertDialog.Trigger asChild>{children}</AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className={styles.overlay} />
        <AlertDialog.Content className={styles.content} style={additionalStyle}>
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
          {dispButton ? (
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
          ) : (
            <div className={styles.cancel}>
              <AlertDialog.Cancel asChild>
                <Button
                  variant={BUTTON_VARIANT.PRIMARY}
                  size={COMPONENT_SIZE.MEDIUM}
                >
                  {BUTTON_LABEL.OK}
                </Button>
              </AlertDialog.Cancel>
            </div>
          )}
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
