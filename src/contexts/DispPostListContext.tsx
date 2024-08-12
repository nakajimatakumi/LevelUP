"use client";

import useInit from "@/logics/hooks/useInit";
import { createContext, useState } from "react";
import { PostListType } from "@/types/InitDataType";

/**
 * 投稿一覧コンポーネントの表示内容を管理するコンテキスト
 */
export const dispPostListContext = createContext<{
  dispPostList: PostListType[];
  setDispPostList: React.Dispatch<React.SetStateAction<PostListType[]>>;
}>({
  dispPostList: [],
  setDispPostList: () => {},
});

/**
 * コンテキストプロバイダ
 * @param children 子コンポーネント
 */
export const DispPostListProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { initData } = useInit();
  const [dispPostList, setDispPostList] = useState<PostListType[]>(
    initData.postList
  );

  return (
    <dispPostListContext.Provider value={{ dispPostList, setDispPostList }}>
      {children}
    </dispPostListContext.Provider>
  );
};
