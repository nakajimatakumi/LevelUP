import styles from "@/styles/components/modules/PostHeader.module.css";
import IconWithText from "@/components/elements/IconWithText";
import PrivateToggle from "@/components/modules/PrivateToggle";
import { userInfoType } from "@/types/UserInfoType";
import { COMPONENT_SIZE } from "@/constants/PageLinksConst";
import { postInfoType } from "@/types/PostInfoType";
import FavoriteButton from "@/components/modules/FavoriteButton";
import DeleteButton from "@/components/modules/DeleteButton";
import BookmarkButton from "./BookmarkButton";
import PostChevron from "./PostChevron";

type Props = {
  userInfo: userInfoType;
  postInfo: postInfoType;
  loginUserId: string;
};

/**
 * 投稿ヘッダー
 * @param userInfo ユーザー情報
 * @param postInfo 投稿情報
 * @param loginUserId ログインユーザーID
 */
export default function PostHeader({ userInfo, postInfo, loginUserId }: Props) {
  /* ユーザー情報をフォーマット */
  const userContent = {
    pageName: userInfo.userName,
    userIconInfo: userInfo.userIconInfo,
    isLink: false,
    type: COMPONENT_SIZE.MEDIUM,
  };
  return (
    <div className={styles.userInfo}>
      <IconWithText content={userContent} />
      <PostChevron userInfo={userInfo} postInfo={postInfo} />
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
        {loginUserId === userInfo.userId && (
          <>
            <DeleteButton />
            <PrivateToggle />
          </>
        )}
      </div>
    </div>
  );
}
