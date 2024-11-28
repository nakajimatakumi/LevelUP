import { forwardRef } from "react";
import Image from "next/image";
import styles from "@/components/elements/Icon/Icon.module.css";
import clsx from "clsx";

type Props = {
  iconPath: string;
  size: "small" | "medium" | "large" | "extraLarge" | "none";
  isFill?: boolean;
  className?: string;
};

/**
 * アイコンコンポーネント
 * @param iconPath アイコンのパス
 * @param size アイコンのサイズ
 * @param isFill アイコンの塗りつぶし
 * @param className アイコンのクラス
 */
const Icon = forwardRef<HTMLImageElement, Props>(
  ({ iconPath, size, isFill, className }, ref) => {
    const classNames = clsx(styles[size], className);
    const path = isFill ? iconPath.replace(".svg", "_fill.svg") : iconPath;
    return (
      <Image
        ref={ref}
        src={path}
        alt=""
        width={35}
        height={35}
        className={classNames}
      />
    );
  }
);

Icon.displayName = "Icon";

export default Icon;
