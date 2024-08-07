import DropdownList from "@/components/elements/DropdownList";
import styles from "@/styles/components/modules/SearchConditionList.module.css";
import useInit from "@/logics/hooks/useInit";

type SearchConditionKey = "category" | "job" | "sort";

/**
 * 検索条件リストコンポーネント
 */
export default function SearchConditionList() {
  /* 初期データ取得処理 */
  const { initData } = useInit();
  const { searchConditions } = initData;

  /* 検索条件キー */
  const searchConditionKeys: SearchConditionKey[] = ["category", "job", "sort"];

  return (
    <div className={styles.root}>
      {searchConditionKeys.map((key) => (
        <DropdownList
          key={key}
          listItems={searchConditions[key].listItems}
          name={searchConditions[key].name}
          isGroup={true}
        />
      ))}
    </div>
  );
}
