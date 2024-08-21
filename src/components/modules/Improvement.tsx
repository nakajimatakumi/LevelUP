import styles from "@/styles/components/modules/Improvement.module.css";
import ListText from "../elements/ListText";
import { TEXT_STYLE } from "@/constants/ParamConst";

type Props = {
  improvementsList: string[];
};

/**
 * 次回はどうしたいかを表示するコンポーネント
 * @param improvementsList 次回はどうしたいかリスト
 */
export default function Improvement({ improvementsList }: Props) {
  return (
    <div className={styles.improvementContainer}>
      <ListText
        textList={improvementsList}
        textStyle={TEXT_STYLE.NORMAL}
        lineClamp={1}
        fontSize={16}
        lineHeight={1.5}
      />
    </div>
  );
}
