import { ICON_PATH } from "@/constants/IconPathConst";
import styles from "@/styles/components/elements/FlowLine.module.css";
import * as Separator from "@radix-ui/react-separator";
import Image from "next/image";

type Props = {
  iconPath: string;
};

/**
 * タイムラインコンポーネント
 * @param iconPath アイコンパス
 */
export default function FlowLine({ iconPath }: Props) {
  return (
    <div className={styles.root}>
      <Separator.Root
        className={
          iconPath === ICON_PATH.EXPERIENCE
            ? styles.startFirstLine
            : styles.firstLine
        }
      />
      <Image
        src={iconPath}
        alt="icon"
        className={styles.icon}
        width={30}
        height={30}
      />
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
