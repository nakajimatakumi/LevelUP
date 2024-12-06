import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components";
import { COMPONENT_SIZE, BUTTON_VARIANT } from "@/constants/ParamConst";
import { ToastContext, ToastProvider } from "@/contexts/ToastContext";
import { useContext } from "react";

const meta = {
  title: "Elements/Toast",
  component: ToastProvider,
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
} satisfies Meta<typeof ToastProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

const ToastButton = ({ message }: { message: string }) => {
  const { showToast } = useContext(ToastContext);
  return (
    <Button
      variant={BUTTON_VARIANT.PRIMARY}
      size={COMPONENT_SIZE.MEDIUM}
      onClick={() => showToast(message)}
    >
      表示
    </Button>
  );
};

export const Default: Story = {
  args: { children: <ToastButton message="デフォルトのトーストです。" /> },
};

export const LongMessage: Story = {
  args: {
    children: (
      <ToastButton message="これは長いメッセージのトーストです。トーストは自動的に一定時間後に消えます。" />
    ),
  },
};
