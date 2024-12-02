import type { Meta, StoryObj } from "@storybook/react";
import SentenceText from "./SentenceText";

const meta = {
  title: "Elements/SentenceText",
  component: SentenceText,
  decorators: [
    (Story) => (
      <div
        style={{
          border: "1px solid #555555c0",
          padding: 10,
          borderRadius: 10,
          width: 400,
        }}
      >
        {Story()}
      </div>
    ),
  ],
} satisfies Meta<typeof SentenceText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "これは文章を表示するコンポーネントです。改行は自動的に行われます。",
    lineClamp: 3,
    lineHeight: 1.5,
    fontSize: 16,
  },
};

export const LongText: Story = {
  args: {
    text: "これは長い文章のサンプルです。表示する行数を設定できます。行数制限を超えた場合は省略記号（...）で表示されます。長文のコンテンツを表示する際に使用します。",
    lineClamp: 3,
    lineHeight: 1.5,
    fontSize: 16,
  },
};

export const CustomStyle: Story = {
  args: {
    text: "フォントサイズや行間を変更することができます。",
    lineClamp: 2,
    lineHeight: 2.0,
    fontSize: 20,
  },
};
