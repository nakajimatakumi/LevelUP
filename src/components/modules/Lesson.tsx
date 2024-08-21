"use client";

import { dispPostCardContext } from "@/contexts/DispPostCardContext";
import formatPostInfo from "@/logics/functions/FormatPostInfo";
import styles from "@/styles/components/modules/Lesson.module.css";
import { PostInfoType } from "@/types/PostInfoType";
import { UserInfoType } from "@/types/UserInfoType";
import { useContext } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { TEXT_STYLE } from "@/constants/ParamConst";
import ListText from "../elements/ListText";
import Card from "../elements/Card";

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
            lineClamp={1}
            fontSize={16}
            lineHeight={1.5}
          />
        </div>
      </Card>
    </Accordion.Trigger>
  );
}
