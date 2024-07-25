import { jobInfoType } from "./PostInfoType";

export type userInfoType = {
  userId: string;
  userName: string;
  userIcon: string;
  description: string;
  jobInfo: jobInfoType;
};
