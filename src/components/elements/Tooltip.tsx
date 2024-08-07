import * as RadixTooltip from "@radix-ui/react-tooltip";
import styles from "@/styles/components/elements/Tooltip.module.css";

type Props = {
  children: React.ReactNode;
  text: string;
};

/**
 * ツールチップコンポーネント
 * @param children 子要素
 * @param text ツールチップテキスト
 */
export default function Tooltip({ children, text }: Props) {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root delayDuration={300}>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content data-side="left">
            <p className={styles.tooltipContent}>{text}</p>
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}
