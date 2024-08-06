"use client";

import { dispPostContext } from "@/contexts/DispPostContext";
import styles from "@/styles/components/modules/Post.module.css";
import { postInfoType } from "@/types/PostInfoType";
import { userInfoType } from "@/types/UserInfoType";
import PostTextBox from "../elements/PostTextBox";
import * as Accordion from "@radix-ui/react-accordion";
import { useContext } from "react";
import PostHeader from "../elements/PostHeader";
import useFormatPostInfo from "@/hooks/useFormatPostInfo";
type Props = {
  postInfo: postInfoType;
  userInfo: userInfoType;
  loginUserId: string;
};

/**
 * 投稿コンポーネント
 * @param postInfo 投稿情報
 * @param userInfo ユーザー情報
 * @param loginUserId ログインユーザーID
 */
export default function Post({ postInfo, userInfo, loginUserId }: Props) {
  /* カード表示データの状態更新関数 */
  const { handlePostClick } = useContext(dispPostContext);

  /* データ成形処理 */
  const formattedPostInfo = useFormatPostInfo(userInfo, postInfo);

  /* イベントハンドラ */
  const eventHandler = () => {
    handlePostClick(formattedPostInfo);
  };

  return (
    <div className={styles.root}>
      <Accordion.Root type="single" collapsible className={styles.root}>
        <Accordion.Item value="item-1">
          <PostHeader
            userInfo={userInfo}
            postInfo={postInfo}
            eventHandler={eventHandler}
            loginUserId={loginUserId}
          />
          <div className={styles.textboxContainer}>
            <PostTextBox postInfo={postInfo} eventHandler={eventHandler} />
          </div>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
}
