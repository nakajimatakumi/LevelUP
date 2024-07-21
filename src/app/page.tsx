import SearchForm from "@/features/components/modules/SearchForm";
import styles from "@/styles/app/Home.module.css";
import useInit from "@/hooks/useInit";
import UserInfoCard from "@/features/components/modules/UserInfoCard";

/**
 * トップページ
 */
export default function TopPage() {
  const { getInitData } = useInit();
  const { searchConditions, userData } = getInitData();

  return (
    <div className={styles.container}>
      <div className={styles.searchForm}>
        <SearchForm searchConditions={searchConditions} />
      </div>
      <div className={styles.userInfoCard}>
        <UserInfoCard />
      </div>
    </div>
  );
}
