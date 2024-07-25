import React from "react";
import * as Select from "@radix-ui/react-select";
import styles from "@/styles/components/elements/DropdownList.module.css";
import Image from "next/image";
import { listItemsType } from "@/types/SearchConditionType";

type Props = {
  listItems: listItemsType[];
  name: string;
  isGroup: boolean;
};

/**
 * ドロップダウンリストコンポーネント
 * @param listItems リストアイテム
 * @param name タイトル
 * @param isGroup グループ化するかどうか
 */
export default function DropdownList({ listItems, name, isGroup }: Props) {
  return (
    <div className={styles.root}>
      <Select.Root>
        <Select.Trigger
          className={styles.trigger}
          data-group={isGroup ? "group" : "normal"}
        >
          <Select.Value className={styles.value} placeholder={name} />
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
