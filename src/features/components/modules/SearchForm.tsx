import * as Form from "@radix-ui/react-form";
import Button from "../elements/Button";
import styles from "../../styles/modules/SearchForm.module.css";
import SearchConditionList from "./SearchConditionList";

/**
 * 検索フォームコンポーネント
 */
export default function SearchForm() {
  return (
    <Form.Root className={styles.root}>
      <Form.Field name="search" className={styles.field}>
        <div className={styles.searchArea}>
          <Form.Control asChild>
            <div className={styles.inputArea}>
              <input type="text" className={styles.input} />
            </div>
          </Form.Control>
          <Form.Submit asChild className={styles.button}>
            <Button label="検索" />
          </Form.Submit>
        </div>
        <div className={styles.searchConditionList}>
          <SearchConditionList />
        </div>
      </Form.Field>
    </Form.Root>
  );
}
