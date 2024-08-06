import { ICON_PATH } from "@/constants/IconPathConst";

/*
 * テキストカテゴリ
 */
export const TEXT_CATEGORY = {
  POSTED_TIME: "postedTime",
  USER_INFO_CARD: "userInfoCard",
};

export const COMPONENT_SIZE = {
  LARGE: "large",
  MEDIUM: "medium",
  SMALL: "small",
  FIT: "fit",
};

/**
 * ページ
 */
export const PAGES = {
  PROFILE: {
    path: "/profile",
    iconPath: "/profile/userIcon.svg",
    pageName: "ユーザー名",
    isLink: false,
    linkList: [
      { pageName: "プロフィール設定", path: "/profile" },
      { pageName: "ログアウト", path: "/profile" },
    ],
  },
  MY_EXP: {
    path: "/myExp",
    iconPath: ICON_PATH.HOME,
    pageName: "じぶんの経験",
    isLink: true,
  },
  ALL_EXP: {
    path: "/allExp",
    iconPath: ICON_PATH.VIEW,
    pageName: "みんなの経験",
    isLink: true,
  },
  BOOKMARK: {
    path: "/bookmark",
    iconPath: ICON_PATH.BOOKMARK_MENU,
    pageName: "ブックマーク",
    isLink: true,
  },
  NOTIFICATION: {
    path: "/notification",
    iconPath: ICON_PATH.NOTIFICATION,
    pageName: "通知",
    isLink: true,
  },
  SETTING: {
    path: "/setting",
    iconPath: ICON_PATH.SETTING,
    pageName: "設定",
    isLink: false,
    linkList: [
      { pageName: "アカウント設定", path: "/setting" },
      { pageName: "公開設定", path: "/setting" },
      { pageName: "通知設定", path: "/setting" },
      { pageName: "LevelUPについて", path: "/setting" },
      { pageName: "お問い合わせ", path: "/setting" },
    ],
  },
  POST: {
    path: "/post",
    iconPath: ICON_PATH.EDIT,
    pageName: "記録する",
    isLink: true,
    type: COMPONENT_SIZE.FIT,
  },

  POSTED_TIME: {
    path: "",
    iconPath: ICON_PATH.CLOCK,
    pageName: "投稿時間",
    isLink: false,
    type: TEXT_CATEGORY.POSTED_TIME,
  },
};

export const COMPONENT_LABEL = {
  FEATURED_POSTS: "注目の経験",
};
