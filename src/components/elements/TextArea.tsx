"use client";

import styles from "@/styles/components/elements/TextArea.module.css";
import clsx from "clsx";
import { ChangeEvent, useRef } from "react";
import { forwardRef, TextareaHTMLAttributes } from "react";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  height?: "high" | "medium" | "low";
  isListType?: boolean;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

/**
 * テキストエリア
 * @param {Props} props - プロパティ
 * @param {React.Ref<HTMLTextAreaElement>} ref - リファレンス
 */
export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ height, isListType = false, value, onChange, ...props }: Props, ref) => {
    /* クラス名 */
    const classNames = clsx(styles.root, {
      [styles[height as keyof typeof styles]]: height,
    });

    /* コンポジション状態 */
    const isComposingRef = useRef(false);

    /* テキスト変更時の処理 */
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      /* 新しい値 */
      const newValue = e.target.value;
      if (isListType && !isComposingRef.current) {
        /* 行を分割 */
        const lines = newValue.split("\n");
        /* リスト形式にフォーマット */
        const formattedLines = lines.map((line) => {
          if (line !== "") {
            return line.startsWith("・") ? line : `・${line}`;
          }
          return line;
        });
        /* フォーマットされた値 */
        const formattedValue = formattedLines.join("\n");
        onChange({ ...e, target: { ...e.target, value: formattedValue } });
      } else {
        onChange(e);
      }
    };

    return (
      <textarea
        {...props}
        className={classNames}
        value={value}
        onChange={handleChange}
        maxLength={1500}
        ref={ref}
        onCompositionStart={() => (isComposingRef.current = true)}
        onCompositionEnd={() => {
          isComposingRef.current = false;
          handleChange({
            target: { value },
          } as ChangeEvent<HTMLTextAreaElement>);
        }}
      />
    );
  }
);

TextArea.displayName = "TextArea";
