import styles from "@/styles/components/modules/NewReflection.module.css";
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
 * 新規投稿振り返りコンポーネント
 */
export default function NewReflection({ control }: Props) {
  const {
    field: { onChange: onChangeGoodPoints, value: valueGoodPoints },
    fieldState: { error: errorGoodPoints },
  } = useController({
    name: FORM_FIELD.GOOD_POINTS,
    control,
  });

  const {
    field: { onChange: onChangeBadPoints, value: valueBadPoints },
    fieldState: { error: errorBadPoints },
  } = useController({
    name: FORM_FIELD.BAD_POINTS,
    control,
  });

  const {
    field: { onChange: onChangeImprovement, value: valueImprovement },
    fieldState: { error: errorImprovement },
  } = useController({
    name: FORM_FIELD.IMPROVEMENT,
    control,
  });

  return (
    <div className={styles.root}>
      <div className={styles.headLabel}>
        <WordText
          text={HEADER_LABEL.REFLECTION}
          size={COMPONENT_SIZE.MEDIUM}
          length={COMPONENT_LENGTH.FIT}
        />
        <Icon iconPath={ICON_PATH.REFLECTION} size={COMPONENT_SIZE.MEDIUM} />
      </div>
      <Form.Field name={FORM_FIELD.GOOD_POINTS} className={styles.field}>
        <Form.Label>
          <WordText
            text={HEADER_LABEL.GOOD_POINT}
            size={COMPONENT_SIZE.SMALL}
            length={COMPONENT_LENGTH.FIT}
          />
        </Form.Label>
        <Form.Control asChild>
          <TextArea
            height={COMPONENT_HEIGHT.MEDIUM}
            isListType={true}
            placeholder={PLACEHOLDER.GOOD_POINTS}
            value={valueGoodPoints}
            onChange={onChangeGoodPoints}
          />
        </Form.Control>
        {errorGoodPoints?.message && (
          <Form.Message className={styles.errorMessage}>
            <WordText
              text={errorGoodPoints.message}
              size={TEXT_SIZE.EXTRA_SMALL}
              length={COMPONENT_LENGTH.FIT}
              type={TEXT_TYPE.ERROR}
            />
          </Form.Message>
        )}
      </Form.Field>
      <Form.Field name={FORM_FIELD.BAD_POINTS} className={styles.field}>
        <Form.Label>
          <WordText
            text={HEADER_LABEL.BAD_POINT}
            size={COMPONENT_SIZE.SMALL}
            length={COMPONENT_LENGTH.FIT}
          />
        </Form.Label>
        <Form.Control asChild>
          <TextArea
            height={COMPONENT_HEIGHT.MEDIUM}
            isListType={true}
            placeholder={PLACEHOLDER.BAD_POINTS}
            value={valueBadPoints}
            onChange={onChangeBadPoints}
          />
        </Form.Control>
        {errorBadPoints?.message && (
          <Form.Message className={styles.errorMessage}>
            <WordText
              text={errorBadPoints.message}
              size={TEXT_SIZE.EXTRA_SMALL}
              length={COMPONENT_LENGTH.FIT}
              type={TEXT_TYPE.ERROR}
            />
          </Form.Message>
        )}
      </Form.Field>
      <Form.Field name={FORM_FIELD.IMPROVEMENT} className={styles.field}>
        <Form.Label>
          <WordText
            text={HEADER_LABEL.IMPROVEMENT}
            size={COMPONENT_SIZE.SMALL}
            length={COMPONENT_LENGTH.FIT}
          />
        </Form.Label>
        <Form.Control asChild>
          <TextArea
            height={COMPONENT_HEIGHT.MEDIUM}
            isListType={true}
            placeholder={PLACEHOLDER.IMPROVEMENT}
            value={valueImprovement}
            onChange={onChangeImprovement}
          />
        </Form.Control>
        {errorImprovement?.message && (
          <Form.Message className={styles.errorMessage}>
            <WordText
              text={errorImprovement.message}
              size={TEXT_SIZE.EXTRA_SMALL}
              length={COMPONENT_LENGTH.FIT}
              type={TEXT_TYPE.ERROR}
            />
          </Form.Message>
        )}
      </Form.Field>
    </div>
  );
};
