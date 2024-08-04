import styles from "@/styles/components/elements/Lesson.module.css";
import { ICON_PATH } from "@/constants/IconPathConst";
import FlowLine from "./FlowLine";
import { TOOLTIP_TEXT } from "@/constants/TooltipConst";

type Props = {
  lessonsList: string[];
};

export default function Lesson({ lessonsList }: Props) {
  return (
    <div className={styles.lesson}>
      <FlowLine iconPath={ICON_PATH.LESSON} tooltipText={TOOLTIP_TEXT.LESSON} />
      <ul className={styles.lessonContents}>
        {lessonsList.map((lesson, index) => (
          <li key={index} className={styles.lessonContent}>
            {lesson}
          </li>
        ))}
      </ul>
    </div>
  );
}
