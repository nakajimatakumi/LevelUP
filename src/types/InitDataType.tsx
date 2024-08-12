import { PostInfoType } from "./PostInfoType";
import { SearchConditionsType } from "./SearchConditionType";
import { UserInfoType } from "./UserInfoType";

export type InitDataType = {
  userInfo: UserInfoType;
  searchConditions: SearchConditionsType;
  postList: PostListType[];
};

export type PostListType = {
  userInfo: UserInfoType;
  postInfo: PostInfoType;
};
