export type contentType = {
  PATH?: string;
  ICON_PATH: string;
  PAGE_NAME: string;
  isLink: boolean;
  linkList?: linkListType[];
  TYPE?: string;
};

export type linkListType = {
  PAGE_NAME: string;
  PATH: string;
};
