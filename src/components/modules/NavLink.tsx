import * as Accordion from "@radix-ui/react-accordion";
import styles from "@/styles/components/modules/NavLink.module.css";
import { contentType } from "@/types/ContentType";
import IconWithText from "../elements/IconWithText";
import Link from "next/link";
import Image from "next/image";

type Props = {
  content: contentType;
};

/**
 * ナビゲーションリンクコンポーネント
 * @param page ページ情報
 */
export default function NavLink({ content }: Props) {
  if (content.linkList) {
    return (
      <Accordion.Root type="single" collapsible className={styles.root}>
        <Accordion.Item value="item-1">
          <Accordion.Trigger className={styles.trigger}>
            <IconWithText content={content} />
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
              {content.linkList?.map((link, index) => (
                <Link href={link.PATH} className={styles.navLink} key={index}>
                  <li>{link.PAGE_NAME}</li>
                </Link>
              ))}
            </ul>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    );
  } else {
    return <IconWithText content={content} />;
  }
}
