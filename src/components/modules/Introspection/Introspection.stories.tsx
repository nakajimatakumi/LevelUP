import type { Meta, StoryObj } from "@storybook/react";
import Introspection from "./Introspection";

const meta = {
  title: "Modules/Introspection",
  component: Introspection,
  decorators: [
    (Story) => (
      <div style={{ width: "300px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Introspection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    reflections: {
      positiveList: ["よかったこと1", "よかったこと2", "よかったこと3"],
      negativeList: ["わるかったこと1", "わるかったこと2", "わるかったこと3"],
    },
  },
};
