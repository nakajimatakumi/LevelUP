import Button from "@/features/components/elements/Button";
import styles from "@/styles/app/Home.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Button>検索</Button>
    </div>
  );
}
