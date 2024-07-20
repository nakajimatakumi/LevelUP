/**
 * 検索フック
 */
export const useSearch = () => {
  const handleSearch = () => {
    console.log("DEBUG LOG: search");
    alert("検索");
  };
  return { handleSearch };
};
