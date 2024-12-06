import type { Meta, StoryObj } from "@storybook/react";
import TextArea from "./TextArea";
import { COMPONENT_HEIGHT } from "@/constants/ParamConst";

const meta = {
  title: "Elements/TextArea",
  component: TextArea,
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    height: COMPONENT_HEIGHT.MEDIUM,
    value: "",
    onChange: () => {},
    placeholder: "テキストを入力してください",
  },
};

export const WithText: Story = {
  args: {
    height: COMPONENT_HEIGHT.MEDIUM,
    value: "入力済みのテキストエリアです。",
    onChange: () => {},
    placeholder: "テキストを入力してください",
  },
};

export const ListType: Story = {
  args: {
    height: COMPONENT_HEIGHT.MEDIUM,
    isListType: true,
    value: "アイテム1\nアイテム2\nアイテム3",
    onChange: () => {},
    placeholder: "・リスト形式で入力してください",
  },
};

export const CustomHeight: Story = {
  args: {
    height: COMPONENT_HEIGHT.HIGH,
    value: "",
    onChange: () => {},
    placeholder: "高さを変更したテキストエリアです。",
  },
};
