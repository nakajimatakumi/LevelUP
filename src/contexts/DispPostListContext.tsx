"use client";

import useInit from "@/logics/hooks/useInit";
import { createContext, useState } from "react";
import { postListType } from "@/types/InitDataType";

/**
 * 投稿一覧コンポーネントの表示内容を管理するコンテキスト
 */
export const dispPostListContext = createContext<{
  dispPostList: postListType[];
  setDispPostList: React.Dispatch<React.SetStateAction<postListType[]>>;
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
  const [dispPostList, setDispPostList] = useState<postListType[]>(
    initData.postList
  );

  return (
    <dispPostListContext.Provider value={{ dispPostList, setDispPostList }}>
      {children}
    </dispPostListContext.Provider>
  );
};
