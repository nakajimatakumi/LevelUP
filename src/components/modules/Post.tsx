import styles from "@/styles/components/modules/Post.module.css";
import useInit from "@/hooks/useInit";

/** 投稿コンポーネント */
export default function Post({ index }: { index: number }) {
  return (
    <div className={styles.root}>
      投稿コンポーネント： {index + 1}
      <div className={styles.user}></div>
    </div>
  );
}
