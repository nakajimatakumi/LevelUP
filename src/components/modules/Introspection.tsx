import styles from "@/styles/components/modules/Introspection.module.css";
import ListText from "../elements/ListText";
import { TEXT_STYLE } from "@/constants/ParamConst";

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
      <div className={styles.reflectionContainer}>
        <ListText
          textList={reflections.positiveList}
          textStyle={TEXT_STYLE.POSITIVE}
          lineClamp={1}
          fontSize={16}
          lineHeight={1.5}
        />
        <ListText
          textList={reflections.negativeList}
          textStyle={TEXT_STYLE.NEGATIVE}
          lineClamp={1}
          fontSize={16}
          lineHeight={1.5}
        />
      </div>
    </>
  );
}
