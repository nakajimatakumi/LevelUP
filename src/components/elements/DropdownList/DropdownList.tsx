import React from "react";
import * as Select from "@radix-ui/react-select";
import styles from "@/components/elements/DropdownList/DropdownList.module.css";
import Image from "next/image";
import { ListItemsType } from "@/types/SearchConditionType";
import { ICON_PATH } from "@/constants/IconPathConst";
import { SIDE } from "@/constants/ParamConst";

type Props = {
  listItems: ListItemsType[];
  name: string;
  isGroup: boolean;
  openSide?: "top" | "bottom";
  value: string;
  onChange: (value: string) => void;
};

/**
 * ドロップダウンリストコンポーネント
 * @param listItems リストアイテム
 * @param name タイトル
 * @param isGroup グループ化するかどうか
 * @param openSide ドロップダウンの開く方向
 * @param value 選択されている値
 * @param onChange 値が変更されたときの処理
 */
export default function DropdownList({
  listItems,
  name,
  isGroup,
  openSide = SIDE.BOTTOM,
  value,
  onChange,
}: Props) {
  return (
    <div className={styles.root}>
      <Select.Root value={value} onValueChange={onChange}>
        <Select.Trigger
          className={styles.trigger}
          data-group={isGroup ? "group" : "normal"}
        >
          <Select.Value className={styles.value} placeholder={name}>
            {value
              ? listItems.find((item) => item.value === value)?.name
              : name}
          </Select.Value>
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
            side={openSide}
            sideOffset={-2}
            align="end"
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
