import styles from "@/styles/components/elements/PostHeader.module.css";
import IconWithText from "./IconWithText";
import IconButton from "./IconButton";
import PrivateToggle from "./PrivateToggle";
import { ICON_PATH } from "@/constants/IconPathConst";
import Image from "next/image";
import * as Accordion from "@radix-ui/react-accordion";
import { userInfoType } from "@/types/UserInfoType";
import { COMPONENT_SIZE } from "@/constants/PageLinksConst";
import { postInfoType } from "@/types/PostInfoType";
import FavoriteButton from "./FavoriteButton";

type Props = {
  userInfo: userInfoType;
  postInfo: postInfoType;
  eventHandler: () => void;
  loginUserId: string;
};

/**
 * 投稿ヘッダー
 * @param userInfo ユーザー情報
 * @param eventHandler イベントハンドラ
 * @param loginUserId ログインユーザーID
 */
export default function PostHeader({
  userInfo,
  postInfo,
  eventHandler,
  loginUserId,
}: Props) {
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
      <Accordion.Trigger
        className={styles.trigger}
        onClick={() => eventHandler()}
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
        <IconButton
          iconPath={ICON_PATH.BOOKMARK}
          isActive={postInfo.isBookmark === "true"}
          onClick={eventHandler}
        />
        <FavoriteButton
          favoriteNum={parseInt(postInfo.favoriteNum) || 0}
          isFavorite={postInfo.isFavorite === "true"}
          eventHandler={eventHandler}
        />
        {loginUserId === userInfo.userId && (
          <>
            <IconButton iconPath={ICON_PATH.DELETE} />
            <PrivateToggle />
          </>
        )}
      </div>
    </div>
  );
}
