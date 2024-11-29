import { TEXT_STYLE } from "@/constants/ParamConst";
import { ListText } from "@/components";
import styles from "@/styles/components/modules/Introspection.module.css";

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
          fontSize={16}
          lineHeight={1.5}
        />
        <ListText
          textList={reflections.negativeList}
          textStyle={TEXT_STYLE.NEGATIVE}
          fontSize={16}
          lineHeight={1.5}
        />
      </div>
    </>
  );
}
