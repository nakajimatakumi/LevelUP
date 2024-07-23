import styles from "@/features/styles/modules/UserInfoCard.module.css";
import JobBadge from "../elements/JobBadge";
import IconWithText from "../elements/IconWithText";
import CategoryBadge from "../elements/CategoryBadge";
import { PAGES, TEXT_TYPE } from "@/constants/pageLinks";
import { jobInfo, postInfo } from "@/types/postInfo";
import { userInfo } from "@/types/userInfo";
import { content } from "@/types/content";

type Props = {
  userInfo: userInfo;
  postInfo: postInfo | null;
};

/**
 * ユーザー情報カード
 * @param userInfo ユーザー情報
 * @param postInfo 投稿情報
 */
export default function UserInfoCard({ userInfo, postInfo }: Props) {
  // ユーザーの紹介文を配列に格納する関数
  const generateDesc = (desc: string) => {
    return desc.split("\n").slice(0, 6);
  };

  // デフォルトで表示するユーザー情報を設定
  let userContent: content = {
    ICON_PATH: userInfo.userIcon,
    PAGE_NAME: userInfo.userName,
    isLink: false,
    TYPE: TEXT_TYPE.USER_INFO_CARD,
  };
  let jobInfo: jobInfo = {
    jobName: userInfo.jobInfo.jobName,
    jobCategory: userInfo.jobInfo.jobCategory,
    jobColor: userInfo.jobInfo.jobColor,
  };
  let description: string[] = generateDesc(userInfo.description);

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
        <IconWithText content={userContent} userId={userInfo.userId} />
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
            <IconWithText
              content={PAGES.POSTED_TIME}
              userId={userInfo.userId}
            />
          </div>
        </>
      )}
    </div>
  );
}
