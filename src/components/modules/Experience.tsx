"use client";

import { dispPostCardContext } from "@/contexts/DispPostCardContext";
import formatPostInfo from "@/logics/functions/FormatPostInfo";
import styles from "@/styles/components/modules/Experience.module.css";
import { PostInfoType } from "@/types/PostInfoType";
import { UserInfoType } from "@/types/UserInfoType";
import { useContext } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import SentenceText from "../elements/SentenceText";
import Card from "../elements/Card";

type Props = {
  userInfo: UserInfoType;
  postInfo: PostInfoType;
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
  const { handlePostClick } = useContext(dispPostCardContext);

  /* データ成形処理 */
  const formattedPostInfo = formatPostInfo({ userInfo, postInfo });
  return (
    <Accordion.Trigger
      className={styles.trigger}
      onClick={() => handlePostClick(formattedPostInfo)}
    >
      <Card>
        <div className={styles.experienceContent}>
          <SentenceText
            text={experience}
            lineClamp={20}
            lineHeight={1.4}
            fontSize={16}
          />
        </div>
      </Card>
    </Accordion.Trigger>
  );
}
