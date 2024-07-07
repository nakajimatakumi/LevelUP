export const pages = {
  profile: {
    PATH: "/profile",
    ICON_PATH: "/profile/userIcon.svg",
    PAGE_NAME: "ユーザー名１",
    isLink: false,
    linkList: [
      { PAGE_NAME: "プロフィール設定", PATH: "/profile" },
      { PAGE_NAME: "ログアウト", PATH: "/profile" },
    ],
  },
  myExp: {
    PATH: "/myExp",
    ICON_PATH: "/icon/home.svg",
    PAGE_NAME: "じぶんの経験",
    isLink: true,
  },
  allExp: {
    PATH: "/allExp",
    ICON_PATH: "/icon/view.svg",
    PAGE_NAME: "みんなの経験",
    isLink: true,
  },
  bookmark: {
    PATH: "/bookmark",
    ICON_PATH: "/icon/bookmark.svg",
    PAGE_NAME: "ブックマーク",
    isLink: true,
  },
  notification: {
    PATH: "/notification",
    ICON_PATH: "/icon/notification.svg",
    PAGE_NAME: "通知",
    isLink: true,
  },
  setting: {
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
  post: {
    PATH: "/post",
    ICON_PATH: "/icon/edit.svg",
    PAGE_NAME: "記録する",
    isLink: true,
  },
};
