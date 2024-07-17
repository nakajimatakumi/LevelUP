import React from "react";
import * as Select from "@radix-ui/react-select";
import styles from "@/features/styles/elements/DropdownList.module.css";
import Image from "next/image";
import { listItem } from "@/types/searchConditions";

/**
 * ドロップダウンリストコンポーネント
 * @param listItems リストアイテム
 */

type Props = {
  listItems: listItem[];
  title: string;
  isGroup: boolean;
};

export default function DropdownList({ listItems, title, isGroup }: Props) {
  return (
    <div className={styles.root}>
      <Select.Root>
        <Select.Trigger
          className={styles.trigger}
          data-group={isGroup ? "group" : "normal"}
        >
          <Select.Value className={styles.value} placeholder={title} />
          <Select.Icon className={styles.icon} asChild={true}>
            <Image
              src="/icon/chevron.svg"
              alt="chevron"
              width={14}
              height={14}
              className={styles.chevron}
            />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className={styles.content}>
            <Select.Viewport className={styles.viewport}>
              {listItems.map((item) => (
                <Select.Item
                  className={styles.item}
                  value={item.value}
                  key={item.value}
                >
                  <Select.ItemText>{item.name}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
}
