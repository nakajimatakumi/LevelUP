import DropdownList from "@/components/elements/DropdownList";
import styles from "@/styles/components/elements/SearchConditionList.module.css";
import useInit from "@/hooks/useInit";

type SearchConditionKey = "category" | "job" | "sort";

export default function SearchConditionList() {
  const { initData } = useInit();
  const { searchConditions } = initData;

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
