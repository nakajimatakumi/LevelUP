import { ICON_PATH } from "./IconPathConst";

/*
 * テキストカテゴリ
 */
export const COMPONENT_TYPE = {
  USER: "user",
  NAV: "nav",
  POSTED_TIME: "time",
  NONE: "none",
} as const;

export const COMPONENT_SIZE = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
  FIT: "fit",
  NONE: "none",
} as const;

export const COMPONENT_LENGTH = {
  SHORT: "short",
  MEDIUM: "medium",
  LONG: "long",
  FIT: "fit",
  NONE: "none",
} as const;

/**
 * ページ
 */
export const NAV_ITEMS = {
  PROFILE: {
    ListItems: ["プロフィール設定", "ログアウト"],
  },
  MY_EXP: {
    ItemName: "じぶんの経験",
    iconPath: ICON_PATH.HOME,
  },
  ALL_EXP: {
    ItemName: "みんなの経験",
    iconPath: ICON_PATH.VIEW,
  },
  BOOKMARK: {
    ItemName: "ブックマーク",
    iconPath: ICON_PATH.BOOKMARK_MENU,
  },
  NOTIFICATION: {
    ItemName: "通知",
    iconPath: ICON_PATH.NOTIFICATION,
  },
  SETTING: {
    ItemName: "設定",
    iconPath: ICON_PATH.SETTING,
    ListItems: [
      "アカウント設定",
      "公開設定",
      "通知設定",
      "LevelUPについて",
      "お問い合わせ",
    ],
  },
  POST: {
    ItemName: "記録する",
    iconPath: ICON_PATH.EDIT,
  },
};

export const COMPONENT_LABEL = {
  FEATURED_POSTS: "注目の経験",
};

export const ICON_SIZE = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
  EXTRA_LARGE: "extraLarge",
  FIT: "fit",
  NONE: "none",
};

export const TEXT_SIZE = {
  EXTRA_SMALL: "extraSmall",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
  EXTRA_LARGE: "extraLarge",
  FIT: "fit",
  NONE: "none",
};

export const USER_SIZE = {
  iconSize: {
    SMALL: ICON_SIZE.SMALL,
    MEDIUM: ICON_SIZE.MEDIUM,
    LARGE: ICON_SIZE.MEDIUM,
    FIT: ICON_SIZE.FIT,
    NONE: ICON_SIZE.NONE,
  },
  textSize: {
    SMALL: TEXT_SIZE.SMALL,
    MEDIUM: TEXT_SIZE.MEDIUM,
    LARGE: TEXT_SIZE.LARGE,
    FIT: TEXT_SIZE.FIT,
    NONE: TEXT_SIZE.NONE,
  },
};

export const NAV_SIZE = {
  iconSize: {
    SMALL: ICON_SIZE.SMALL,
    MEDIUM: ICON_SIZE.MEDIUM,
    LARGE: ICON_SIZE.EXTRA_LARGE,
    FIT: ICON_SIZE.FIT,
    NONE: ICON_SIZE.NONE,
  },
  textSize: {
    SMALL: TEXT_SIZE.SMALL,
    MEDIUM: TEXT_SIZE.MEDIUM,
    LARGE: TEXT_SIZE.EXTRA_LARGE,
    FIT: TEXT_SIZE.FIT,
    NONE: TEXT_SIZE.NONE,
  },
};

export const TEXT_STYLE = {
  POSITIVE: "positive",
  NEGATIVE: "negative",
  NORMAL: "normal",
} as const;
