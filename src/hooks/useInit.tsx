import { searchConditions } from "@/app/_testData/searchConditions.json";
import userData from "@/app/_testData/userData.json";

/**
 * 初期化フック
 * @return {getInitData} 初期化データ取得関数
 */
export default function useInit() {
  const getInitData = () => {
    console.log("DEBUG LOG: Init");
    const initData = { searchConditions, userData };
    return initData;
  };

  const initData = getInitData();
  return { getInitData, initData };
}
