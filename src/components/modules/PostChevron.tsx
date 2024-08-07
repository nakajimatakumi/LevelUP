"use client";

import { ICON_PATH } from "@/constants/IconPathConst";
import * as Accordion from "@radix-ui/react-accordion";
import Image from "next/image";
import styles from "@/styles/components/modules/PostChevron.module.css";
import { useContext } from "react";
import { dispPostContext } from "@/contexts/DispPostContext";
import formatPostInfo from "@/logics/functions/FormatPostInfo";
import { userInfoType } from "@/types/UserInfoType";
import { postInfoType } from "@/types/PostInfoType";

type Props = {
  userInfo: userInfoType;
  postInfo: postInfoType;
};

export default function PostChevron({ userInfo, postInfo }: Props) {
  /* カード表示データの状態更新関数 */
  const { handlePostClick } = useContext(dispPostContext);

  /* データ成形処理 */
  const formattedPostInfo = formatPostInfo({ userInfo, postInfo });
  return (
    <Accordion.Trigger
      className={styles.trigger}
      onClick={() => handlePostClick(formattedPostInfo)}
    >
      <Image
        src={ICON_PATH.CHEVRON}
        alt="chevron"
        width={18}
        height={18}
        className={styles.chevron}
      />
    </Accordion.Trigger>
  );
}
