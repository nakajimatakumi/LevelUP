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
import { dispPostCardContext } from "@/contexts/DispPostCardContext";
import formatPostInfo from "@/logics/functions/FormatPostInfo";
import { UserInfoType } from "@/types/UserInfoType";
import { PostInfoType } from "@/types/PostInfoType";
import * as Accordion from "@radix-ui/react-accordion";
import generateMessage from "@/logics/functions/GenerateMessage";
import { MESSAGE_TEMPLATE } from "@/constants/MessageTemplateConst";
import { COMPONENT_SIZE } from "@/constants/PageLinksConst";
import Icon from "../elements/Icon";
import Card from "../elements/Card";
type Props = {
  reflections: {
    positiveList: string[];
    negativeList: string[];
  };
  improvementsList: string[];
  userInfo: UserInfoType;
  postInfo: PostInfoType;
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
  const { handlePostClick } = useContext(dispPostCardContext);

  /* データ成形処理 */
  const formattedPostInfo = formatPostInfo({ userInfo, postInfo });
  return (
    <Accordion.Trigger
      className={styles.trigger}
      onClick={() => handlePostClick(formattedPostInfo)}
    >
      <Card>
        <div className={styles.reflection}>
          <div className={styles.container}>
            <Tooltip
              message={generateMessage(MESSAGE_TEMPLATE.TOOLTIP_MESSAGE, [
                TOOLTIP_TEXT.INTROSPECTION,
              ])}
            >
              <span>
                <Icon
                  iconPath={ICON_PATH.INTROSPECTION}
                  size={COMPONENT_SIZE.MEDIUM}
                />
              </span>
            </Tooltip>
            <Introspection reflections={reflections} />
          </div>
          <Separator className={styles.separator} />
          <div className={styles.container}>
            <Tooltip
              message={generateMessage(MESSAGE_TEMPLATE.TOOLTIP_MESSAGE, [
                TOOLTIP_TEXT.IMPROVEMENT,
              ])}
            >
              <span>
                <Icon
                  iconPath={ICON_PATH.IMPROVEMENT}
                  size={COMPONENT_SIZE.MEDIUM}
                />
              </span>
            </Tooltip>
            <Improvement improvementsList={improvementsList} />
          </div>
        </div>
      </Card>
    </Accordion.Trigger>
  );
}
