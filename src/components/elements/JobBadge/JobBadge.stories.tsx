import type { Meta, StoryObj } from "@storybook/react";
import JobBadge from "./JobBadge";

const meta = {
  title: "Elements/JobBadge",
  component: JobBadge,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof JobBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Employee: Story = {
  args: {
    jobName: "システムエンジニア",
    jobColor: "#C0D6D8",
    jobCategory: "employee",
  },
};

export const Homemaker: Story = {
  args: {
    jobName: "主婦",
    jobColor: "#D8C0C5",
    jobCategory: "homemake",
  },
};
