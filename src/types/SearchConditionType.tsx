export type SearchConditionsType = {
  category: ConditionType;
  job: ConditionType;
  sort: ConditionType;
};

export type ConditionType = {
  listItems: ListItemsType[];
  name: string;
};

export type ListItemsType = {
  value: string;
  name: string;
};
