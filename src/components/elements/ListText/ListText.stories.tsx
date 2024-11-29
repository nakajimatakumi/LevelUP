import type { Meta, StoryObj } from "@storybook/react";
import ListText from "./ListText";
import { TEXT_STYLE } from "@/constants/ParamConst";

const meta = {
  title: "Elements/ListText",
  component: ListText,
} satisfies Meta<typeof ListText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    textList: [
      "デフォルトテキスト１",
      "デフォルトテキスト２",
      "デフォルトテキスト３",
    ],
    textStyle: TEXT_STYLE.NORMAL,
    fontSize: 20,
    lineHeight: 1.5,
  },
};

export const Positive: Story = {
  args: {
    textList: ["よかったこと１", "よかったこと２", "よかったこと３"],
    textStyle: TEXT_STYLE.POSITIVE,
    fontSize: 20,
    lineHeight: 1.5,
  },
};

export const Negative: Story = {
  args: {
    textList: ["わるかったこと１", "わるかったこと２", "わるかったこと３"],
    textStyle: TEXT_STYLE.NEGATIVE,
    fontSize: 20,
    lineHeight: 1.5,
  },
};
