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
      <Separator.Root className={styles.firstLine} />
      <Image
        src={iconPath}
        alt="icon"
        className={styles.icon}
        width={25}
        height={25}
      />
      <Separator.Root className={styles.secondLine} />
    </div>
  );
}
