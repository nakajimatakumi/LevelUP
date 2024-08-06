import styles from "@/styles/components/elements/FavoriteButton.module.css";
import IconButton from "./IconButton";
import { ICON_PATH } from "@/constants/IconPathConst";
import { useState } from "react";

type Props = {
  favoriteNum: number;
  isFavorite: boolean;
  eventHandler: () => void;
};

/**
 * いいねボタン
 * @param favoriteNum いいね数
 * @param isFavorite いいね済フラグ
 */
export default function FavoriteButton({
  favoriteNum,
  isFavorite,
  eventHandler,
}: Props) {
  /* いいね数を管理 */
  const [favoriteNumState, setFavoriteNumState] = useState(favoriteNum);

  /* いいねクリック時のイベント */
  const handleFavoriteClick = (isActive?: boolean) => {
    isActive
      ? setFavoriteNumState(favoriteNumState - 1)
      : setFavoriteNumState(favoriteNumState + 1);
    eventHandler();
  };

  /* いいね数をフォーマット */
  const formatFavoriteNum = (num: number) => {
    if (num >= 10001) {
      return "10k⁺";
    }
    return num >= 1000 ? `${(num / 1000).toFixed(1)}k` : num.toString();
  };

  return (
    <div className={styles.root}>
      <IconButton
        iconPath={ICON_PATH.FAVORITE}
        isActive={isFavorite}
        onClick={handleFavoriteClick}
      />
      <p>{formatFavoriteNum(favoriteNumState)}</p>
    </div>
  );
}
