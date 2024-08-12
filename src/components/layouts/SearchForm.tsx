import * as Form from "@radix-ui/react-form";
import Button from "@/components/elements/Button";
import styles from "@/styles/components/layouts/SearchForm.module.css";
import SearchConditionList from "@/components/modules/SearchConditionList";
import useSearch from "@/logics/hooks/useSearch";
import Image from "next/image";
import { ICON_PATH } from "@/constants/IconPathConst";
import { LABEL, SIZE, VARIANT } from "@/constants/ButtonConst";

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
            src={ICON_PATH.SEARCH}
            alt="search"
            width={25}
            height={25}
            className={styles.searchIcon}
          />
          <Form.Control asChild className={styles.inputArea}>
            <div>
              <input type="text" className={styles.input} />
            </div>
          </Form.Control>
          <div className={styles.button}>
            <Form.Submit asChild>
              <Button variant={VARIANT.SEARCH} size={SIZE.LARGE}>
                {LABEL.SEARCH}
              </Button>
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
