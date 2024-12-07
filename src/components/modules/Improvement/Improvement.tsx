import { TEXT_STYLE } from "@/constants/ParamConst";
import { ListText } from "@/components";
import styles from "@/components/modules/Improvement/Improvement.module.css";
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
        fontSize={16}
        lineHeight={1.5}
      />
    </div>
  );
}
