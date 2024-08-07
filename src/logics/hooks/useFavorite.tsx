import { useState, useCallback, useMemo } from "react";

/**
 * いいねボタンロジック
 * @param initialFavoriteNum いいね数
 * @param initialIsFavorite いいね済フラグ
 * @return {isFavoriteState} いいね済フラグ
 * @return {handleFavoriteClick} いいね数更新関数
 * @return {formattedFavoriteNum} フォーマット済みいいね数
 */
export default function useFavorite(
  initialFavoriteNum: number,
  initialIsFavorite: boolean
) {
  /* いいね数 */
  const [favoriteNumState, setFavoriteNumState] = useState(initialFavoriteNum);
  /* いいね済フラグ */
  const [isFavoriteState, setIsFavoriteState] = useState(initialIsFavorite);

  /* いいね数更新関数 */
  const handleFavoriteClick = useCallback(() => {
    setFavoriteNumState((prev) => (isFavoriteState ? prev - 1 : prev + 1));
    setIsFavoriteState((prev) => !prev);
  }, [isFavoriteState]);

  /* いいね数フォーマット関数 */
  const formatFavoriteNum = useCallback((num: number) => {
    if (num >= 10001) {
      return "10k+";
    }
    return num >= 1000 ? `${(num / 1000).toFixed(1)}k` : num.toString();
  }, []);

  /* フォーマット済みいいね数 */
  const formattedFavoriteNum = useMemo(
    () => formatFavoriteNum(favoriteNumState),
    [favoriteNumState, formatFavoriteNum]
  );

  return {
    isFavoriteState,
    handleFavoriteClick,
    formattedFavoriteNum,
  };
}
