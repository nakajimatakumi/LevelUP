"use client";

import { contentType } from "@/types/ContentType";
import { jobInfoType, userInfoType } from "@/types/UserInfoType";
import { createContext, useState } from "react";
import useInit from "@/hooks/useInit";
import useFormatPostInfo from "@/hooks/useFormatPostInfo";
import { dispPostType, postInfoType } from "@/types/PostInfoType";

// デフォルト値
const defaultData = {
  userInfo: {} as contentType,
  jobInfo: {} as jobInfoType,
  description: "",
};

/**
 * 投稿情報表示コンポーネントの表示内容を管理するコンテキスト
 */
export const dispPostContext = createContext<{
  dispPost: dispPostType;
  handlePostClick: (formattedPostInfo: dispPostType) => void;
}>({
  dispPost: defaultData,
  handlePostClick: () => {},
});

/**
 * コンテキストプロバイダー
 * @param children 子コンポーネント
 */
export const DispPostProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  /* 初期データ取得処理 */
  const { initData } = useInit();
  const { userInfo } = initData;
  /* カード表示データの状態 */
  const [dispPost, setDispPost] = useState<dispPostType>(
    useFormatPostInfo(userInfo, null)
  );

  /* 投稿クリック時処理 */
  const handlePostClick = (formattedPostInfo: dispPostType) => {
    setDispPost(formattedPostInfo);
  };

  return (
    <dispPostContext.Provider value={{ dispPost, handlePostClick }}>
      {children}
    </dispPostContext.Provider>
  );
};
