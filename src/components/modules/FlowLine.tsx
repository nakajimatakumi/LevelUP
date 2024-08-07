import { ICON_PATH } from "@/constants/IconPathConst";
import styles from "@/styles/components/modules/FlowLine.module.css";
import * as Separator from "@radix-ui/react-separator";
import Image from "next/image";
import Tooltip from "@/components/elements/Tooltip";

type Props = {
  iconPath: string;
  tooltipText: string;
};

/**
 * タイムラインコンポーネント
 * @param iconPath アイコンパス
 * @param tooltipText ツールチップテキスト
 */
export default function FlowLine({ iconPath, tooltipText }: Props) {
  return (
    <div className={styles.root}>
      <Separator.Root
        className={
          iconPath === ICON_PATH.EXPERIENCE
            ? styles.startFirstLine
            : styles.firstLine
        }
      />
      <Tooltip text={tooltipText}>
        <Image
          src={iconPath}
          alt="icon"
          className={styles.icon}
          width={30}
          height={30}
        />
      </Tooltip>
      <Separator.Root
        className={
          iconPath === ICON_PATH.LESSON
            ? styles.endSecondLine
            : styles.secondLine
        }
      />
    </div>
  );
}
