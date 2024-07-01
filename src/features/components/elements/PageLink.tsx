import Image from "next/image";
import Link from "next/link";
import styles from "@/features/styles/elements/PageLink.module.css";
import { page } from "@/types/page";

type props = {
  page: page;
  userId: string;
};

export default function PageLink({ page, userId }: props) {
  return (
    <div>
      <Link href={`/${userId}${page.PATH}`} className={styles.pageLink}>
        <Image
          src={page.ICON_PATH}
          alt={page.PAGE_NAME}
          width={35}
          height={35}
        />
        <p className={styles.pageName}>{page.PAGE_NAME}</p>
      </Link>
    </div>
  );
}
