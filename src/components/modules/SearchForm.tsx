import * as Form from "@radix-ui/react-form";
import Button from "../elements/Button";
import styles from "@/styles/components/modules/SearchForm.module.css";
import SearchConditionList from "@/components/elements/SearchConditionList";
import { LABEL } from "@/constants/ButtonLabelConst";
import useSearch from "@/hooks/useSearch";
import Image from "next/image";

/**
 * 検索フォームコンポーネント
 */
export default function SearchForm() {
  const { handleSearch } = useSearch();
  return (
    <Form.Root className={styles.root} action={handleSearch}>
      <Form.Field name="search" className={styles.field}>
        <div className={styles.searchArea}>
          <Image
            src="/icon/search.svg"
            alt="search"
            width={25}
            height={25}
            className={styles.searchIcon}
          />
          <Form.Control asChild>
            <div className={styles.inputArea}>
              <input type="text" className={styles.input} />
            </div>
          </Form.Control>
          <div className={styles.button}>
            <Form.Submit asChild>
              <Button label={LABEL.SEARCH} />
            </Form.Submit>
          </div>
        </div>
        <div className={styles.searchConditionList}>
          <SearchConditionList />
        </div>
      </Form.Field>
    </Form.Root>
  );
}
