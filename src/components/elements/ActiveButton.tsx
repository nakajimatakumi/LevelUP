import styles from "@/styles/components/elements/ActiveButton.module.css";
import Image from "next/image";
import { useState } from "react";

type Props = {
  iconPath: string;
  isActive?: boolean;
  onClick?: (isActive?: boolean) => void;
};

/**
 * アイコンボタン
 * @param iconPath アイコンのパス
 * @param isActive アクティブ状態
 * @param onClick クリック時のイベント
 */
export default function ActiveButton({ iconPath, isActive, onClick }: Props) {
  /* アクティブ状態管理 */
  const [isActiveState, setIsActiveState] = useState(isActive);

  /* フィルタ済みのパスを取得 */
  const getFilledPath = (path: string) => path.replace(".svg", "_fill.svg");

  return (
    <button
      className={styles.root}
      onClick={() => {
        setIsActiveState(!isActiveState);
        onClick && onClick(isActiveState);
      }}
    >
      <div className={styles.iconWrapper}>
        <Image
          src={iconPath}
          alt=""
          width={24}
          height={24}
          className={`${styles.icon} ${styles.defaultIcon} ${
            isActiveState ? styles.hideIcon : ""
          }`}
        />
        <Image
          src={getFilledPath(iconPath)}
          alt=""
          width={24}
          height={24}
          className={`${styles.icon} ${styles.filledIcon} ${
            isActiveState ? styles.showIcon : ""
          }`}
        />
      </div>
    </button>
  );
}
