import styles from "@/features/styles/elements/JobBadge.module.css";
import useConvertColor from "@/hooks/useConvertColor";

type Props = {
  jobName: string;
  jobCategory: string;
  jobColor: string;
};

/**
 * 職業バッジ
 * @param jobName 職業名
 * @param jobCategory 職業カテゴリ
 * @param jobColor バッジの色
 */
export default function JobBadge({ jobName, jobCategory, jobColor }: Props) {
  const color = useConvertColor(jobColor);
  const jobIconPath = `url(/job/${jobCategory}.svg)`;

  return (
    <div
      className={styles.jobBadge}
      style={{
        ["--backgroundColor" as string]: jobColor,
        ["--color" as string]: color,
        ["--jobIconPath" as string]: jobIconPath,
      }}
    >
      <p className={styles.badgeText}>{jobName}</p>
      <div className={styles.jobIcons}></div>
    </div>
  );
}
