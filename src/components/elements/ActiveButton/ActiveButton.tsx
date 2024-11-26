import styles from "@/components/elements/ActiveButton/ActiveButton.module.css";
import Image from "next/image";
import { useState, ButtonHTMLAttributes, useMemo } from "react";
import Button from "@/components/elements/Button";
import { BUTTON_VARIANT } from "@/constants/ParamConst";
import clsx from "clsx";

interface ActiveButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactElement;
  isActive: boolean;
  onClick: (
    event: React.MouseEvent<HTMLButtonElement>,
    isActive?: boolean
  ) => void;
}

/**
 * アイコンボタン
 * @param children アイコン
 * @param isActive アクティブ状態
 * @param onClick クリック時のイベント
 */
export default function ActiveButton({ children, isActive, onClick }: ActiveButtonProps) {
  /* アクティブ状態管理 */
  const [isActiveState, setIsActiveState] = useState(isActive);

  /* フィルタ済みのパスを取得 */
  const getFilledPath = useMemo(
    () => children.props.src.replace(".svg", "_fill.svg"),
    [children.props.src]
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsActiveState(!isActiveState);
    onClick && onClick(event, isActiveState);
  };
  return (
    <div className={styles.root}>
      <Button
        variant={BUTTON_VARIANT.ICON}
        onClick={handleClick}
        className={clsx(styles.icon, {
          [styles.hideIcon]: isActiveState,
          [styles.showIcon]: !isActiveState,
        })}
      >
        {children}
      </Button>
      <Button
        variant={BUTTON_VARIANT.ICON}
        onClick={handleClick}
        className={clsx(styles.icon, {
          [styles.showIcon]: isActiveState,
          [styles.hideIcon]: !isActiveState,
        })}
      >
        <Image
          src={getFilledPath}
          alt={children.props.alt}
          width={children.props.width}
          height={children.props.height}
        />
      </Button>
    </div>
  );
}
