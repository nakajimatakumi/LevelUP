import type { Meta, StoryObj } from "@storybook/react";
import DropdownList from "./DropdownList";
import { SIDE } from "@/constants/ParamConst";

const meta = {
  title: "Elements/DropdownList",
  component: DropdownList,
} satisfies Meta<typeof DropdownList>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockListItems = [
  { name: "アイテム1", value: "item1" },
  { name: "アイテム2", value: "item2" },
  { name: "アイテム3", value: "item3" },
];

export const Default: Story = {
  args: {
    listItems: mockListItems,
    name: "ドロップダウン",
    openSide: SIDE.BOTTOM,
    isGroup: false,
    value: "",
    onChange: () => {},
  },
};

export const Group: Story = {
  args: {
    listItems: mockListItems,
    name: "ドロップダウン",
    openSide: SIDE.BOTTOM,
    isGroup: true,
    value: "",
    onChange: () => {},
  },
};
