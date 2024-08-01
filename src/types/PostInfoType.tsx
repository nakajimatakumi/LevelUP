import { userInfoType, jobInfoType, userIconInfoType } from "./UserInfoType";

/**
 * 投稿情報タイプ
 */
export type postInfoType = {
  postId: string;
  postedTime: string;
  category: string;
  experience: string;
  reflections: reflectionsType;
  improvementsList: string[];
  lessonsList: string[];
};

type reflectionsType = {
  positiveList: string[];
  negativeList: string[];
};
