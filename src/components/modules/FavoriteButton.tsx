"use client";

import styles from "@/styles/components/modules/FavoriteButton.module.css";
import ActiveButton from "@/components/elements/ActiveButton";
import { ICON_PATH } from "@/constants/IconPathConst";
import useFavorite from "@/logics/hooks/useFavorite";
import { useContext } from "react";
import { dispPostCardContext } from "@/contexts/DispPostCardContext";
import formatPostInfo from "@/logics/functions/FormatPostInfo";
import { userInfoType } from "@/types/UserInfoType";
import { postInfoType } from "@/types/PostInfoType";
import Image from "next/image";

type Props = {
  favoriteNum: number;
  isFavorite: boolean;
  userInfo: userInfoType;
  postInfo: postInfoType;
};

/**
 * いいねボタン
 * @param favoriteNum いいね数
 * @param isFavorite いいね済フラグ
 * @param onClick クリックイベント
 */
export default function FavoriteButton({
  favoriteNum,
  isFavorite,
  userInfo,
  postInfo,
}: Props) {
  /* カード表示データの状態更新関数 */
  const { handlePostClick } = useContext(dispPostCardContext);

  /* データ成形処理 */
  const formattedPostInfo = formatPostInfo({ userInfo, postInfo });
  /**
   * いいねボタンロジック
   * @return {isFavoriteState} いいね済フラグ
   * @return {handleFavoriteClick} いいね数更新関数
   * @return {formattedFavoriteNum} フォーマット済みいいね数
   */
  const { isFavoriteState, handleFavoriteClick, formattedFavoriteNum } =
    useFavorite(favoriteNum, isFavorite);

  /* イベントハンドラ */
  const handleClick = () => {
    handleFavoriteClick();
    handlePostClick(formattedPostInfo);
  };

  return (
    <div className={styles.root}>
      <ActiveButton isActive={isFavoriteState} onClick={handleClick}>
        <Image src={ICON_PATH.FAVORITE} alt="favorite" height={24} width={24} />
      </ActiveButton>
      <p>{formattedFavoriteNum}</p>
    </div>
  );
}
