import styles from "@/styles/components/modules/NewLesson.module.css";
import WordText from "@/components/elements/WordText";
import {
  COMPONENT_HEIGHT,
  COMPONENT_LENGTH,
  COMPONENT_SIZE,
  FORM_FIELD,
  TEXT_SIZE,
  TEXT_TYPE,
} from "@/constants/ParamConst";
import { HEADER_LABEL } from "@/constants/LabelConst";
import Icon from "@/components/elements/Icon";
import { ICON_PATH } from "@/constants/IconPathConst";
import * as Form from "@radix-ui/react-form";
import { TextArea } from "@/components/elements/TextArea";
import { PLACEHOLDER } from "@/constants/MessageTemplateConst";
import { Control, FieldValues, useController } from "react-hook-form";
type Props = {
  control: Control<FieldValues>;
};

/**
 * 新規投稿教訓コンポーネント
 */
export const NewLesson = ({ control }: Props) => {
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
};
