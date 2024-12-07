import type { Meta, StoryObj } from "@storybook/react";
import { kosugiMaru } from "@/app/layout";
import { FlowLine } from "@/components/";
import { ICON_PATH } from "@/constants/IconPathConst";

const meta = {
  title: "Modules/FlowLine",
  component: FlowLine,
} satisfies Meta<typeof FlowLine>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Experience: Story = {
  args: {
    iconPath: ICON_PATH.EXPERIENCE,
    tooltipText: "経験",
    additionalStyle: {
      height: "100px",
      width: "30px",
    },
    tooltipAdditionalStyle: {
      fontFamily: kosugiMaru.style.fontFamily,
    },
  },
};

export const Reflection: Story = {
  args: {
    iconPath: ICON_PATH.REFLECTION,
    tooltipText: "振り返り",
    additionalStyle: {
      height: "100px",
      width: "30px",
    },
    tooltipAdditionalStyle: {
      fontFamily: kosugiMaru.style.fontFamily,
    },
  },
};

export const Improvement: Story = {
  args: {
    iconPath: ICON_PATH.IMPROVEMENT,
    tooltipText: "改善案",
    additionalStyle: {
      height: "100px",
      width: "30px",
    },
    tooltipAdditionalStyle: {
      fontFamily: kosugiMaru.style.fontFamily,
    },
  },
};

export const Lesson: Story = {
  args: {
    iconPath: ICON_PATH.LESSON,
    tooltipText: "学び",
    additionalStyle: {
      height: "100px",
      width: "30px",
    },
    tooltipAdditionalStyle: {
      fontFamily: kosugiMaru.style.fontFamily,
    },
  },
};
