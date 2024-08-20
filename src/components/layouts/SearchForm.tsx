"use client";

import * as Form from "@radix-ui/react-form";
import Button from "@/components/elements/Button";
import styles from "@/styles/components/layouts/SearchForm.module.css";
import SearchConditionList from "@/components/modules/SearchConditionList";
import useSearch from "@/logics/hooks/useSearch";
import Image from "next/image";
import { ICON_PATH } from "@/constants/IconPathConst";
import { LABEL, SIZE, VARIANT } from "@/constants/ButtonConst";
import { FieldValues, useForm } from "react-hook-form";
import Icon from "../elements/Icon";

/**
 * 検索フォームコンポーネント
 */
export default function SearchForm() {
  const { handleSubmit, register, control } = useForm({
    mode: "onChange",
  });
  const handleSearch = (data: FieldValues) => {
    alert(JSON.stringify(data));
  };
  return (
    <Form.Root className={styles.root} onSubmit={handleSubmit(handleSearch)}>
      <div className={styles.searchArea}>
        <Form.Field name="search" className={styles.field}>
          <Icon
            iconPath={ICON_PATH.SEARCH}
            size={SIZE.MEDIUM}
            className={styles.searchIcon}
          />
          <Form.Control asChild className={styles.inputArea}>
            <input
              type="text"
              className={styles.input}
              {...register("search")}
            />
          </Form.Control>
        </Form.Field>
        <div className={styles.button}>
          <Form.Submit asChild>
            <Button variant={VARIANT.SEARCH} size={SIZE.LARGE}>
              {LABEL.SEARCH}
            </Button>
          </Form.Submit>
        </div>
      </div>
      <div className={styles.searchConditionList}>
        <SearchConditionList control={control} />
      </div>
    </Form.Root>
  );
}
