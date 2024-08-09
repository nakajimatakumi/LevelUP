"use client";

import Post from "@/components/modules/Post";
import styles from "@/styles/components/layouts/PostList.module.css";
import { useContext } from "react";
import { dispPostListContext } from "@/contexts/DispPostListContext";
import useInit from "@/logics/hooks/useInit";

/**
 * 投稿一覧コンポーネント
 */
export default function PostList() {
  /* 初期データ取得 */
  const { initData } = useInit();
  const loginUserId = initData.userInfo.userId;

  /* 投稿一覧データ取得 */
  const { dispPostList } = useContext(dispPostListContext);
  return (
    <div className={styles.root}>
      {dispPostList.map((post, index) => (
        <Post
          key={index}
          postInfo={post.postInfo}
          userInfo={post.userInfo}
          loginUserId={loginUserId}
        />
      ))}
    </div>
  );
}
