import { postInfoType } from "./PostInfoType";
import { searchConditionsType } from "./SearchConditionType";
import { userInfoType } from "./UserInfoType";

export type InitDataType = {
  userInfo: userInfoType;
  searchConditions: searchConditionsType;
  postList: postListType[];
};

export type postListType = {
  userInfo: userInfoType;
  postInfo: postInfoType;
};
