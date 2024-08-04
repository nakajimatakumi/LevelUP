import { TEXT_CATEGORY } from "@/constants/PageLinksConst";
import { contentType } from "@/types/ContentType";
import { postInfoType } from "@/types/PostInfoType";
import { userInfoType } from "@/types/UserInfoType";
import { PAGES } from "@/constants/PageLinksConst";
export default function useFormatPostInfo(
  userInfo: userInfoType,
  postInfo: postInfoType | null
) {
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
