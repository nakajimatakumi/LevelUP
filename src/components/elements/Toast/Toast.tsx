import React from "react";
import * as radixToast from "@radix-ui/react-toast";
import styles from "@/components/elements/Toast/Toast.module.css";

type ToastProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  message: string;
};

/**
 * トースト
 * @param message メッセージ
 * @param isOpen 表示状態
 * @param setIsOpen 表示状態を変更する関数
 */
export default function Toast({ message, isOpen, setIsOpen }: ToastProps) {
  return (
    <radixToast.Viewport className={styles.ToastViewport}>
      <radixToast.Root
        className={styles.ToastRoot}
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <radixToast.Description>{message}</radixToast.Description>
      </radixToast.Root>
    </radixToast.Viewport>
  );
}
