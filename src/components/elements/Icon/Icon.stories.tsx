import type { Meta, StoryObj } from "@storybook/react";
import Icon from "./Icon";
import { ICON_PATH } from "@/constants/IconPathConst";
import { ICON_SIZE } from "@/constants/ParamConst";

const meta = {
  title: "Elements/Icon",
  component: Icon,
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconPath: ICON_PATH.FAVORITE,
    size: ICON_SIZE.LARGE,
  },
};

export const Fill: Story = {
  args: {
    iconPath: ICON_PATH.FAVORITE,
    size: ICON_SIZE.LARGE,
    isFill: true,
  },
};
