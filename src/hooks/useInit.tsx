import { searchConditions } from "@/app/_testData/searchConditions.json";

/**
 * 初期化フック
 */
export const useInit = () => {
  const getInitData = () => {
    console.log("DEBUG LOG: init");
    return searchConditions;
  };
  return { getInitData };
};
