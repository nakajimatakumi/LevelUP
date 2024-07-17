import SearchConditionList from "@/features/components/modules/SearchConditionList";
import SearchForm from "@/features/components/modules/SearchForm";
import styles from "@/styles/app/Home.module.css";

/**
 * トップページ
 */
export default function TopPage() {
  return (
    <div className={styles.container}>
      <div className={styles.searchForm}>
        <SearchForm />
      </div>
    </div>
  );
}
