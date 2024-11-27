"use client";

import React, { useState, createContext, useCallback } from "react";
import * as radixToast from "@radix-ui/react-toast";
import Toast from "@/components/elements/Toast";

type ToastContextType = {
  isOpen: boolean;
  message: string;
  showToast: (message: string) => void;
};

/**
 * トーストを表示するためのコンテキスト
 */
export const ToastContext = createContext<ToastContextType>({
  isOpen: false,
  message: "",
  showToast: () => {},
});

/**
 * コンテキストプロバイダ
 * @param children 子コンポーネント
 */
export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const showToast = (message: string) => {
    setMessage(message);
    setIsOpen(true);
  };

  return (
    <ToastContext.Provider value={{ isOpen, message, showToast }}>
      <radixToast.Provider duration={1500} swipeDirection="right">
        {children}
        <Toast message={message} isOpen={isOpen} setIsOpen={setIsOpen} />
      </radixToast.Provider>
    </ToastContext.Provider>
  );
};
