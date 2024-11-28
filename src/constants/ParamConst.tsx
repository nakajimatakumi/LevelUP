import { ICON_PATH } from "./IconPathConst";

/* コンポーネントのサイズ */
export const COMPONENT_SIZE = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
  FIT: "fit",
  NONE: "none",
} as const;

/* コンポーネントの長さ */
export const COMPONENT_LENGTH = {
  SHORT: "short",
  MEDIUM: "medium",
  LONG: "long",
  FIT: "fit",
  NONE: "none",
} as const;

/* コンポーネントの高さ */
export const COMPONENT_HEIGHT = {
  HIGH: "high",
  MEDIUM: "medium",
  LOW: "low",
} as const;

/* ボタンのバリアント */
export const BUTTON_VARIANT = {
  SEARCH: "search",
  PRIMARY: "primary",
  SECONDARY: "secondary",
  SUBMIT: "submit",
  ICON: "icon",
  NONE: "none",
} as const;

/* フォームのフィールド名 */
export const FORM_FIELD = {
  EXPERIENCE: "experience",
  GOOD_POINTS: "goodPoints",
  BAD_POINTS: "badPoints",
  IMPROVEMENT: "improvement",
  LESSON: "lesson",
  CATEGORY: "category",
  PRIVATE: "private",
} as const;

/* 方向 */
export const SIDE = {
  TOP: "top",
  BOTTOM: "bottom",
} as const;

/* 除外する文字 */
export const EXCLUDE_CHAR = /[<>{}`&;:"\\$|]/;

/* アイコンとテキストのタイプ */
export const ICON_WITH_TEXT_TYPE = {
  USER: "user",
  NAV: "nav",
  POSTED_TIME: "time",
  NONE: "none",
} as const;

/* アイコンのサイズ */
export const ICON_SIZE = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
  EXTRA_LARGE: "extraLarge",
  FIT: "fit",
  NONE: "none",
} as const;

/* テキストのサイズ */
export const TEXT_SIZE = {
  EXTRA_SMALL: "extraSmall",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
  EXTRA_LARGE: "extraLarge",
  FIT: "fit",
  NONE: "none",
} as const;

/* ユーザーアイコンとテキストのサイズ */
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

/* ナビゲーションアイコンとテキストのサイズ */
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

/* ナビゲーションアイテム */
export const NAV_ITEMS = {
  PROFILE: {
    ListItems: [
      {
        ItemName: "プロフィール編集",
        ItemId: "editProfile",
      },
      {
        ItemName: "ログアウト",
        ItemId: "logout",
      },
    ],
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
      {
        ItemName: "アカウント設定",
        ItemId: "account",
      },
      {
        ItemName: "公開設定",
        ItemId: "public",
      },
      {
        ItemName: "通知設定",
        ItemId: "notification",
      },
      {
        ItemName: "LevelUPについて",
        ItemId: "about",
      },
      {
        ItemName: "お問い合わせ",
        ItemId: "contact",
      },
    ],
  },
  POST: {
    ItemName: "記録する",
    iconPath: ICON_PATH.EDIT,
  },
};

/* テキストスタイル */
export const TEXT_STYLE = {
  POSITIVE: "positive",
  NEGATIVE: "negative",
  NORMAL: "normal",
} as const;

export const TEXT_TYPE = {
  DEFAULT: "default",
  ERROR: "error",
} as const;
