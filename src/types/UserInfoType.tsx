/**
 * ユーザー情報タイプ
 */
export type UserInfoType = {
  userId: string;
  userName: string;
  description: string;
  jobInfo: JobInfoType;
  userIconInfo: UserIconInfoType;
};

/* ユーザーの職業情報タイプ */
export type JobInfoType = {
  jobName: string;
  jobCategory: string;
  jobColor: string;
};

/* ユーザーアイコン情報タイプ */
export type UserIconInfoType = {
  facePath: string;
  hairPath: string;
  iconColor: string;
};
