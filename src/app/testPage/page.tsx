import UserInfoCard from "@/features/components/modules/UserInfoCard";
import styles from "@/styles/TestPage.module.css";

/**
 * テストページ
 */
export default function TestPage() {
  return (
    <div className={styles.container}>
      <UserInfoCard />
    </div>
  );
}
