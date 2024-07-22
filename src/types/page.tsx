export type page = {
  PATH?: string;
  ICON_PATH: string;
  PAGE_NAME: string;
  isLink: boolean;
  linkList?: linkList[];
  type?: string;
};

export type linkList = {
  PAGE_NAME: string;
  PATH: string;
};
