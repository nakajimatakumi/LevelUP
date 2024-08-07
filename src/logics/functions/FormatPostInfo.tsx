import { TEXT_CATEGORY } from "@/constants/PageLinksConst";
import { contentType } from "@/types/ContentType";
import { postInfoType } from "@/types/PostInfoType";
import { userInfoType } from "@/types/UserInfoType";
import { PAGES } from "@/constants/PageLinksConst";

type Props = {
  userInfo: userInfoType;
  postInfo: postInfoType | null;
};

/**
 * 投稿データを成形関数
 * @param userInfo ユーザー情報
 * @param postInfo 投稿情報
 */
export default function formatPostInfo({ userInfo, postInfo }: Props) {
  const formatUserInfo = (userInfo: userInfoType): contentType => {
    return {
      pageName: userInfo.userName,
      userIconInfo: userInfo.userIconInfo,
      isLink: false,
      type: TEXT_CATEGORY.USER_INFO_CARD,
    };
  };

  const formatPostedTime = (postInfo: postInfoType): contentType => {
    return {
      ...PAGES.POSTED_TIME,
      pageName: postInfo.postedTime,
    };
  };

  return postInfo
    ? {
        userInfo: formatUserInfo(userInfo),
        jobInfo: userInfo.jobInfo,
        description: userInfo.description,
        postedTime: formatPostedTime(postInfo),
        category: postInfo.category,
      }
    : {
        userInfo: formatUserInfo(userInfo),
        jobInfo: userInfo.jobInfo,
        description: userInfo.description,
      };
}
