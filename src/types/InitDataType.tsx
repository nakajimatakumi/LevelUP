import { PostInfoType } from "./PostInfoType";
import { SearchConditionsType } from "./SearchConditionType";
import { UserInfoType } from "./UserInfoType";

export type InitDataType = {
  userInfo: UserInfoType;
  searchConditions: SearchConditionsType;
  notificationList: NotificationListType[];
  postList: PostListType[];
};

export type PostListType = {
  userInfo: UserInfoType;
  postInfo: PostInfoType;
};

export type NotificationListType = {
  notificationId: string;
  notificationType: string;
  notificationTime: string;
  notificationMessage: string;
};
