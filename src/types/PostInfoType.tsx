import { contentType } from "./ContentType";
import { jobInfoType } from "./UserInfoType";

/**
 * 表示用投稿情報タイプ
 */
export type dispPostType = {
  userInfo: contentType;
  jobInfo: jobInfoType;
  description: string;
  category?: string;
  postedTime?: contentType;
};

/**
 * 投稿情報タイプ
 */
export type postInfoType = {
  postId: string;
  postedTime: string;
  category: string;
  favoriteNum: string;
  isFavorite: string;
  isBookmark: string;
  experience: string;
  reflections: reflectionsType;
  improvementsList: string[];
  lessonsList: string[];
};

type reflectionsType = {
  positiveList: string[];
  negativeList: string[];
};
