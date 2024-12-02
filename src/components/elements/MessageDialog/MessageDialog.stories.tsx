import type { Meta, StoryObj } from "@storybook/react";
import { kosugiMaru } from "@/app/layout";
import MessageDialog from "./MessageDialog";
import { BUTTON_VARIANT, COMPONENT_SIZE } from "@/constants/ParamConst";
import { Button, Notification as NotificationComponent } from "@/components";

const meta = {
  title: "Elements/MessageDialog",
  component: MessageDialog,
} satisfies Meta<typeof MessageDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Confirm: Story = {
  args: {
    title: "確認ダイアログ",
    description: "確認ダイアログを表示しています。",
    children: (
      <Button variant={BUTTON_VARIANT.PRIMARY} size={COMPONENT_SIZE.MEDIUM}>
        開く
      </Button>
    ),
    additionalStyle: {
      fontFamily: kosugiMaru.style.fontFamily,
      color: "#555555",
    },
  },
};

export const Notification: Story = {
  args: {
    title: "通知ダイアログ",
    description: "通知ダイアログを表示しています。",
    dispButton: false,
    children: (
      <Button variant={BUTTON_VARIANT.PRIMARY} size={COMPONENT_SIZE.MEDIUM}>
        開く
      </Button>
    ),
    additionalStyle: {
      fontFamily: kosugiMaru.style.fontFamily,
      color: "#555555",
    },
  },
};

export const MaxHeight: Story = {
  args: {
    title: "大きい要素を表示する場合のダイアログ",
    description: <NotificationComponent />,
    dispButton: false,
    children: (
      <Button variant={BUTTON_VARIANT.PRIMARY} size={COMPONENT_SIZE.MEDIUM}>
        開く
      </Button>
    ),
    additionalStyle: {
      fontFamily: kosugiMaru.style.fontFamily,
      color: "#555555",
    },
  },
};
