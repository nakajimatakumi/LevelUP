"use client";

import { contentType } from "@/types/ContentType";
import { jobInfoType } from "@/types/UserInfoType";
import { createContext, useState } from "react";
import useInit from "@/logics/hooks/useInit";
import { dispPostCardType } from "@/types/PostInfoType";
import formatPostInfo from "@/logics/functions/FormatPostInfo";

/* デフォルト値 */
const defaultData = {
  userInfo: {} as contentType,
  jobInfo: {} as jobInfoType,
  description: "",
};

/**
 * 投稿情報表示カードコンポーネントの表示内容を管理するコンテキスト
 */
export const dispPostCardContext = createContext<{
  dispPostCard: dispPostCardType;
  handlePostClick: (formattedPostInfo: dispPostCardType) => void;
}>({
  dispPostCard: defaultData,
  handlePostClick: () => {},
});

/**
 * コンテキストプロバイダ
 * @param children 子コンポーネント
 */
export const DispPostCardProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  /* 初期データ取得処理 */
  const { initData } = useInit();
  const { userInfo } = initData;
  /* カード表示データの状態 */
  const [dispPostCard, setDispPostCard] = useState<dispPostCardType>(
    formatPostInfo({ userInfo, postInfo: null })
  );

  /* 投稿クリック時処理 */
  const handlePostClick = (formattedPostInfo: dispPostCardType) => {
    setDispPostCard(formattedPostInfo);
  };

  return (
    <dispPostCardContext.Provider value={{ dispPostCard, handlePostClick }}>
      {children}
    </dispPostCardContext.Provider>
  );
};
