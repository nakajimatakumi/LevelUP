import { postInfoType } from "./PostInfoType";
import { searchConditionsType } from "./SearchConditionType";
import { userInfoType } from "./UserInfoType";

export type InitDataType = {
  userData: {
    userInfo: userInfoType;
    postInfoList: postInfoType[];
  };
  searchConditions: searchConditionsType;
};
