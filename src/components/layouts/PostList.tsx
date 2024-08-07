import Post from "@/components/modules/Post";
import useInit from "@/logics/hooks/useInit";
import styles from "@/styles/components/layouts/PostList.module.css";

/**
 * 投稿一覧コンポーネント
 */
export default function PostList() {
  const { initData } = useInit();
  const { userInfo, postList } = initData;
  const loginUserId = userInfo.userId;
  return (
    <div className={styles.root}>
      {postList.map((post, index) => (
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
