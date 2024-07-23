export type content = {
  PATH?: string;
  ICON_PATH: string;
  PAGE_NAME: string;
  isLink: boolean;
  linkList?: linkList[];
  TYPE?: string;
};

export type linkList = {
  PAGE_NAME: string;
  PATH: string;
};
