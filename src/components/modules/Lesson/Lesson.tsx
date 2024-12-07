"use client";

import { useContext } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { dispPostCardContext } from "@/contexts/DispPostCardContext";
import formatPostInfo from "@/logics/functions/FormatPostInfo";
import { PostInfoType } from "@/types/PostInfoType";
import { UserInfoType } from "@/types/UserInfoType";
import { TEXT_STYLE } from "@/constants/ParamConst";
import { Card, ListText } from "@/components";
import styles from "@/components/modules/Lesson/Lesson.module.css";

type Props = {
  lessonsList: string[];
  userInfo: UserInfoType;
  postInfo: PostInfoType;
};

/**
 * 教訓コンポーネント
 * @param lessonsList 教訓リスト
 * @param userInfo ユーザー情報
 * @param postInfo 投稿情報
 */
export default function Lesson({ userInfo, postInfo, lessonsList }: Props) {
  /* カード表示データの状態更新関数 */
  const { handlePostClick } = useContext(dispPostCardContext);

  /* データ成形処理 */
  const formattedPostInfo = formatPostInfo({ userInfo, postInfo });
  return (
    <Accordion.Trigger
      className={styles.trigger}
      onClick={() => handlePostClick(formattedPostInfo)}
    >
      <Card>
        <div className={styles.lessonContents}>
          <ListText
            textList={lessonsList}
            textStyle={TEXT_STYLE.NORMAL}
            fontSize={16}
            lineHeight={1.5}
          />
        </div>
      </Card>
    </Accordion.Trigger>
  );
}
