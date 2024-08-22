import { JobInfoType, UserIconInfoType, UserInfoType } from "./UserInfoType";

/**
 * 表示用投稿情報タイプ
 */
export type DispPostCardType = {
  userInfo: UserIconNameType;
  jobInfo: JobInfoType;
  description: string;
  category?: string;
  postedTime?: string;
};

/**
 * 投稿情報タイプ
 */
export type PostInfoType = {
  postId: string;
  postedTime: string;
  category: string;
  favoriteNum: string;
  isFavorite: string;
  isBookmark: string;
  experience: string;
  isPrivate: string;
  reflections: ReflectionsType;
  improvementsList: string[];
  lessonsList: string[];
};

export type ReflectionsType = {
  positiveList: string[];
  negativeList: string[];
};

export type UserIconNameType = {
  userName: string;
  userIconInfo: UserIconInfoType;
};
