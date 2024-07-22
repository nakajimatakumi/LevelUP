import Image from "next/image";
import Link from "next/link";
import styles from "@/features/styles/elements/IconWithText.module.css";
import { page } from "@/types/page";

type Props = {
  page: page;
  userId: string;
};

/**
 * アイコンとテキストコンポーネント
 * @param page ページ情報
 * @param userId ユーザーID
 */
export default function IconWithText({ page, userId }: Props) {
  // デフォルト以外のスタイルを適用する場合のクラス名

  // 共通の部品
  const contents: React.ReactNode = (
    <>
      <Image
        src={page.ICON_PATH}
        alt={page.PAGE_NAME}
        width={35}
        height={35}
        className={styles.icon}
        data-type={page.type}
      />
      <p className={styles.pageName}>{page.PAGE_NAME}</p>
    </>
  );

  return (
    <>
      {page.isLink ? (
        <div>
          <Link
            href={`/${userId}${page.PATH}`}
            className={styles.link}
            data-type={page.type}
          >
            {contents}
          </Link>
        </div>
      ) : (
        <div className={styles.notLink} data-type={page.type}>
          {contents}
        </div>
      )}
    </>
  );
}
