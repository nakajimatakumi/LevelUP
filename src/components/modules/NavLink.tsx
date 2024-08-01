import * as Accordion from "@radix-ui/react-accordion";
import styles from "@/styles/components/modules/NavLink.module.css";
import { contentType } from "@/types/ContentType";
import IconWithText from "../elements/IconWithText";
import Link from "next/link";
import Image from "next/image";
import { ICON_PATH } from "@/constants/IconPathConst";

type Props = {
  content: contentType;
};

/**
 * ナビゲーションリンクコンポーネント
 * @param content リンク情報
 */
export default function NavLink({ content }: Props) {
  return content.linkList ? (
    <Accordion.Root type="single" collapsible className={styles.root}>
      <Accordion.Item value="item-1">
        <Accordion.Trigger className={styles.trigger} data-type={content.type}>
          <IconWithText content={content} />
          <Image
            src={ICON_PATH.CHEVRON}
            alt="chevron"
            width={18}
            height={18}
            className={styles.chevron}
          />
        </Accordion.Trigger>
        <Accordion.Content className={styles.content} data-type={content.type}>
          <ul className={styles.menu}>
            {content.linkList?.map((link, index) => (
              <Link href={link.path} className={styles.navLink} key={index}>
                <li>{link.pageName}</li>
              </Link>
            ))}
          </ul>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  ) : (
    <IconWithText content={content} />
  );
}
