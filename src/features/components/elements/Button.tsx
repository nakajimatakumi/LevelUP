import styles from "@/features/styles/elements/Button.module.css";

export default function Button({ children }: { children: React.ReactNode }) {
  return <button className={styles.button}>{children}</button>;
}
