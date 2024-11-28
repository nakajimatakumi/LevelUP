"use client";

import styles from "@/styles/components/modules/NewPost.module.css";
import {
  BUTTON_VARIANT,
  COMPONENT_LENGTH,
  COMPONENT_SIZE,
  FORM_FIELD,
  SIDE,
  TEXT_SIZE,
  TEXT_TYPE,
} from "@/constants/ParamConst";
import * as Form from "@radix-ui/react-form";
import { BUTTON_LABEL } from "@/constants/LabelConst";
import {
  Button,
  DropdownList,
  PrivateToggle,
  NewExperience,
  NewReflection,
  NewLesson,
  WordText,
  MessageDialog,
} from "@/components";
import useInit from "@/logics/hooks/useInit";
import { FieldValues, useForm, useController } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { postSchema } from "@/schemes/PostScheme";
import { useState } from "react";
import {
  MESSAGE_PARAMS,
  MESSAGE_TEMPLATE,
} from "@/constants/MessageTemplateConst";
import generateMessage from "@/logics/functions/GenerateMessage";

/*
 * 投稿フォーム
 */
export default function NewPost() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  /* フォーム */
  const { control, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: zodResolver(postSchema),
  });

  /* カテゴリのコントロール */
  const {
    field: { onChange: onChangeCategory, value: valueCategory },
    fieldState: { error: errorCategory },
  } = useController({
    name: FORM_FIELD.CATEGORY,
    control,
  });

  /* 公開設定のコントロール */
  const {
    field: { onChange: onChangePublic, value: valuePublic },
  } = useController({
    name: FORM_FIELD.PRIVATE,
    control,
    defaultValue: false,
  });

  /* 初期データ取得処理 */
  const { initData } = useInit();

  /* カテゴリの初期データ */
  const { name: categoryName, listItems: categoryList } =
    initData.searchConditions.category;

  /* 投稿ボタン押下時処理 */
  const onSubmit = (data: FieldValues) => {
    valueCategory
      ? (alert(JSON.stringify(data)), console.log(data))
      : setIsDialogOpen(true);
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
          {errorCategory?.message && (
            <Form.Message className={styles.errorMessage}>
              <WordText
                text={errorCategory.message}
                size={TEXT_SIZE.EXTRA_SMALL}
                length={COMPONENT_LENGTH.FIT}
                type={TEXT_TYPE.ERROR}
              />
            </Form.Message>
          )}
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
        <MessageDialog
          title={generateMessage(MESSAGE_TEMPLATE.NOT_SELECTED_MESSAGE, [
            MESSAGE_PARAMS.CATEGORY,
          ])}
          description={generateMessage(MESSAGE_TEMPLATE.SELECT_MESSAGE, [
            MESSAGE_PARAMS.CATEGORY,
          ])}
          dispButton={false}
          isOpen={isDialogOpen}
          onOpenChange={setIsDialogOpen}
        >
          <span />
        </MessageDialog>
      </div>
    </Form.Root>
  );
}
