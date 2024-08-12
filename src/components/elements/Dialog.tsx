import * as radixDialog from "@radix-ui/react-dialog";
import styles from "@/styles/components/elements/Dialog.module.css";

type Props = {
  children: React.ReactNode;
};

/**
 * ダイアログコンポーネント
 * @param children トリガー
 */
export default function Dialog({ children }: Props) {
  return (
    <radixDialog.Root>
      <radixDialog.Trigger>{children}</radixDialog.Trigger>
      <radixDialog.Portal>
        <radixDialog.Content>
          <radixDialog.Title>Dialog</radixDialog.Title>
        </radixDialog.Content>
      </radixDialog.Portal>
    </radixDialog.Root>
  );
}
