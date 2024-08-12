"use client";

import { ICON_PATH } from "@/constants/IconPathConst";
import ActiveButton from "@/components/elements/ActiveButton";
import { useContext, useCallback } from "react";
import { dispPostCardContext } from "@/contexts/DispPostCardContext";
import formatPostInfo from "@/logics/functions/FormatPostInfo";
import { UserInfoType } from "@/types/UserInfoType";
import { PostInfoType } from "@/types/PostInfoType";
import Image from "next/image";
import { ToastContext } from "@/contexts/ToastContext";
import {
  MESSAGE_PARAMS,
  MESSAGE_TEMPLATE,
} from "@/constants/MessageTemplateConst";
import generateMessage from "@/logics/functions/GenerateMessage";

type Props = {
  isBookmark: boolean;
  userInfo: UserInfoType;
  postInfo: PostInfoType;
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

  /* toast表示関数 */
  const { showToast } = useContext(ToastContext);

  /* イベントハンドラ */
  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>, isActive?: boolean) => {
      handlePostClick(formattedPostInfo);
      isActive
        ? showToast(
            generateMessage(MESSAGE_TEMPLATE.REMOVE_MESSAGE, [
              MESSAGE_PARAMS.BOOKMARK,
            ])
          )
        : showToast(
            generateMessage(MESSAGE_TEMPLATE.ADD_MESSAGE, [
              MESSAGE_PARAMS.BOOKMARK,
            ])
          );
    },
    [formattedPostInfo, handlePostClick, showToast]
  );

  return (
    <ActiveButton isActive={isBookmark} onClick={handleClick}>
      <Image src={ICON_PATH.BOOKMARK} alt="bookmark" height={24} width={24} />
    </ActiveButton>
  );
}
