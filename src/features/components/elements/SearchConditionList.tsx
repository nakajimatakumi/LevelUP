import DropdownList from "@/features/components/elements/DropdownList";
import styles from "@/features/styles/modules/SearchConditionList.module.css";
import { searchConditions } from "@/types/searchConditions";

type Props = {
  searchConditions: searchConditions;
};

/**
 * 検索条件ドロップダウンリストコンポーネント
 * @param searchConditions 検索条件リスト
 */
export default function SearchConditionList({ searchConditions }: Props) {
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
