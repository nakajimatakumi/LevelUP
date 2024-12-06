import type { Meta, StoryObj } from "@storybook/react";
import UserIcon from "./UserIcon";
import { COMPONENT_SIZE } from "@/constants/ParamConst";

const meta = {
  title: "Elements/UserIcon",
  component: UserIcon,
} satisfies Meta<typeof UserIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Man: Story = {
  args: {
    size: COMPONENT_SIZE.LARGE,
    userIconInfo: {
      facePath: "/profile/face/suspicious_face.svg",
      hairPath: "/profile/hair/flat_hair_black.svg",
      iconColor: "#DDC4C4",
    },
  },
};

export const Woman: Story = {
  args: {
    size: COMPONENT_SIZE.LARGE,
    userIconInfo: {
      facePath: "/profile/face/fear_face.svg",
      hairPath: "/profile/hair/medium_hair_black.svg",
      iconColor: "#C4D8DD",
    },
  },
};
