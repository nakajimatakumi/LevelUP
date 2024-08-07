import init_data from "@/app/_testData/init_data.json";
/**
 * 初期化フック
 * @return {getInitData} 初期化データ取得関数
 */
export default function useInit() {
  const getInitData = () => {
    const initData = init_data;
    return initData;
  };

  const initData = getInitData();
  return { getInitData, initData };
}
