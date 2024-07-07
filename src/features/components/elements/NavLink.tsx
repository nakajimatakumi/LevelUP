import Image from "next/image";
import Link from "next/link";
import styles from "@/features/styles/elements/NavLink.module.css";
import { page } from "@/types/page";
import { Kosugi_Maru } from "next/font/google";

const kosugiMaru = Kosugi_Maru({
  subsets: ["latin"],
  weight: ["400"],
});

type props = {
  page: page;
  userId: string;
  isOpen?: boolean;
};

export default function NavLink({ page, userId }: props) {
  return (
    <div className={kosugiMaru.className}>
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
