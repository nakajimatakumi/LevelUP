import type { Meta, StoryObj } from "@storybook/react";
import AccordionList from "@/components/elements/AccordionList/AccordionList";
import {
  COMPONENT_LENGTH,
  COMPONENT_SIZE,
  ICON_WITH_TEXT_TYPE,
  NAV_ITEMS,
} from "@/constants/ParamConst";
import { ICON_PATH } from "@/constants/IconPathConst";
import { IconWithText } from "@/components";

const meta = {
  title: "Elements/AccordionList",
  component: AccordionList,
} satisfies Meta<typeof AccordionList>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockListItems = [
  { ItemName: "設定項目1", ItemId: "setting1" },
  { ItemName: "設定項目2", ItemId: "setting2" },
  { ItemName: "設定項目3", ItemId: "setting3" },
];

export const Default: Story = {
  args: {
    children: (
      <IconWithText
        size={COMPONENT_SIZE.LARGE}
        length={COMPONENT_LENGTH.FIT}
        type={ICON_WITH_TEXT_TYPE.NAV}
        text={NAV_ITEMS.SETTING.ItemName}
        iconPath={ICON_PATH.SETTING}
      />
    ),
    listItems: mockListItems,
    onClick: () => {},
    width: COMPONENT_LENGTH.MEDIUM,
  },
};

export const User: Story = {
  args: {
    children: (
      <IconWithText
        size={COMPONENT_SIZE.MEDIUM}
        length={COMPONENT_LENGTH.FIT}
        type={ICON_WITH_TEXT_TYPE.USER}
        text={"長い名前のテストユーザーさん"}
        userIconInfo={{
          facePath: "/profile/face/suspicious_face.svg",
          hairPath: "/profile/hair/flat_hair_black.svg",
          iconColor: "#DDC4C4",
        }}
      />
    ),
    listItems: mockListItems,
    onClick: () => {},
    width: COMPONENT_LENGTH.FIT,
  },
};
