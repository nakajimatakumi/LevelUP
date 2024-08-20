"use client";

import styles from "@/styles/components/modules/NewPost.module.css";
import {
  BUTTON_VARIANT,
  COMPONENT_SIZE,
  FORM_FIELD,
  SIDE,
} from "@/constants/ParamConst";
import * as Form from "@radix-ui/react-form";
import { BUTTON_LABEL } from "@/constants/LabelConst";
import Button from "@/components/elements/Button";
import DropdownList from "@/components/elements/DropdownList";
import PrivateToggle from "@/components/elements/PrivateToggle";
import useInit from "@/logics/hooks/useInit";
import { FieldValues, useForm, useController } from "react-hook-form";
import { NewExperience } from "./NewExperience";
import { NewReflection } from "./NewReflection";
import { NewLesson } from "./NewLesson";

/*
 * 投稿フォーム
 */
export default function NewPost() {
  /* フォーム */
  const { control, handleSubmit, formState } = useForm({
    mode: "onChange",
  });

  /* カテゴリー */
  const {
    field: { onChange: onChangeCategory, value: valueCategory },
    fieldState: { error: errorCategory },
  } = useController({
    name: FORM_FIELD.CATEGORY,
    control,
  });

  /* 公開設定 */
  const {
    field: { onChange: onChangePublic, value: valuePublic },
    fieldState: { error: errorPublic },
  } = useController({
    name: FORM_FIELD.PRIVATE,
    control,
    defaultValue: false,
  });

  /* 初期データ取得処理 */
  const { initData } = useInit();
  /* カテゴリー */
  const { name: categoryName, listItems: categoryList } =
    initData.searchConditions.category;

  //Todo 後で消す
  const onSubmit = (data: FieldValues) => {
    alert(JSON.stringify(data));
  };

  return (
    <Form.Root className={styles.root} onSubmit={handleSubmit(onSubmit)}>
      <NewExperience control={control} />
      <NewReflection control={control} />
      <NewLesson control={control} />
      <div className={styles.bottomContent}>
        <Form.Field name={FORM_FIELD.CATEGORY} className={styles.field}>
          <DropdownList
            listItems={categoryList}
            name={categoryName}
            isGroup={false}
            openSide={SIDE.TOP}
            onChange={onChangeCategory}
            value={valueCategory}
          />
        </Form.Field>
        <Form.Field name={FORM_FIELD.PRIVATE} className={styles.field}>
          <PrivateToggle
            size={COMPONENT_SIZE.LARGE}
            onChange={onChangePublic}
            value={valuePublic}
          />
        </Form.Field>
      </div>
      <div className={styles.submit}>
        <Form.Submit asChild>
          <Button
            size={COMPONENT_SIZE.MEDIUM}
            variant={BUTTON_VARIANT.SUBMIT}
            disabled={!formState.isValid}
          >
            {BUTTON_LABEL.POST}
          </Button>
        </Form.Submit>
      </div>
    </Form.Root>
  );
}
