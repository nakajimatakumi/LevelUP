import { searchConditions } from "@/app/_testData/searchConditions.json";
import userData from "@/app/_testData/userData.json";

/**
 * 初期化フック
 * @return {searchConditions} 検索条件
 * @return {userData} ユーザー情報
 */
export default function useInit() {
  const getInitData = () => {
    console.log("DEBUG LOG: Init");
    return { searchConditions, userData };
  };
  return { getInitData };
}
