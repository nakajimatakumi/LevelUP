import Image from "next/image";
import styles from "@/styles/components/elements/UserIcon.module.css";
import { userIconInfoType } from "@/types/UserInfoType";

type Props = {
  userIconInfo: userIconInfoType;
};

/**
 * ユーザーアイコンコンポーネント
 */

export default function UserIcon({ userIconInfo }: Props) {
  return (
    <div className={styles.icon}>
      <span
        className={styles.color}
        style={{ ["--color" as string]: userIconInfo.iconColor }}
      />
      <Image
        src={userIconInfo.hairPath}
        alt="髪型"
        width={30}
        height={30}
        className={styles.faceLayer}
      />
      <Image
        src={userIconInfo.facePath}
        alt="表情"
        width={30}
        height={30}
        className={styles.faceLayer}
      />
      <span className={styles.border} />
    </div>
  );
}
