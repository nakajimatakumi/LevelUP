import Image from "next/image";
import Link from "next/link";
import styles from "@/features/styles/elements/IconWithText.module.css";
import { page } from "@/types/page";

type props = {
  page: page;
  userId: string;
};

/**
 * アイコンとテキストコンポーネント
 * @param page ページ情報
 * @param userId ユーザーID
 */
export default function IconWithText({ page, userId }: props) {
  return (
    <div>
      {page.isLink ? (
        <div>
          <Link href={`/${userId}${page.PATH}`} className={styles.NavLink}>
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
        <div className={styles.NavLinkList}>
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
