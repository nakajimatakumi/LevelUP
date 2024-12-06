import type { Meta, StoryObj } from "@storybook/react";
import Tooltip from "./Tooltip";
import { kosugiMaru } from "@/app/layout";
import { TEXT_TYPE } from "@/constants/ParamConst";

const meta = {
  title: "Elements/Tooltip",
  component: Tooltip,
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div>ホバーしてください</div>,
    message: "ツールチップの内容です",
    additionalStyles: {
      fontFamily: kosugiMaru.style.fontFamily,
      color: "#555555",
    },
  },
};

export const DefaultOpen: Story = {
  args: {
    children: <div>ホバーしてください</div>,
    message: "デフォルトで表示しています。",
    defaultOpen: true,
    additionalStyles: {
      fontFamily: kosugiMaru.style.fontFamily,
      color: "#555555",
    },
  },
};

export const CustomStyle: Story = {
  args: {
    children: <div>ホバーしてください</div>,
    message: "エラー表示です。",
    defaultOpen: true,
    type: TEXT_TYPE.ERROR,
    additionalStyles: {
      fontFamily: kosugiMaru.style.fontFamily,
    },
  },
};
