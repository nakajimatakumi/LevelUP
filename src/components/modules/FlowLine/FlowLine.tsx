import * as Separator from "@radix-ui/react-separator";
import { ICON_PATH } from "@/constants/IconPathConst";
import { COMPONENT_SIZE } from "@/constants/ParamConst";
import { MESSAGE_TEMPLATE } from "@/constants/MessageTemplateConst";
import { Icon, Tooltip } from "@/components";
import generateMessage from "@/logics/functions/GenerateMessage";
import styles from "@/components/modules/FlowLine/FlowLine.module.css";

type Props = {
  iconPath: string;
  tooltipText: string;
  additionalStyle?: React.CSSProperties;
  tooltipAdditionalStyle?: React.CSSProperties;
};

/**
 * タイムラインコンポーネント
 * @param iconPath アイコンパス
 * @param tooltipText ツールチップテキスト
 */
export default function FlowLine({
  iconPath,
  tooltipText,
  additionalStyle,
  tooltipAdditionalStyle,
}: Props) {
  return (
    <div className={styles.root} style={additionalStyle}>
      <Separator.Root
        className={
          iconPath === ICON_PATH.EXPERIENCE
            ? styles.startFirstLine
            : styles.firstLine
        }
      />
      <Tooltip
        message={generateMessage(MESSAGE_TEMPLATE.TOOLTIP_MESSAGE, [
          tooltipText,
        ])}
        additionalStyles={tooltipAdditionalStyle}
      >
        <span>
          <Icon iconPath={iconPath} size={COMPONENT_SIZE.LARGE} />
        </span>
      </Tooltip>
      <Separator.Root
        className={
          iconPath === ICON_PATH.LESSON
            ? styles.endSecondLine
            : styles.secondLine
        }
      />
    </div>
  );
}
