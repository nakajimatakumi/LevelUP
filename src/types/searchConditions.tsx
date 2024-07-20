export type searchConditions = {
  category: condition;
  job: condition;
  sort: condition;
};

export type condition = {
  listItems: listItems[];
  name: string;
};

export type listItems = {
  value: string;
  name: string;
};
