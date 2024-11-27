import type { Meta, StoryObj } from "@storybook/react";
import CategoryBadge from "./CategoryBadge";

const meta = {
  title: "Elements/CategoryBadge",
  component: CategoryBadge,
} satisfies Meta<typeof CategoryBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    postCategory: "趣味",
  },
};
