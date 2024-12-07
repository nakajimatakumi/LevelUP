import type { Meta, StoryObj } from "@storybook/react";

import { ToastProvider } from "@/contexts/ToastContext";
import * as Accordion from "@radix-ui/react-accordion";
import { Lesson } from "@/components";
import { UserInfoType } from "@/types/UserInfoType";
import { PostInfoType } from "@/types/PostInfoType";

const meta = {
  title: "Modules/Lesson",
  component: Lesson,
  decorators: [
    (Story) => (
      <ToastProvider>
        <Accordion.Root type="single">
          <Accordion.Item value="item1">
            <Story />
            <Accordion.Content />
          </Accordion.Item>
        </Accordion.Root>
      </ToastProvider>
    ),
  ],
} satisfies Meta<typeof Lesson>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockUserInfo: UserInfoType = {
  userId: "",
  userName: "",
  description: "",
  userIconInfo: {
    facePath: "",
    hairPath: "",
    iconColor: "",
  },
  jobInfo: {
    jobName: "",
    jobCategory: "",
    jobColor: "",
  },
};

const mockPostInfo: PostInfoType = {
  postId: "",
  postedTime: "",
  category: "",
  isFavorite: "",
  isBookmark: "",
  favoriteNum: "",
  isPrivate: "",
  experience: "",
  reflections: {
    positiveList: [""],
    negativeList: [""],
  },
  improvementsList: [""],
  lessonsList: [""],
};

export const Default: Story = {
  args: {
    lessonsList: [
      "こちらが教訓1です。",
      "こちらが教訓2です。",
      "こちらが教訓3です。",
    ],
    userInfo: mockUserInfo,
    postInfo: mockPostInfo,
  },
};
