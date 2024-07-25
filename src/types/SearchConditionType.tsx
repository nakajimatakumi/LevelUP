export type searchConditionsType = {
  category: conditionType;
  job: conditionType;
  sort: conditionType;
};

export type conditionType = {
  listItems: listItemsType[];
  name: string;
};

export type listItemsType = {
  value: string;
  name: string;
};
