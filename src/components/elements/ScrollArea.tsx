import * as radixScrollArea from "@radix-ui/react-scroll-area";
import styles from "@/styles/components/elements/ScrollArea.module.css";

type Props = {
  children: React.ReactNode;
  verticalPadding: number;
  height?: number;
  positionMove?: number;
  shrinkHeight?: number;
};

/**
 * スクロールエリアコンポーネント
 * @param children 子要素
 * @param verticalPadding 垂直方向のパディング
 * @param height 高さ
 * @param positionMove 位置移動
 * @param shrinkHeight 縮小高さ
 */
export default function ScrollArea({
  children,
  verticalPadding,
  height,
  positionMove,
  shrinkHeight,
}: Props) {
  return (
    <radixScrollArea.Root className={styles.scrollAreaRoot}>
      <radixScrollArea.Viewport
        className={styles.scrollAreaViewport}
        style={{
          ["--padding" as string]: `${verticalPadding}px`,
          ["--height" as string]: height ? `${height}px` : "100%",
        }}
      >
        {children}
      </radixScrollArea.Viewport>
      <radixScrollArea.Scrollbar
        className={styles.scrollAreaScrollbar}
        orientation="vertical"
        style={{
          ["--positionMove" as string]: `${positionMove}px`,
          ["--shrinkHeight" as string]: `${shrinkHeight}px`,
        }}
      >
        <radixScrollArea.Thumb className={styles.scrollAreaThumb} />
      </radixScrollArea.Scrollbar>
    </radixScrollArea.Root>
  );
}
