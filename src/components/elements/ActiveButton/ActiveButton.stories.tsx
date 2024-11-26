import type { Meta, StoryObj } from "@storybook/react";
import ActiveButton from "@/components/elements/ActiveButton/ActiveButton";
import { ICON_PATH } from "@/constants/IconPathConst";
import Image from "next/image";

const meta = {
  title: "Elements/ActiveButton",
  component: ActiveButton,
} satisfies Meta<typeof ActiveButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Favorite: Story = {
  args: {
    children: (
      <Image src={ICON_PATH.FAVORITE} alt="favorite" height={24} width={24} />
    ),
    isActive: false,
    onClick: () => {},
  },
};

export const Bookmark: Story = {
  args: {
    children: (
      <Image src={ICON_PATH.BOOKMARK} alt="bookmark" height={24} width={24} />
    ),
    isActive: false,
    onClick: () => {},
  },
};
