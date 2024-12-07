import type { Meta, StoryObj } from "@storybook/react";
import FavoriteButton from "./FavoriteButton";
import { ToastProvider } from "@/contexts/ToastContext";
import { UserInfoType } from "@/types/UserInfoType";
import { PostInfoType } from "@/types/PostInfoType";

const meta = {
  title: "Modules/FavoriteButton",
  component: FavoriteButton,
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
} satisfies Meta<typeof FavoriteButton>;

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
    isFavorite: false,
    userInfo: mockUserInfo,
    postInfo: mockPostInfo,
    favoriteNum: 0,
  },
};

export const ThreeDigits: Story = {
  args: {
    isFavorite: false,
    userInfo: mockUserInfo,
    postInfo: mockPostInfo,
    favoriteNum: 999,
  },
};

export const FiveDigits: Story = {
  args: {
    isFavorite: false,
    userInfo: mockUserInfo,
    postInfo: mockPostInfo,
    favoriteNum: 10000,
  },
};
