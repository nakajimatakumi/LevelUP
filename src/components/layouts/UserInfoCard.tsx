"use client";

import { useContext } from "react";
import { dispPostContext } from "@/contexts/DispPostContext";
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
  const { dispPost } = useContext(dispPostContext);
  return (
    <div className={styles.card}>
      <div className={styles.userName}>
        <IconWithText content={dispPost.userInfo} />
      </div>
      <div className={styles.jobBadge}>
        <JobBadge {...dispPost.jobInfo} />
      </div>
      <p className={styles.description}>{dispPost.description}</p>
      {dispPost.category && dispPost.postedTime && (
        <>
          <div className={styles.postCategory}>
            <CategoryBadge postCategory={dispPost.category} />
          </div>
          <div className={styles.postTime}>
            <IconWithText content={dispPost.postedTime} />
          </div>
        </>
      )}
    </div>
  );
}
