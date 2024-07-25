import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/components/elements/IconWithText.module.css";
import { contentType } from "@/types/ContentType";

type Props = {
  content: contentType;
};

/**
 * アイコンとテキストコンポーネント
 * @param content 表示内容
 * @param userId ユーザーID
 */
export default function IconWithText({ content }: Props) {
  // デフォルト以外のスタイルを適用する場合のクラス名

  // 共通の部品
  const contents: React.ReactNode = (
    <>
      <Image
        src={content.ICON_PATH}
        alt={content.PAGE_NAME}
        width={35}
        height={35}
        className={styles.icon}
        data-type={content.TYPE}
      />
      <p className={styles.pageName}>{content.PAGE_NAME}</p>
    </>
  );

  return (
    <>
      {content.isLink ? (
        <div>
          <Link
            href={content.PATH ?? "/"}
            className={styles.link}
            data-type={content.TYPE}
          >
            {contents}
          </Link>
        </div>
      ) : (
        <div className={styles.notLink} data-type={content.TYPE}>
          {contents}
        </div>
      )}
    </>
  );
}
