import type { Meta, StoryObj } from "@storybook/react";
import WordText from "./WordText";
import {
  COMPONENT_LENGTH,
  COMPONENT_SIZE,
  TEXT_TYPE,
} from "@/constants/ParamConst";

const meta = {
  title: "Elements/WordText",
  component: WordText,
} satisfies Meta<typeof WordText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "デフォルトテキスト",
    size: COMPONENT_SIZE.MEDIUM,
    length: COMPONENT_LENGTH.FIT,
  },
};

export const LongText: Story = {
  args: {
    text: "長いテキストを表示する場合のサンプルです",
    size: COMPONENT_SIZE.MEDIUM,
    length: COMPONENT_LENGTH.MEDIUM,
  },
};

export const LargeText: Story = {
  args: {
    text: "長いテキストを表示する場合のサンプルです",
    size: COMPONENT_SIZE.LARGE,
    length: COMPONENT_LENGTH.MEDIUM,
  },
};

export const Error: Story = {
  args: {
    text: "エラーメッセージ",
    size: COMPONENT_SIZE.SMALL,
    length: COMPONENT_LENGTH.FIT,
    type: TEXT_TYPE.ERROR,
  },
};
