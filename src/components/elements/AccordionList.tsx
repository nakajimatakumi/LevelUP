import * as Accordion from "@radix-ui/react-accordion";
import styles from "@/styles/components/elements/AccordionList.module.css";
import Image from "next/image";
import { ICON_PATH } from "@/constants/IconPathConst";
import { BUTTON_VARIANT } from "@/constants/ParamConst";
import Button from "./Button";
import WordText from "./WordText";
import { COMPONENT_LENGTH, COMPONENT_SIZE } from "@/constants/ParamConst";
import { Separator } from "@radix-ui/react-select";

type Props = {
  children: React.ReactNode;
  listItems: { ItemName: string; ItemId: string }[];
  onClick?: (content?: string) => void;
};

/**
 * アコーディオンリストコンポーネント
 * @param children トリガー
 */
export default function AccordionList({ children, listItems, onClick }: Props) {
  return (
    <Accordion.Root type="single" collapsible className={styles.root}>
      <Accordion.Item value="item-1">
        <Accordion.Trigger className={styles.trigger}>
          {children}
          <Image
            src={ICON_PATH.CHEVRON}
            alt="chevron"
            width={18}
            height={18}
            className={styles.chevron}
          />
        </Accordion.Trigger>
        <Accordion.Content className={styles.content}>
          <ul className={styles.listItems}>
            <Separator className={styles.separator} />
            {listItems.map((item, index) => (
              <Button
                variant={BUTTON_VARIANT.NONE}
                key={index}
                onClick={() => onClick?.(item.ItemId)}
              >
                <li className={styles.listItem}>
                  <WordText
                    text={item.ItemName}
                    size={COMPONENT_SIZE.MEDIUM}
                    length={COMPONENT_LENGTH.SHORT}
                  />
                </li>
              </Button>
            ))}
          </ul>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
