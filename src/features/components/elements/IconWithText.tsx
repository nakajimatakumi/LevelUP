import Image from "next/image";
import Link from "next/link";
import styles from "@/features/styles/elements/IconWithText.module.css";
import { page } from "@/types/page";

/**
 * アイコンとテキストコンポーネント
 * @param page ページ情報
 * @param userId ユーザーID
 */

type props = {
  page: page;
  userId: string;
};

export default function IconWithText({ page, userId }: props) {
  return (
    <div>
      {page.isLink ? (
        <div>
          <Link href={`/${userId}${page.PATH}`} className={styles.navLink}>
            <Image
              src={page.ICON_PATH}
              alt={page.PAGE_NAME}
              width={35}
              height={35}
            />
            <p className={styles.pageName}>{page.PAGE_NAME}</p>
          </Link>
        </div>
      ) : (
        <div className={styles.navLinkList}>
          <Image
            src={page.ICON_PATH}
            alt={page.PAGE_NAME}
            width={35}
            height={35}
          />
          <p className={styles.pageName}>{page.PAGE_NAME}</p>
        </div>
      )}
    </div>
  );
}
