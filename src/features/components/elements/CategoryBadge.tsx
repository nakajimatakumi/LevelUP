import styles from "@/features/styles/elements/CategoryBadge.module.css";

type Props = {
  categoryName: string;
};

/**
 * カテゴリーバッジ
 * @param categoryName カテゴリ名
 */
export default function CategoryBadge({ categoryName }: Props) {
  return (
    <div className={styles.categoryBadge}>
      <p>{categoryName}</p>
    </div>
  );
}
