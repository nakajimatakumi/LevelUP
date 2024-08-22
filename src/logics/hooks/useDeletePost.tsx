import {
  MESSAGE_PARAMS,
  MESSAGE_TEMPLATE,
} from "@/constants/MessageTemplateConst";
import { dispPostListContext } from "@/contexts/DispPostListContext";
import { useContext } from "react";
import generateMessage from "../functions/GenerateMessage";
import { ToastContext } from "@/contexts/ToastContext";

/**
 * 投稿削除ロジック
 * @param postId 投稿ID
 * @returns {deletePost} 投稿削除関数
 */
export default function useDeletePost(postId: string) {
  /* 投稿表示データの状態更新関数取得 */
  const { setDispPostList } = useContext(dispPostListContext);

  /* トースト表示関数取得 */
  const { showToast } = useContext(ToastContext);

  /* 投稿削除関数 */
  const deletePost = () => {
    setDispPostList((prev) =>
      prev.filter((post) => post.postInfo.postId !== postId)
    );
    showToast(
      generateMessage(MESSAGE_TEMPLATE.COMPLETE_MESSAGE, [
        MESSAGE_PARAMS.POST,
        MESSAGE_PARAMS.DELETE,
      ])
    );
  };

  return { deletePost };
}
