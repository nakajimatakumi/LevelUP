import DropdownList from "@/components/elements/DropdownList";
import styles from "@/styles/components/elements/SearchConditionList.module.css";
import useInit from "@/hooks/useInit";

/**
 * 検索条件ドロップダウンリストコンポーネント
 * @param searchConditions 検索条件リスト
 */
export default function SearchConditionList() {
  const { initData } = useInit();
  const searchConditions = initData.searchConditions;

  return (
    <div className={styles.root}>
      <DropdownList
        listItems={searchConditions.category.listItems}
        name={searchConditions.category.name}
        isGroup={true}
      />
      <DropdownList
        listItems={searchConditions.job.listItems}
        name={searchConditions.job.name}
        isGroup={true}
      />
      <DropdownList
        listItems={searchConditions.sort.listItems}
        name={searchConditions.sort.name}
        isGroup={true}
      />
    </div>
  );
}
