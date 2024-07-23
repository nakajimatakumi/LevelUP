import { jobInfo } from "./postInfo";

export type userInfo = {
  userId: string;
  userName: string;
  userIcon: string;
  description: string;
  jobInfo: jobInfo;
};
