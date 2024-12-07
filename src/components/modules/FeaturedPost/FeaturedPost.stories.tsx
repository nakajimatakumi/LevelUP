import type { Meta, StoryObj } from "@storybook/react";
import FeaturedPost from "./FeaturedPost";

const meta = {
  title: "Modules/FeaturedPost",
  component: FeaturedPost,
} satisfies Meta<typeof FeaturedPost>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    post: {
      postId: "",
      description:
        "注目の経験を表示するコンポーネントです。\n最大で3行まで表示されます。",
    },
    index: 0,
  },
};

export const LongPost: Story = {
  args: {
    post: {
      postId: "",
      description:
        "注目の経験を表示するコンポーネントです。\n最大で3行まで表示されます。\nこれは3行目です。\nこれは4行目です。",
    },
    index: 3,
  },
};
