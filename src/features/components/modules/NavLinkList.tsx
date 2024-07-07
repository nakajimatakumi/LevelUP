import * as Accordion from "@radix-ui/react-accordion";
import styles from "../../styles/modules/NavLinkList.module.css";
import { page } from "@/types/page";
import NavLink from "../elements/NavLink";
import Link from "next/link";
import Image from "next/image";

export type props = {
  page: page;
  userId: string;
};

export default function NavLinkList({ page, userId }: props) {
  return (
    <Accordion.Root type="single" collapsible className={styles.root}>
      <Accordion.Item value="item-1">
        <Accordion.Trigger className={styles.Trigger}>
          <NavLink page={page} userId={userId} />
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
              <Link href={link.PATH} className={styles.NavLink}>
                <li>{link.PAGE_NAME}</li>
              </Link>
            ))}
          </ul>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
