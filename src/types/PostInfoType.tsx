import { userInfoType } from "./UserInfoType";

export type postInfoType = {
  postedUserId: string;
  userInfo: userInfoType;
  jobInfo: jobInfoType;
  description: string;
  postedTime: string;
  postCategory: string;
};

export type jobInfoType = {
  jobName: string;
  jobCategory: string;
  jobColor: string;
};
