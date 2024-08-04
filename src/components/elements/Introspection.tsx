import styles from "@/styles/components/elements/Introspection.module.css";

type Props = {
  reflections: {
    positiveList: string[];
    negativeList: string[];
  };
};

/**
 * よかったこと、わるかったことを表示するコンポーネント
 * @param reflections よかったこと、わるかったことリスト
 */
export default function Introspection({ reflections }: Props) {
  return (
    <>
      <ul className={styles.positiveContent}>
        {reflections.positiveList.map((positive, index) => (
          <li key={index} className={styles.positiveContent}>
            {positive}
          </li>
        ))}
      </ul>
      <ul className={styles.negativeContent}>
        {reflections.negativeList.map((negative, index) => (
          <li key={index} className={styles.negativeContent}>
            {negative}
          </li>
        ))}
      </ul>
    </>
  );
}
