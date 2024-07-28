import styles from "@/styles/components/modules/UserInfoCard.module.css";
import JobBadge from "../elements/JobBadge";
import IconWithText from "../elements/IconWithText";
import CategoryBadge from "../elements/CategoryBadge";
import { PAGES, TEXT_TYPE } from "@/constants/PageLinksConst";
import { jobInfoType, postInfoType } from "@/types/PostInfoType";
import { contentType } from "@/types/ContentType";
import useInit from "@/hooks/useInit";

type Props = {
  postInfo: postInfoType | null;
};

/**
 * ユーザー情報カード
 * @param postInfo 投稿情報
 */
export default function UserInfoCard({ postInfo }: Props) {
  // 初期データ取得処理
  const { initData } = useInit();
  const { userInfo } = initData.userData;

  // ユーザー情報を設定（投稿情報がある場合はそちらを優先）
  const userContent: contentType = {
    ICON_PATH: postInfo?.userInfo.userIcon ?? userInfo.userIcon,
    PAGE_NAME: postInfo?.userInfo.userName ?? userInfo.userName,
    isLink: false,
    TYPE: TEXT_TYPE.USER_INFO_CARD,
  };

  // 職業情報を設定（投稿情報がある場合はそちらを優先）
  const jobInfo: jobInfoType = postInfo?.jobInfo ?? userInfo.jobInfo;
  const description: string = postInfo?.description ?? userInfo.description;

  // 投稿時間を更新（投稿情報がある場合のみ）
  if (postInfo) {
    PAGES.POSTED_TIME.PAGE_NAME = postInfo.postedTime;
  }

  return (
    <div className={styles.card}>
      <div className={styles.userName}>
        <IconWithText content={userContent} />
      </div>
      <div className={styles.jobBadge}>
        <JobBadge {...jobInfo} />
      </div>
      <p className={styles.description}>{description}</p>
      {postInfo && (
        <>
          <div className={styles.postCategory}>
            <CategoryBadge postCategory={postInfo.postCategory} />
          </div>
          <div className={styles.postTime}>
            <IconWithText content={PAGES.POSTED_TIME} />
          </div>
        </>
      )}
    </div>
  );
}
