import styles from "@/features/styles/elements/CategoryBadge.module.css";

type Props = {
  categoryName: string;
};

/**
 * カテゴリーバッジ
 */
export default function CategoryBadge({ categoryName }: Props) {
  return (
    <div className={styles.categoryBadge}>
      <p>{categoryName}</p>
    </div>
  );
}
