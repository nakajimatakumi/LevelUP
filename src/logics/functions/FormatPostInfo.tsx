import { UserInfoType } from "@/types/UserInfoType";
import { PostInfoType } from "@/types/PostInfoType";

type Props = {
  userInfo: UserInfoType;
  postInfo: PostInfoType | null;
};

/**
 * 投稿データを成形関数
 * @param userInfo ユーザー情報
 * @param postInfo 投稿情報
 */
export default function formatPostInfo({ userInfo, postInfo }: Props) {
  const baseInfo = {
    userInfo: {
      userName: userInfo.userName,
      userIconInfo: userInfo.userIconInfo,
    },
    jobInfo: userInfo.jobInfo,
    description: userInfo.description,
  };

  return postInfo
    ? {
        ...baseInfo,
        postedTime: postInfo.postedTime,
        category: postInfo.category,
      }
    : baseInfo;
}
