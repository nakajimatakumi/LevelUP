"use client";

import { ICON_PATH } from "@/constants/IconPathConst";
import ActiveButton from "@/components/elements/ActiveButton";
import { useContext } from "react";
import { dispPostCardContext } from "@/contexts/DispPostCardContext";
import formatPostInfo from "@/logics/functions/FormatPostInfo";
import { userInfoType } from "@/types/UserInfoType";
import { postInfoType } from "@/types/PostInfoType";
import Image from "next/image";

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
  const { handlePostClick } = useContext(dispPostCardContext);

  /* データ成形処理 */
  const formattedPostInfo = formatPostInfo({ userInfo, postInfo });
  return (
    <ActiveButton
      isActive={isBookmark}
      onClick={() => handlePostClick(formattedPostInfo)}
    >
      <Image src={ICON_PATH.BOOKMARK} alt="bookmark" height={24} width={24} />
    </ActiveButton>
  );
}
