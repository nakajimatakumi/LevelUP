"use client";

import { ICON_PATH } from "@/constants/IconPathConst";
import ActiveButton from "@/components/elements/ActiveButton";
import { useContext } from "react";
import { dispPostContext } from "@/contexts/DispPostContext";
import formatPostInfo from "@/logics/functions/FormatPostInfo";
import { userInfoType } from "@/types/UserInfoType";
import { postInfoType } from "@/types/PostInfoType";

type Props = {
  isBookmark: boolean;
  userInfo: userInfoType;
  postInfo: postInfoType;
};

/**
 * ブックマークボタン
 * @param isBookmark ブックマーク状態
 * @param userInfo ユーザー情報
 * @param postInfo 投稿情報
 */
export default function BookmarkButton({
  isBookmark,
  userInfo,
  postInfo,
}: Props) {
  /* カード表示データの状態更新関数 */
  const { handlePostClick } = useContext(dispPostContext);

  /* データ成形処理 */
  const formattedPostInfo = formatPostInfo({ userInfo, postInfo });
  return (
    <ActiveButton
      iconPath={ICON_PATH.BOOKMARK}
      isActive={isBookmark}
      onClick={() => handlePostClick(formattedPostInfo)}
    />
  );
}
