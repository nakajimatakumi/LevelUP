import styles from "@/styles/components/modules/PostHeader.module.css";
import IconWithText from "@/components/elements/IconWithText";
import PrivateToggle from "@/components/elements/PrivateToggle";
import { UserInfoType } from "@/types/UserInfoType";
import {
  COMPONENT_LENGTH,
  COMPONENT_SIZE,
  COMPONENT_TYPE,
} from "@/constants/PageLinksConst";
import { PostInfoType } from "@/types/PostInfoType";
import FavoriteButton from "@/components/modules/FavoriteButton";
import BookmarkButton from "./BookmarkButton";
import { VARIANT } from "@/constants/ButtonConst";
import Button from "../elements/Button";
import Image from "next/image";
import { ICON_PATH } from "@/constants/IconPathConst";
import MessageDialog from "../elements/MessageDialog";
import generateMessage from "@/logics/functions/GenerateMessage";
import {
  MESSAGE_PARAMS,
  MESSAGE_TEMPLATE,
} from "@/constants/MessageTemplateConst";
import { useContext, useMemo } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { dispPostCardContext } from "@/contexts/DispPostCardContext";
import formatPostInfo from "@/logics/functions/FormatPostInfo";
import useDeletePost from "@/logics/hooks/useDeletePost";

type Props = {
  userInfo: UserInfoType;
  postInfo: PostInfoType;
  loginUserId: string;
};

/**
 * 投稿ヘッダー
 * @param userInfo ユーザー情報
 * @param postInfo 投稿情報
 * @param loginUserId ログインユーザーID
 */
export default function PostHeader({ userInfo, postInfo, loginUserId }: Props) {
  /* カード表示データの状態更新関数取得 */
  const { handlePostClick } = useContext(dispPostCardContext);

  /* データ成形処理 */
  const formattedPostInfo = formatPostInfo({ userInfo, postInfo });

  /* ダイアログのメッセージを生成 */
  const deleteMessage = useMemo(
    () => ({
      title: generateMessage(MESSAGE_TEMPLATE.CONFIRM_MESSAGE, [
        MESSAGE_PARAMS.POST,
        MESSAGE_PARAMS.DELETE,
      ]),
      description: MESSAGE_TEMPLATE.CANT_UNDO_MESSAGE,
    }),
    []
  );

  /* 投稿削除関数取得 */
  const { deletePost } = useDeletePost(postInfo.postId);

  return (
    <div className={styles.userInfo}>
      <IconWithText
        size={COMPONENT_SIZE.MEDIUM}
        length={COMPONENT_LENGTH.FIT}
        type={COMPONENT_TYPE.USER}
        text={userInfo.userName}
        userIconInfo={userInfo.userIconInfo}
      />
      <Accordion.Trigger
        className={styles.trigger}
        onClick={() => handlePostClick(formattedPostInfo)}
      >
        <Image
          src={ICON_PATH.CHEVRON}
          alt="chevron"
          width={18}
          height={18}
          className={styles.chevron}
        />
      </Accordion.Trigger>
      <div className={styles.buttonContainer}>
        <BookmarkButton
          isBookmark={postInfo.isBookmark === "true"}
          userInfo={userInfo}
          postInfo={postInfo}
        />
        <FavoriteButton
          favoriteNum={parseInt(postInfo.favoriteNum) || 0}
          isFavorite={postInfo.isFavorite === "true"}
          userInfo={userInfo}
          postInfo={postInfo}
        />
        {/*自分の投稿のみボタン表示*/}
        {loginUserId === userInfo.userId && (
          <>
            <MessageDialog
              title={deleteMessage.title}
              description={deleteMessage.description}
              onConfirm={deletePost}
            >
              <Button variant={VARIANT.ICON}>
                <Image
                  src={ICON_PATH.DELETE}
                  alt="delete"
                  height={24}
                  width={24}
                />
              </Button>
            </MessageDialog>
            <PrivateToggle />
          </>
        )}
      </div>
    </div>
  );
}
