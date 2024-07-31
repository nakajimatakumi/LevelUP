/**
 * IconWithTextコンポーネントのコンテンツタイプ
 */
export type contentType = {
  path?: string;
  iconPath: string;
  userIconInfo?: userIconInfoType;
  pageName: string;
  isLink: boolean;
  linkList?: linkListType[];
  type?: string;
};

/**
 * ドロップダウンリストのリストタイプ
 */
export type linkListType = {
  pageName: string;
  path: string;
};

/**
 * ユーザーアイコンパスタイプ
 */
export type userIconInfoType = {
  facePath: string;
  hairPath: string;
  iconColor: string;
};
