"use client";

import * as Form from "@radix-ui/react-form";
import Button from "../elements/Button";
import styles from "../../styles/modules/SearchForm.module.css";
import SearchConditionList from "./SearchConditionList";
import { searchConditions } from "@/types/searchConditions";
import { LABEL } from "@/constants/buttonLabel";
import { useSearch } from "@/hooks/useSearch";
import Image from "next/image";

type Props = {
  searchConditions: searchConditions;
};

/**
 * 検索フォームコンポーネント
 */
export default function SearchForm({ searchConditions }: Props) {
  const { handleSearch } = useSearch();

  return (
    <Form.Root className={styles.root} onSubmit={handleSearch}>
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
          <SearchConditionList searchConditions={searchConditions} />
        </div>
      </Form.Field>
    </Form.Root>
  );
}
