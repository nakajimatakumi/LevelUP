"use client";

import { useContext, useEffect } from "react";
import { dispPostContext } from "@/contexts/DispPostContext";
import styles from "@/styles/components/modules/UserInfoCard.module.css";
import JobBadge from "../elements/JobBadge";
import IconWithText from "../elements/IconWithText";
import CategoryBadge from "../elements/CategoryBadge";

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
