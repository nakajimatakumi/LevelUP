import styles from "@/styles/components/elements/CategoryBadge.module.css";

type Props = {
  postCategory: string;
};

/**
 * カテゴリーバッジ
 * @param postCategory 投稿カテゴリ
 */
export default function CategoryBadge({ postCategory }: Props) {
  return (
    <div className={styles.categoryBadge}>
      <p>{postCategory}</p>
    </div>
  );
}
