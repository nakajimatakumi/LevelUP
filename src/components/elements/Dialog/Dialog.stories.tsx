import type { Meta, StoryObj } from "@storybook/react";
import Dialog from "./Dialog";
import { Button } from "@/components";
import { BUTTON_VARIANT, COMPONENT_SIZE } from "@/constants/ParamConst";

const meta = {
  title: "Elements/Dialog",
  component: Dialog,
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    children: (
      <Button variant={BUTTON_VARIANT.PRIMARY} size={COMPONENT_SIZE.MEDIUM}>
        開く
      </Button>
    ),
    description: (
      <>
        <h3>ダイアログです。</h3>
        <p>コンテンツ1</p>
        <p>コンテンツ2</p>
      </>
    ),
  },
};
