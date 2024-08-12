import React from "react";
import * as Select from "@radix-ui/react-select";
import styles from "@/styles/components/elements/DropdownList.module.css";
import Image from "next/image";
import { ListItemsType } from "@/types/SearchConditionType";
import { ICON_PATH } from "@/constants/IconPathConst";

type Props = {
  listItems: ListItemsType[];
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
              src={ICON_PATH.CHEVRON}
              alt="chevron"
              width={14}
              height={14}
              className={styles.chevron}
            />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content
            className={styles.content}
            position="popper"
            side="bottom"
            align="end"
            sideOffset={-2}
          >
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
