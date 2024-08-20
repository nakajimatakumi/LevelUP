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

export const COMPONENT_HEIGHT = {
  HIGH: "high",
  MEDIUM: "medium",
  LOW: "low",
} as const;

export const BUTTON_VARIANT = {
  SEARCH: "search",
  PRIMARY: "primary",
  SECONDARY: "secondary",
  SUBMIT: "submit",
  ICON: "icon",
  NONE: "none",
} as const;

export const FORM_FIELD = {
  EXPERIENCE: "experience",
  GOOD_POINTS: "goodPoints",
  BAD_POINTS: "badPoints",
  IMPROVEMENT: "improvement",
  LESSON: "lesson",
  CATEGORY: "category",
  PRIVATE: "private",
} as const;

export const SIDE = {
  TOP: "top",
  BOTTOM: "bottom",
} as const;

export const EXCLUDE_CHAR = /[<>&;:"\\$|]/;
