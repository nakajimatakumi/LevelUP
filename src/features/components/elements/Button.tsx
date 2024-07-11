import styles from "@/features/styles/elements/Button.module.css";

type props = {
  label: string;
};

export default function Button({ label }: props) {
  return <button className={styles.button}>{label}</button>;
}
