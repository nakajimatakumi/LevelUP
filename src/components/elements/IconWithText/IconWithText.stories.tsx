import type { Meta, StoryObj } from "@storybook/react";
import IconWithText from "./IconWithText";
import {
  COMPONENT_LENGTH,
  COMPONENT_SIZE,
  ICON_WITH_TEXT_TYPE,
} from "@/constants/ParamConst";
import { ICON_PATH } from "@/constants/IconPathConst";

const meta = {
  title: "Elements/IconWithText",
  component: IconWithText,
} satisfies Meta<typeof IconWithText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: COMPONENT_SIZE.LARGE,
    length: COMPONENT_LENGTH.MEDIUM,
    type: ICON_WITH_TEXT_TYPE.NAV,
    text: "わたしの経験",
    iconPath: ICON_PATH.EXPERIENCE,
  },
};

export const User: Story = {
  args: {
    size: COMPONENT_SIZE.MEDIUM,
    length: COMPONENT_LENGTH.FIT,
    type: ICON_WITH_TEXT_TYPE.USER,
    text: "テストユーザーさん",
    userIconInfo: {
      facePath: "/profile/face/suspicious_face.svg",
      hairPath: "/profile/hair/flat_hair_black.svg",
      iconColor: "#DDC4C4",
    },
  },
};

export const Time: Story = {
  args: {
    size: COMPONENT_SIZE.SMALL,
    length: COMPONENT_LENGTH.SHORT,
    type: ICON_WITH_TEXT_TYPE.POSTED_TIME,
    text: "2024/11/28 10:00",
    iconPath: ICON_PATH.CLOCK,
  },
};
