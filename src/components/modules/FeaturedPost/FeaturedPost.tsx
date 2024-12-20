import { SentenceText } from "@/components";
import styles from "@/components/modules/FeaturedPost/FeaturedPost.module.css";

type Post = {
  postId: string;
  description: string;
};

type Props = {
  post: Post;
  index: number;
};

/**
 * 注目の経験を表示するコンポーネント
 * @param post - 注目の経験
 * @param index - 注目の経験のインデックス
 */
export default function FeaturedPost({ post, index }: Props) {
  // 数字を全角に変換する関数
  const toFullWidth = (index: number) => {
    const fullWidthNumbers: Record<number, string> = {
      1: "１",
      2: "２",
      3: "３",
      4: "４",
      5: "５",
    };
    return fullWidthNumbers[index];
  };
  return (
    <div className={styles.item}>
      <p className={styles.number}>{toFullWidth(index + 1)}</p>
      <div className={styles.description}>
        <SentenceText
          text={post.description}
          lineClamp={3}
          lineHeight={1.3}
          fontSize={16}
        />
      </div>
    </div>
  );
}
