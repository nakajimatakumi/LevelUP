import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { BUTTON_VARIANT, COMPONENT_SIZE } from "@/constants/ParamConst";

const meta = {
  title: "Elements/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "ボタン",
    variant: BUTTON_VARIANT.PRIMARY,
    size: COMPONENT_SIZE.MEDIUM,
  },
};

export const Secondary: Story = {
  args: {
    children: "ボタン",
    variant: BUTTON_VARIANT.SECONDARY,
    size: COMPONENT_SIZE.MEDIUM,
  },
};

export const Submit: Story = {
  args: {
    children: "ボタン",
    variant: BUTTON_VARIANT.SUBMIT,
    size: COMPONENT_SIZE.MEDIUM,
  },
};

export const Search: Story = {
  args: {
    children: "検索",
    variant: BUTTON_VARIANT.SEARCH,
    size: COMPONENT_SIZE.MEDIUM,
  },
};

export const Disabled: Story = {
  args: {
    children: "ボタン",
    variant: BUTTON_VARIANT.SUBMIT,
    size: COMPONENT_SIZE.MEDIUM,
    disabled: true,
  },
};
