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
 * @param userInfo ユーザー情報
 * @param postInfo 投稿情報
 */
export default function UserInfoCard({ postInfo }: Props) {
  // ユーザーの紹介文を配列に格納する関数
  const generateDesc = (desc: string) => {
    return desc.split("\n").slice(0, 6);
  };

  const { initData } = useInit();
  const userData = initData.userData;

  // デフォルトで表示するユーザー情報を設定
  let userContent: contentType = {
    ICON_PATH: userData.userInfo.userIcon,
    PAGE_NAME: userData.userInfo.userName,
    isLink: false,
    TYPE: TEXT_TYPE.USER_INFO_CARD,
  };
  let jobInfo: jobInfoType = {
    jobName: userData.userInfo.jobInfo.jobName,
    jobCategory: userData.userInfo.jobInfo.jobCategory,
    jobColor: userData.userInfo.jobInfo.jobColor,
  };
  let description: string[] = generateDesc(userData.userInfo.description);

  // 投稿情報をクリックした場合は、ユーザー情報を更新
  if (postInfo) {
    userContent.ICON_PATH = postInfo.userInfo.userIcon;
    userContent.PAGE_NAME = postInfo.userInfo.userName;
    jobInfo = postInfo.jobInfo;
    PAGES.POSTED_TIME.PAGE_NAME = postInfo.postedTime;
    description = generateDesc(postInfo.description);
  }

  return (
    <div className={styles.card}>
      <div className={styles.userName}>
        <IconWithText content={userContent} />
      </div>
      <div className={styles.jobBadge}>
        <JobBadge
          jobName={jobInfo.jobName}
          jobCategory={jobInfo.jobCategory}
          jobColor={jobInfo.jobColor}
        />
      </div>
      <div className={styles.description}>
        {/* 説明文を6行まで表示 */}
        {description.slice(0, 6).map((text, index) => (
          <p key={index} className={styles.descriptionText}>
            {text}
          </p>
        ))}
      </div>
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
