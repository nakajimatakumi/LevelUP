/**
 * 検索フック
 * @returns 検索ハンドラ
 */
export default function useSearch() {
  const handleSearch = async () => {
    "use server";
    console.log("DEBUG LOG: Search");
  };
  return { handleSearch };
}
