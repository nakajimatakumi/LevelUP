import type { Meta, StoryObj } from "@storybook/react";
import Experience from "./Experience";
import { ToastProvider } from "@/contexts/ToastContext";
import { UserInfoType } from "@/types/UserInfoType";
import { PostInfoType } from "@/types/PostInfoType";
import * as Accordion from "@radix-ui/react-accordion";

const meta = {
  title: "Modules/Experience",
  component: Experience,
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
} satisfies Meta<typeof Experience>;

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
  experience:
    "経験を表示するコンポーネントです。\n文章量によって横幅が伸縮します。",
  reflections: {
    positiveList: [""],
    negativeList: [""],
  },
  improvementsList: [""],
  lessonsList: [""],
};

export const Default: Story = {
  args: {
    userInfo: mockUserInfo,
    postInfo: mockPostInfo,
    experience: mockPostInfo.experience,
  },
};
