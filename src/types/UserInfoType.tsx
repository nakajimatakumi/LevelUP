/**
 * ユーザー情報タイプ
 */
export type userInfoType = {
  userId: string;
  userName: string;
  description: string;
  jobInfo: jobInfoType;
  userIconInfo: userIconInfoType;
};

/* ユーザーの職業情報タイプ */
export type jobInfoType = {
  jobName: string;
  jobCategory: string;
  jobColor: string;
};

/* ユーザーアイコン情報タイプ */
export type userIconInfoType = {
  facePath: string;
  hairPath: string;
  iconColor: string;
};
