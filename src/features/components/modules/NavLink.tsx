import * as Accordion from "@radix-ui/react-accordion";
import styles from "../../styles/modules/NavLink.module.css";
import { page } from "@/types/page";
import IconWithText from "../elements/IconWithText";
import Link from "next/link";
import Image from "next/image";

export type props = {
  page: page;
  userId: string;
};

/**
 * ナビゲーションリンクコンポーネント
 * @param page ページ情報
 * @param userId ユーザーID
 */
export default function NavLink({ page, userId }: props) {
  if (page.linkList) {
    return (
      <Accordion.Root type="single" collapsible className={styles.root}>
        <Accordion.Item value="item-1">
          <Accordion.Trigger className={styles.Trigger}>
            <IconWithText page={page} userId={userId} />
            <Image
              src="/icon/chevron.svg"
              alt="chevron"
              width={18}
              height={18}
              className={styles.chevron}
            />
          </Accordion.Trigger>
          <Accordion.Content className={styles.Content}>
            <ul className={styles.menu}>
              {page.linkList?.map((link) => (
                <Link
                  href={link.PATH}
                  className={styles.NavLink}
                  key={link.PATH}
                >
                  <li>{link.PAGE_NAME}</li>
                </Link>
              ))}
            </ul>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    );
  } else {
    return <IconWithText page={page} userId={userId} />;
  }
}
