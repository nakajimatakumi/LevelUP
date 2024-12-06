import type { Meta, StoryObj } from "@storybook/react";
import Toggle from "./Toggle";

const meta = {
  title: "Elements/Toggle",
  component: Toggle,
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checked: false,
    onChange: () => {},
  },
};

export const Pressed: Story = {
  args: {
    checked: true,
    onChange: () => {},
  },
};
