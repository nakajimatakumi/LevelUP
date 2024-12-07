"use client";

import { useContext } from "react";
import Image from "next/image";
import { dispPostCardContext } from "@/contexts/DispPostCardContext";
import { UserInfoType } from "@/types/UserInfoType";
import { PostInfoType } from "@/types/PostInfoType";
import useFavorite from "@/logics/hooks/useFavorite";
import formatPostInfo from "@/logics/functions/FormatPostInfo";
import { ICON_PATH } from "@/constants/IconPathConst";
import { ActiveButton } from "@/components/";
import styles from "@/components/modules/FavoriteButton/FavoriteButton.module.css";

type Props = {
  favoriteNum: number;
  isFavorite: boolean;
  userInfo: UserInfoType;
  postInfo: PostInfoType;
};

/**
 * いいねボタン
 * @param favoriteNum いいね数
 * @param isFavorite いいね済フラグ
 * @param userInfo ユーザー情報
 * @param postInfo 投稿情報
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
