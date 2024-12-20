import { forwardRef, ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import styles from "@/components/elements/Button/Button.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: "small" | "medium" | "large" | "fit";
  variant?: "primary" | "secondary" | "submit" | "search" | "icon" | "none";
}

/**
 * ボタンコンポーネント
 * @param children ボタンの子要素
 * @param size ボタンのサイズ
 * @param variant ボタンのバリアント
 * @param rest その他の属性
 */
const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  /* プロパティを分割 */
  const { children, size, variant, ...rest } = props;
  /* クラス名を生成 */
  const classNames = clsx(
    styles.button,
    {
      [styles[size as keyof typeof styles]]: size,
      [styles[variant as keyof typeof styles]]: variant,
    },
    rest.className
  );
  return (
    <button
      ref={ref}
      className={classNames}
      onClick={rest.onClick}
      disabled={rest.disabled}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";
export default Button;
