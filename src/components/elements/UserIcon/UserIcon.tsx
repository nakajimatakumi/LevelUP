import Image from "next/image";
import clsx from "clsx";
import { UserIconInfoType } from "@/types/UserInfoType";
import styles from "@/components/elements/UserIcon/UserIcon.module.css";

type Props = {
  size: "small" | "medium" | "large" | "none";
  userIconInfo: UserIconInfoType;
  className?: string;
};

/**
 * ユーザーアイコンコンポーネント
 * @param size ユーザーアイコンのサイズ
 * @param userIconInfo ユーザーアイコン情報
 * @param className クラス名
 */
export default function UserIcon({ size, userIconInfo, className }: Props) {
  return (
    <div className={clsx(styles.icon, styles[size], className)}>
      <span
        className={clsx(styles.color, className)}
        style={{ ["--color" as string]: userIconInfo.iconColor }}
      />
      <Image
        src={userIconInfo.hairPath}
        alt="髪型"
        width={30}
        height={30}
        className={clsx(styles.faceLayer, className)}
      />
      <Image
        src={userIconInfo.facePath}
        alt="表情"
        width={30}
        height={30}
        className={clsx(styles.faceLayer, className)}
      />
      <span className={clsx(styles.border, className)} />
    </div>
  );
}
