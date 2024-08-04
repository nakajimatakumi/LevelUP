"use client";

import { contentType } from "@/types/ContentType";
import { jobInfoType } from "@/types/UserInfoType";
import { createContext, useState } from "react";
import useInit from "@/hooks/useInit";
import useFormatPostInfo from "@/hooks/useFormatPostInfo";
import { dispPostType } from "@/types/PostInfoType";

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
  setDispPost: React.Dispatch<React.SetStateAction<dispPostType>>;
}>({
  dispPost: defaultData,
  setDispPost: () => {},
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
  const { initData } = useInit();
  const { userInfo } = initData.userData;
  const formatPostInfo = useFormatPostInfo(userInfo, null);

  const [dispPost, setDispPost] = useState<dispPostType>({
    ...formatPostInfo,
  });

  return (
    <dispPostContext.Provider value={{ dispPost, setDispPost }}>
      {children}
    </dispPostContext.Provider>
  );
};
