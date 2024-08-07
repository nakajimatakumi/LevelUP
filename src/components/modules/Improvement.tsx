import styles from "@/styles/components/modules/Improvement.module.css";

type Props = {
  improvementsList: string[];
};

/**
 * 次回はどうしたいかを表示するコンポーネント
 * @param improvementsList 次回はどうしたいかリスト
 */
export default function Improvement({ improvementsList }: Props) {
  return (
    <ul className={styles.improvementContent}>
      {improvementsList.map((improvement, index) => (
        <li key={index} className={styles.improvementContent}>
          {improvement}
        </li>
      ))}
    </ul>
  );
}
