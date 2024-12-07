import type { Meta, StoryObj } from "@storybook/react";
import BookmarkButton from "./BookmarkButton";
import { ToastProvider } from "@/contexts/ToastContext";
import { UserInfoType } from "@/types/UserInfoType";
import { PostInfoType } from "@/types/PostInfoType";

const meta = {
  title: "Modules/BookmarkButton",
  component: BookmarkButton,
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
} satisfies Meta<typeof BookmarkButton>;

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
    isBookmark: false,
    userInfo: mockUserInfo,
    postInfo: mockPostInfo,
  },
};
