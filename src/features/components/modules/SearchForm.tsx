import * as Form from "@radix-ui/react-form";
import Button from "../elements/Button";
import styles from "../../styles/modules/SearchForm.module.css";

/**
 * 検索フォームコンポーネント
 */
export default function SearchForm() {
  return (
    <Form.Root className={styles.root}>
      <Form.Field name="search" className={styles.field}>
        <Form.Control asChild>
          <div className={styles.inputArea}>
            <input type="text" className={styles.input} />
          </div>
        </Form.Control>
        <Form.Submit asChild className={styles.button}>
          <Button label="検索" />
        </Form.Submit>
      </Form.Field>
    </Form.Root>
  );
}
