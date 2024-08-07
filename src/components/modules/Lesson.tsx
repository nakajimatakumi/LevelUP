"use client";

import { dispPostContext } from "@/contexts/DispPostContext";
import formatPostInfo from "@/logics/functions/FormatPostInfo";
import styles from "@/styles/components/modules/Lesson.module.css";
import { postInfoType } from "@/types/PostInfoType";
import { userInfoType } from "@/types/UserInfoType";
import { useContext } from "react";
import * as Accordion from "@radix-ui/react-accordion";

type Props = {
  lessonsList: string[];
  userInfo: userInfoType;
  postInfo: postInfoType;
};

/**
 * 教訓コンポーネント
 * @param lessonsList 教訓リスト
 * @param userInfo ユーザー情報
 * @param postInfo 投稿情報
 */
export default function Lesson({ userInfo, postInfo, lessonsList }: Props) {
  /* カード表示データの状態更新関数 */
  const { handlePostClick } = useContext(dispPostContext);

  /* データ成形処理 */
  const formattedPostInfo = formatPostInfo({ userInfo, postInfo });
  return (
    <Accordion.Trigger
      className={styles.trigger}
      onClick={() => handlePostClick(formattedPostInfo)}
    >
      <ul className={styles.lessonContents}>
        {lessonsList.map((lesson, index) => (
          <li key={index} className={styles.lessonContent}>
            {lesson}
          </li>
        ))}
      </ul>
    </Accordion.Trigger>
  );
}
