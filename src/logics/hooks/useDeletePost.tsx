import { dispPostListContext } from "@/contexts/DispPostListContext";
import { useContext } from "react";

/**
 * 投稿削除ロジック
 * @param postId 投稿ID
 * @returns {deletePost} 投稿削除関数
 */
export default function useDeletePost(postId: string) {
  /* 投稿表示データの状態更新関数取得 */
  const { setDispPostList } = useContext(dispPostListContext);

  /* 投稿削除関数 */
  const deletePost = () => {
    setDispPostList((prev) =>
      prev.filter((post) => post.postInfo.postId !== postId)
    );
  };

  return { deletePost };
}
