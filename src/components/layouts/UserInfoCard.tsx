"use client";

import { useContext } from "react";
import { dispPostCardContext } from "@/contexts/DispPostCardContext";
import styles from "@/styles/components/layouts/UserInfoCard.module.css";
import JobBadge from "@/components/elements/JobBadge";
import IconWithText from "@/components/elements/IconWithText";
import CategoryBadge from "@/components/elements/CategoryBadge";

/**
 * ユーザー情報カード
 * @param postInfo 投稿情報
 */
export default function UserInfoCard() {
  /* 表示情報を取得 */
  const { dispPostCard } = useContext(dispPostCardContext);
  return (
    <div className={styles.card}>
      <div className={styles.userName}>
        <IconWithText content={dispPostCard.userInfo} />
      </div>
      <div className={styles.jobBadge}>
        <JobBadge {...dispPostCard.jobInfo} />
      </div>
      <p className={styles.description}>{dispPostCard.description}</p>
      {dispPostCard.category && dispPostCard.postedTime && (
        <>
          <div className={styles.postCategory}>
            <CategoryBadge postCategory={dispPostCard.category} />
          </div>
          <div className={styles.postTime}>
            <IconWithText content={dispPostCard.postedTime} />
          </div>
        </>
      )}
    </div>
  );
}
