"use client";

import styles from "@/components/elements/TextArea/TextArea.module.css";
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
 * @param ref - リファレンス
 * @param height - 高さ
 * @param isListType - リスト形式
 * @param value - 値
 * @param onChange - 値変更時の処理
 */
export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ height, isListType = false, value, onChange, ...props }: Props, ref) => {
    /* クラス名 */
    const classNames = clsx(styles.root, {
      [styles[height as keyof typeof styles]]: height,
    });

    /* コンポジション状態 */
    const isComposingRef = useRef(false);

    // 初期値を箇条書き形式に変換する関数
    const formatListValue = (text: string) => {
      if (isComposingRef.current || !isListType || !text) return text;
      return text
        .split("\n")
        .map((line) => (line && !line.startsWith("・") ? `・${line}` : line))
        .join("\n");
    };

    /* テキスト変更時の処理 */
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      onChange({
        ...e,
        target: { ...e.target, value: formatListValue(e.target.value) },
      });
    };

    return (
      <textarea
        {...props}
        className={classNames}
        value={formatListValue(value)}
        onChange={handleChange}
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
export default TextArea;
