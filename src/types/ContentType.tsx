import { UserIconInfoType } from "./UserInfoType";

/**
 * IconWithTextコンポーネントのコンテンツタイプ
 */
export type contentType = {
  path?: string;
  iconPath: string;
  userIconInfo?: UserIconInfoType;
  pageName: string;
  isLink: boolean;
  linkList?: LinkListType[];
  type?: string;
};

/**
 * ドロップダウンリストのリストタイプ
 */
export type LinkListType = {
  pageName: string;
  path: string;
};

export type BaseType = {
  size: "small" | "medium" | "large" | "fit" | "none";
  length: "short" | "medium" | "long" | "fit" | "none";
  type: "user" | "nav" | "time" | "none";
  text: string;
};

/* ユーザーアイコンの場合 */
export type UserIconType = BaseType & {
  userIconInfo: UserIconInfoType;
  iconPath?: never;
};

/* その他のアイコンの場合 */
export type OtherIconType = BaseType & {
  iconPath: string;
  userIconInfo?: never;
};

export type SizeType = "small" | "medium" | "large" | "none";
