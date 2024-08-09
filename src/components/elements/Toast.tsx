import React from "react";
import * as radixToast from "@radix-ui/react-toast";
import styles from "@/styles/components/elements/Toast.module.css";

type ToastProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  message: string;
};

export const Toast: React.FC<ToastProps> = ({ message, isOpen, setIsOpen }) => {
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
};
