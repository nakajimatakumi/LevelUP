import { ICON_PATH } from "@/constants/IconPathConst";
import FlowLine from "./FlowLine";
import styles from "@/styles/components/elements/Experience.module.css";
import { TOOLTIP_TEXT } from "@/constants/TooltipConst";

type Props = {
  experience: string;
};

export default function Experience({ experience }: Props) {
  return (
    <div className={styles.experience}>
      <FlowLine
        iconPath={ICON_PATH.EXPERIENCE}
        tooltipText={TOOLTIP_TEXT.EXPERIENCE}
      />
      <p className={styles.experienceContent}>{experience}</p>
    </div>
  );
}
