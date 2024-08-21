"use client";

import * as Form from "@radix-ui/react-form";
import Button from "@/components/elements/Button";
import styles from "@/styles/components/layouts/SearchForm.module.css";
import SearchConditionList from "@/components/modules/SearchConditionList";
import { ICON_PATH } from "@/constants/IconPathConst";
import { BUTTON_LABEL } from "@/constants/LabelConst";
import {
  BUTTON_VARIANT,
  COMPONENT_SIZE,
  TEXT_TYPE,
} from "@/constants/ParamConst";
import { FieldValues, useForm } from "react-hook-form";
import Icon from "@/components/elements/Icon";
import { zodResolver } from "@hookform/resolvers/zod";
import { searchSchema } from "@/schemes/SearchScheme";
import Tooltip from "@/components/elements/Tooltip";

/**
 * 検索フォームコンポーネント
 */
export default function SearchForm() {
  /* フォーム管理 */
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(searchSchema),
    mode: "onChange",
  });
  /* 検索ハンドラー */
  const handleSearch = (data: FieldValues) => {
    alert(JSON.stringify(data));
  };

  return (
    <Form.Root className={styles.root} onSubmit={handleSubmit(handleSearch)}>
      <div className={styles.searchArea}>
        <Form.Field name="search" className={styles.field}>
          <Icon
            iconPath={ICON_PATH.SEARCH}
            size={COMPONENT_SIZE.MEDIUM}
            className={styles.searchIcon}
          />
          <Form.Control asChild className={styles.inputArea}>
            <input
              type="text"
              className={styles.input}
              {...register("search")}
            />
          </Form.Control>
          {errors.search && (
            <Tooltip
              message={errors.search.message as string}
              defaultOpen={true}
              type={TEXT_TYPE.ERROR}
            >
              <span />
            </Tooltip>
          )}
        </Form.Field>
        <div className={styles.button}>
          <Form.Submit asChild>
            <Button
              variant={BUTTON_VARIANT.SEARCH}
              size={COMPONENT_SIZE.LARGE}
              disabled={!!errors.search}
            >
              {BUTTON_LABEL.SEARCH}
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
