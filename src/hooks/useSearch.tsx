/**
 * 検索フック
 * @returns 検索ハンドラ
 */
export default function useSearch() {
  const handleSearch = () => {
    console.log("DEBUG LOG: Search");
    alert("検索");
  };
  return { handleSearch };
}
