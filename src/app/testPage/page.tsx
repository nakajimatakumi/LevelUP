import JobBadge from "@/features/components/elements/JobBadge";
import styles from "@/styles/TestPage.module.css";

/**
 * テストページ
 */
export default function TestPage() {
  return (
    <div className={styles.container}>
      <JobBadge
        jobName="システムエンジニア"
        jobCategory="employee"
        jobColor="#D8CCC0"
      />
    </div>
  );
}
