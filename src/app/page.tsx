import SearchForm from "@/features/components/modules/SearchForm";
import styles from "@/styles/app/Home.module.css";
import { useInit } from "@/hooks/useInit";

/**
 * トップページ
 */
export default function TopPage() {
  const { getInitData } = useInit();
  const searchConditions = getInitData();

  return (
    <div className={styles.container}>
      <div className={styles.searchForm}>
        <SearchForm searchConditions={searchConditions} />
      </div>
    </div>
  );
}
