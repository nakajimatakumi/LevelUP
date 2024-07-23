import * as Accordion from "@radix-ui/react-accordion";
import styles from "../../styles/modules/NavLink.module.css";
import { content } from "@/types/content";
import IconWithText from "../elements/IconWithText";
import Link from "next/link";
import Image from "next/image";

type Props = {
  content: content;
  userId: string;
};

/**
 * ナビゲーションリンクコンポーネント
 * @param page ページ情報
 * @param userId ユーザーID
 */
export default function NavLink({ content, userId }: Props) {
  if (content.linkList) {
    return (
      <Accordion.Root type="single" collapsible className={styles.root}>
        <Accordion.Item value="item-1">
          <Accordion.Trigger className={styles.trigger}>
            <IconWithText content={content} userId={userId} />
            <Image
              src="/icon/chevron.svg"
              alt="chevron"
              width={18}
              height={18}
              className={styles.chevron}
            />
          </Accordion.Trigger>
          <Accordion.Content className={styles.content}>
            <ul className={styles.menu}>
              {content.linkList?.map((link) => (
                <Link
                  href={link.PATH}
                  className={styles.navLink}
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
    return <IconWithText content={content} userId={userId} />;
  }
}
