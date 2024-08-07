import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/components/elements/IconWithText.module.css";
import { contentType } from "@/types/ContentType";
import UserIcon from "./UserIcon";

type Props = {
  content: contentType;
};

/**
 * アイコンとテキストコンポーネント
 * @param content 表示内容
 */
export default function IconWithText({ content }: Props) {
  const image = content.userIconInfo ? (
    <UserIcon userIconInfo={content.userIconInfo} />
  ) : (
    <Image
      src={content.iconPath ?? ""}
      alt={content.pageName}
      width={35}
      height={35}
      className={styles.icon}
      data-type={content.type}
    />
  );

  return (
    <>
      {/* リンクがある場合 */}
      {content.isLink ? (
        <div className={styles.root}>
          <Link
            href={content.path ?? "/"}
            className={styles.link}
            data-type={content.type}
          >
            {image}
            <p className={styles.pageName}>{content.pageName}</p>
          </Link>
        </div>
      ) : (
        /* リンクがない場合 */
        <div className={styles.notLink} data-type={content.type}>
          {image}
          <p className={styles.pageName}>{content.pageName}</p>
        </div>
      )}
    </>
  );
}
