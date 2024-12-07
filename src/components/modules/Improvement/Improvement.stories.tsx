import type { Meta, StoryObj } from "@storybook/react";
import Improvement from "./Improvement";

const meta = {
  title: "Modules/Improvement",
  component: Improvement,
  decorators: [
    (Story) => (
      <div style={{ width: "300px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Improvement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    improvementsList: ["改善案1", "改善案2", "改善案3"],
  },
};
