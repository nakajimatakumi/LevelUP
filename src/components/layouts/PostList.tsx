import Post from "@/components/modules/Post";
import styles from "@/styles/components/layouts/PostList.module.css";

/** 投稿一覧コンポーネント */
export default function PostList() {
  return (
    <div className={styles.root}>
      {[...Array(7)].map((_, index) => (
        <Post key={index} index={index} />
      ))}
    </div>
  );
}
