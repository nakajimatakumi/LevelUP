import * as radixDialog from "@radix-ui/react-dialog";
import styles from "@/styles/components/elements/Dialog.module.css";
import clsx from "clsx";
import Button from "./Button";
import { BUTTON_VARIANT } from "@/constants/ParamConst";
import Image from "next/image";
import { ICON_PATH } from "@/constants/IconPathConst";
import ScrollArea from "./ScrollArea";

type Props = {
  children: React.ReactNode;
  description: string | React.ReactElement;
  size: "small" | "medium" | "large";
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
};

/**
 * ダイアログコンポーネント
 * @param children トリガー
 * @param isOpen ダイアログの開閉状態
 * @param onOpenChange ダイアログの開閉状態を変更する関数
 * @param description ダイアログの説明
 * @param size ダイアログのサイズ
 */
export default function Dialog({
  children,
  description,
  size,
  isOpen,
  onOpenChange,
}: Props) {
  const classNames = clsx(styles.content, {
    [styles[size]]: size,
  });
  return (
    <radixDialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <radixDialog.Trigger asChild>{children}</radixDialog.Trigger>
      <radixDialog.Portal>
        <radixDialog.Overlay className={styles.overlay} />
        <radixDialog.Content className={classNames}>
          <radixDialog.Title className={styles.title} />
          <radixDialog.Close className={styles.close} asChild>
            <Button variant={BUTTON_VARIANT.ICON}>
              <Image src={ICON_PATH.CLOSE} alt="close" width={25} height={25} />
            </Button>
          </radixDialog.Close>
          <radixDialog.Description asChild>
            <ScrollArea
              verticalPadding={30}
              positionMove={27}
              shrinkHeight={-23}
            >
              {description}
            </ScrollArea>
          </radixDialog.Description>
        </radixDialog.Content>
      </radixDialog.Portal>
    </radixDialog.Root>
  );
}
