import Post from "@/components/modules/Post";
import useInit from "@/hooks/useInit";
import styles from "@/styles/components/layouts/PostList.module.css";

/**
 * 投稿一覧コンポーネント
 */
export default function PostList() {
  const { initData } = useInit();
  const { postList } = initData.userData;
  return (
    <div className={styles.root}>
      {postList.map((post, index) => (
        <Post key={index} postInfo={post.postInfo} userInfo={post.userInfo} />
      ))}
    </div>
  );
}
