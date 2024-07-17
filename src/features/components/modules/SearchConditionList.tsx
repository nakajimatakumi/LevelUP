import DropdownList from "@/features/components/elements/DropdownList";
import { category, job, sort } from "@/app/_testData/searchConditions.json";
import styles from "@/features/styles/modules/SearchConditionList.module.css";

/**
 * 検索条件ドロップダウンリストコンポーネント
 */
export default function SearchConditionList() {
  return (
    <div className={styles.root}>
      <DropdownList
        listItems={category.listItems}
        title={category.name}
        isGroup={true}
      />
      <DropdownList listItems={job.listItems} title={job.name} isGroup={true} />
      <DropdownList
        listItems={sort.listItems}
        title={sort.name}
        isGroup={true}
      />
    </div>
  );
}
