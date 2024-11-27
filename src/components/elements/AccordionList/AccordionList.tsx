import Image from "next/image";
import * as Accordion from "@radix-ui/react-accordion";
import { Separator } from "@radix-ui/react-select";
import { clsx } from "clsx";
import { ICON_PATH } from "@/constants/IconPathConst";
import { BUTTON_VARIANT, COMPONENT_LENGTH, COMPONENT_SIZE } from "@/constants/ParamConst";
import {
  Button,
  WordText
} from "@/components";
import styles from "@/components/elements/AccordionList/AccordionList.module.css";


export type AccordionListProps = {
  children: React.ReactNode;
  listItems: { ItemName: string; ItemId: string }[];
  onClick?: (content?: string) => void;
  width?: typeof COMPONENT_LENGTH[keyof typeof COMPONENT_LENGTH];
};

/**
 * アコーディオンリストコンポーネント
 * @param children トリガー
 * @param listItems リストアイテム
 * @param onClick リストアイテムをクリックした時のイベント
 * @param width トリガーの幅
 */
export default function AccordionList({ children, listItems, onClick, width }: AccordionListProps) {
  /** トリガーのクラス名 */
  const classNames = clsx(styles.trigger, width && styles[width]);
  return (
    <Accordion.Root type="single" collapsible className={styles.root}>
      <Accordion.Item value="item-1">
        <Accordion.Trigger className={classNames}>
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
