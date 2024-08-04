import styles from "@/styles/components/elements/Reflection.module.css";
import Image from "next/image";
import { ICON_PATH } from "@/constants/IconPathConst";
import FlowLine from "./FlowLine";
import { Separator } from "@radix-ui/react-separator";
import { TOOLTIP_TEXT } from "@/constants/TooltipConst";
import Introspection from "./Introspection";
import Improvement from "./Improvement";
import Tooltip from "./Tooltip";

type Props = {
  reflections: {
    positiveList: string[];
    negativeList: string[];
  };
  improvementsList: string[];
};

/**
 * 反省点、改善点を表示するコンポーネント
 * @param reflections よかったこと、わるかったことリスト
 * @param improvementsList 次回はどうしたいかリスト
 */
export default function Reflection({ reflections, improvementsList }: Props) {
  return (
    <div className={styles.reflectionWrapper}>
      <FlowLine
        iconPath={ICON_PATH.REFLECTION}
        tooltipText={TOOLTIP_TEXT.REFLECTION}
      />
      <div className={styles.reflection}>
        <div className={styles.container}>
          <Tooltip text={TOOLTIP_TEXT.INTROSPECTION}>
            <Image
              src={ICON_PATH.INTROSPECTION}
              alt="introspection"
              width={25}
              height={25}
            />
          </Tooltip>
          <Introspection reflections={reflections} />
        </div>
        <Separator className={styles.separator} />
        <div className={styles.container}>
          <Tooltip text={TOOLTIP_TEXT.IMPROVEMENT}>
            <Image
              src={ICON_PATH.IMPROVEMENT}
              alt="improvement"
              width={25}
              height={25}
            />
          </Tooltip>
          <Improvement improvementsList={improvementsList} />
        </div>
      </div>
    </div>
  );
}
