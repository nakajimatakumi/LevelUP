import * as RadixTooltip from "@radix-ui/react-tooltip";
import styles from "@/styles/components/elements/Tooltip.module.css";
import clsx from "clsx";
import { TEXT_TYPE } from "@/constants/ParamConst";
type Props = {
  children: React.ReactNode;
  message: string;
  defaultOpen?: boolean;
  type?: "default" | "error";
};

/**
 * ツールチップコンポーネント
 * @param children 子要素
 * @param message ツールチップメッセージ
 * @param type ツールチップのタイプ
 */
export default function Tooltip({
  children,
  message,
  defaultOpen = false,
  type = TEXT_TYPE.DEFAULT,
}: Props) {
  const classNames = clsx(styles.tooltipContent, {
    [styles[type]]: type,
  });
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root delayDuration={300} defaultOpen={defaultOpen}>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content data-side="left">
            <p className={classNames}>{message}</p>
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}
