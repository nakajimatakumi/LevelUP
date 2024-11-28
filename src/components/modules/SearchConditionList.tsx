"use client";

import { DropdownList } from "@/components";
import styles from "@/styles/components/modules/SearchConditionList.module.css";
import useInit from "@/logics/hooks/useInit";
import * as Form from "@radix-ui/react-form";
import { Control, FieldValues, useController } from "react-hook-form";

type Props = {
  control: Control<FieldValues>;
};

/**
 * 検索条件リストコンポーネント
 * @param control コントロール
 */
export default function SearchConditionList({ control }: Props) {
  /* 初期データ取得処理 */
  const { initData } = useInit();
  const { searchConditions } = initData;

  /* 検索条件キー */
  const searchConditionKeys: (keyof typeof searchConditions)[] = [
    "category",
    "job",
    "sort",
  ];

  /* 各検索条件に対してuseControllerを使用 */
  const categoryController = useController({
    control,
    name: searchConditionKeys[0],
  });

  const jobController = useController({
    control,
    name: searchConditionKeys[1],
  });

  const sortController = useController({
    control,
    name: searchConditionKeys[2],
  });

  const controllers = [categoryController, jobController, sortController];

  return (
    <div className={styles.root}>
      {searchConditionKeys.map((key, index) => (
        <Form.Field name={key} key={key}>
          <DropdownList
            key={key}
            listItems={searchConditions[key].listItems}
            name={searchConditions[key].name}
            isGroup={true}
            value={controllers[index].field.value}
            onChange={controllers[index].field.onChange}
          />
        </Form.Field>
      ))}
    </div>
  );
}
