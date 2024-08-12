"use client";

import { useContext } from "react";
import { dispPostCardContext } from "@/contexts/DispPostCardContext";
import styles from "@/styles/components/layouts/UserInfoCard.module.css";
import JobBadge from "@/components/elements/JobBadge";
import IconWithText from "@/components/elements/IconWithText";
import CategoryBadge from "@/components/elements/CategoryBadge";
import {
  COMPONENT_LENGTH,
  COMPONENT_SIZE,
  COMPONENT_TYPE,
} from "@/constants/PageLinksConst";
import { ICON_PATH } from "@/constants/IconPathConst";
import SentenceText from "../elements/SentenceText";
import Card from "../elements/Card";

/**
 * ユーザー情報カード
 * @param postInfo 投稿情報
 */
export default function UserInfoCard() {
  /* 表示情報を取得 */
  const { dispPostCard } = useContext(dispPostCardContext);
  return (
    <Card padding={0}>
      <div className={styles.card}>
        <div className={styles.topContent}>
          <IconWithText
            userIconInfo={dispPostCard.userInfo.userIconInfo}
            size={COMPONENT_SIZE.SMALL}
            length={COMPONENT_LENGTH.MEDIUM}
            text={dispPostCard.userInfo.userName}
            type={COMPONENT_TYPE.USER}
          />
          <JobBadge {...dispPostCard.jobInfo} />
        </div>
        <div className={styles.centerContent}>
          <SentenceText
            text={dispPostCard.description}
            lineClamp={6}
            lineHeight={1.4}
            fontSize={18}
          />
        </div>
        <div className={styles.bottomContent}>
          {dispPostCard.category && dispPostCard.postedTime && (
            <>
              <CategoryBadge postCategory={dispPostCard.category} />
              <IconWithText
                iconPath={ICON_PATH.CLOCK}
                size={COMPONENT_SIZE.NONE}
                length={COMPONENT_LENGTH.NONE}
                text={dispPostCard.postedTime}
                type={COMPONENT_TYPE.POSTED_TIME}
              />
            </>
          )}
        </div>
      </div>
    </Card>
  );
}
