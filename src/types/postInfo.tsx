import { userInfo } from "./userInfo";

export type postInfo = {
  postedUserId: string;
  userInfo: userInfo;
  jobInfo: jobInfo;
  description: string;
  postedTime: string;
  postCategory: string;
};

export type jobInfo = {
  jobName: string;
  jobCategory: string;
  jobColor: string;
};
