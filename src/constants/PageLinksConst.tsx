/*
 * テキストタイプ
 */
export const TEXT_TYPE = {
  POSTED_TIME: "postedTime",
  USER_INFO_CARD: "userInfoCard",
};

/**
 * ページ
 */
export const PAGES = {
  PROFILE: {
    PATH: "/profile",
    ICON_PATH: "/profile/userIcon.svg",
    PAGE_NAME: "ユーザー名",
    isLink: false,
    linkList: [
      { PAGE_NAME: "プロフィール設定", PATH: "/profile" },
      { PAGE_NAME: "ログアウト", PATH: "/profile" },
    ],
  },
  MY_EXP: {
    PATH: "/myExp",
    ICON_PATH: "/icon/home.svg",
    PAGE_NAME: "じぶんの経験",
    isLink: true,
  },
  ALL_EXP: {
    PATH: "/allExp",
    ICON_PATH: "/icon/view.svg",
    PAGE_NAME: "みんなの経験",
    isLink: true,
  },
  BOOKMARK: {
    PATH: "/bookmark",
    ICON_PATH: "/icon/bookmark.svg",
    PAGE_NAME: "ブックマーク",
    isLink: true,
  },
  NOTIFICATION: {
    PATH: "/notification",
    ICON_PATH: "/icon/notification.svg",
    PAGE_NAME: "通知",
    isLink: true,
  },
  SETTING: {
    PATH: "/setting",
    ICON_PATH: "/icon/setting.svg",
    PAGE_NAME: "設定",
    isLink: false,
    linkList: [
      { PAGE_NAME: "アカウント設定", PATH: "/setting" },
      { PAGE_NAME: "公開設定", PATH: "/setting" },
      { PAGE_NAME: "通知設定", PATH: "/setting" },
      { PAGE_NAME: "LevelUPについて", PATH: "/setting" },
      { PAGE_NAME: "お問い合わせ", PATH: "/setting" },
    ],
  },
  POST: {
    PATH: "/post",
    ICON_PATH: "/icon/edit.svg",
    PAGE_NAME: "記録する",
    isLink: true,
  },

  POSTED_TIME: {
    PATH: "",
    ICON_PATH: "/icon/clock.svg",
    PAGE_NAME: "投稿時間",
    isLink: false,
    TYPE: TEXT_TYPE.POSTED_TIME,
  },
};

export const COMPONENT_LABEL = {
  FEATURED_POSTS: "注目の経験",
};
