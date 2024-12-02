import type { Meta, StoryObj } from "@storybook/react";
import { kosugiMaru } from "@/app/layout";
import ScrollArea from "./ScrollArea";

const meta = {
  title: "Elements/ScrollArea",
  component: ScrollArea,
  decorators: [(Story) => <div style={{ width: 400 }}>{Story()}</div>],
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div
        style={{
          fontFamily: kosugiMaru.style.fontFamily,
          color: "#555555",
        }}
      >
        <h3>スクロールエリアです。</h3>
        {Array.from({ length: 30 }, (_, i) => (
          <p key={i}>コンテンツ{i + 1}</p>
        ))}
      </div>
    ),
    height: 400,
    verticalPadding: 0,
    positionMove: 0,
    shrinkHeight: 20,
  },
};
