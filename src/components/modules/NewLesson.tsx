"use client";

import * as Form from "@radix-ui/react-form";
import { Control, FieldValues, useController } from "react-hook-form";
import {
  COMPONENT_HEIGHT,
  COMPONENT_LENGTH,
  COMPONENT_SIZE,
  FORM_FIELD,
  TEXT_SIZE,
  TEXT_TYPE,
} from "@/constants/ParamConst";
import { HEADER_LABEL } from "@/constants/LabelConst";
import { ICON_PATH } from "@/constants/IconPathConst";
import { PLACEHOLDER } from "@/constants/MessageTemplateConst";
import { Icon, TextArea, WordText } from "@/components";
import styles from "@/styles/components/modules/NewLesson.module.css";

type Props = {
  control: Control<FieldValues>;
};

/**
 * 新規投稿教訓コンポーネント
 * @param control フォーム管理
 */
export default function NewLesson({ control }: Props) {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name: FORM_FIELD.LESSON,
    control,
  });

  return (
    <Form.Field name={FORM_FIELD.LESSON} className={styles.field}>
      <Form.Label className={styles.headLabel}>
        <WordText
          text={HEADER_LABEL.LESSON}
          size={COMPONENT_SIZE.MEDIUM}
          length={COMPONENT_LENGTH.FIT}
        />
        <Icon iconPath={ICON_PATH.LESSON} size={COMPONENT_SIZE.MEDIUM} />
      </Form.Label>
      <Form.Control asChild>
        <TextArea
          height={COMPONENT_HEIGHT.HIGH}
          isListType={true}
          placeholder={PLACEHOLDER.LESSON}
          value={value}
          onChange={onChange}
        />
      </Form.Control>
      {error?.message && (
        <Form.Message className={styles.errorMessage}>
          <WordText
            text={error.message}
            size={TEXT_SIZE.EXTRA_SMALL}
            length={COMPONENT_LENGTH.FIT}
            type={TEXT_TYPE.ERROR}
          />
        </Form.Message>
      )}
    </Form.Field>
  );
}
