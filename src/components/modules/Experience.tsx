"use client";

import { dispPostContext } from "@/contexts/DispPostContext";
import formatPostInfo from "@/logics/functions/FormatPostInfo";
import styles from "@/styles/components/modules/Experience.module.css";
import { postInfoType } from "@/types/PostInfoType";
import { userInfoType } from "@/types/UserInfoType";
import { useContext } from "react";
import * as Accordion from "@radix-ui/react-accordion";

type Props = {
  userInfo: userInfoType;
  postInfo: postInfoType;
  experience: string;
};

/**
 * 経験コンポーネント
 * @param experience 経験内容
 * @param userInfo ユーザー情報
 * @param postInfo 投稿情報
 */
export default function Experience({ userInfo, postInfo, experience }: Props) {
  /* カード表示データの状態更新関数 */
  const { handlePostClick } = useContext(dispPostContext);

  /* データ成形処理 */
  const formattedPostInfo = formatPostInfo({ userInfo, postInfo });
  return (
    <Accordion.Trigger
      className={styles.trigger}
      onClick={() => handlePostClick(formattedPostInfo)}
    >
      <p className={styles.experienceContent}>{experience}</p>
    </Accordion.Trigger>
  );
}
