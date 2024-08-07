"use client";

import styles from "@/styles/components/modules/Reflection.module.css";
import Image from "next/image";
import { ICON_PATH } from "@/constants/IconPathConst";
import { Separator } from "@radix-ui/react-separator";
import { TOOLTIP_TEXT } from "@/constants/TooltipConst";
import Introspection from "@/components/modules/Introspection";
import Improvement from "@/components/modules/Improvement";
import Tooltip from "@/components/elements/Tooltip";
import { useContext } from "react";
import { dispPostContext } from "@/contexts/DispPostContext";
import formatPostInfo from "@/logics/functions/FormatPostInfo";
import { userInfoType } from "@/types/UserInfoType";
import { postInfoType } from "@/types/PostInfoType";
import * as Accordion from "@radix-ui/react-accordion";
type Props = {
  reflections: {
    positiveList: string[];
    negativeList: string[];
  };
  improvementsList: string[];
  userInfo: userInfoType;
  postInfo: postInfoType;
};

/**
 * 反省点、改善点を表示するコンポーネント
 * @param reflections よかったこと、わるかったことリスト
 * @param improvementsList 次回はどうしたいかリスト
 * @param userInfo ユーザー情報
 * @param postInfo 投稿情報
 */
export default function Reflection({
  userInfo,
  postInfo,
  reflections,
  improvementsList,
}: Props) {
  /* カード表示データの状態更新関数 */
  const { handlePostClick } = useContext(dispPostContext);

  /* データ成形処理 */
  const formattedPostInfo = formatPostInfo({ userInfo, postInfo });
  return (
    <Accordion.Trigger
      className={styles.trigger}
      onClick={() => handlePostClick(formattedPostInfo)}
    >
      <div className={styles.reflection}>
        <div className={styles.container}>
          <Tooltip text={TOOLTIP_TEXT.INTROSPECTION}>
            <Image
              src={ICON_PATH.INTROSPECTION}
              alt="introspection"
              width={25}
              height={25}
            />
          </Tooltip>
          <Introspection reflections={reflections} />
        </div>
        <Separator className={styles.separator} />
        <div className={styles.container}>
          <Tooltip text={TOOLTIP_TEXT.IMPROVEMENT}>
            <Image
              src={ICON_PATH.IMPROVEMENT}
              alt="improvement"
              width={25}
              height={25}
            />
          </Tooltip>
          <Improvement improvementsList={improvementsList} />
        </div>
      </div>
    </Accordion.Trigger>
  );
}
