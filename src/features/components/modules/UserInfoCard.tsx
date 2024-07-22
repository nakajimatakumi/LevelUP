import styles from "@/features/styles/modules/UserInfoCard.module.css";
import JobBadge from "../elements/JobBadge";
import IconWithText from "../elements/IconWithText";
import CategoryBadge from "../elements/CategoryBadge";
import { PAGES } from "@/constants/pageLinks";

const user1 = {
  ICON_PATH: "/profile/userIcon.svg",
  PAGE_NAME: "ユーザー名１",
  isLink: false,
  type: "userInfoCard",
};

const postedTime: string = "2024.01.01 12:00";
PAGES.POSTED_TIME.PAGE_NAME = postedTime;

/**
 * ユーザー情報カード
 */
export default function UserInfoCard() {
  return (
    <div className={styles.card}>
      <div className={styles.userName}>
        <IconWithText page={user1} userId="User1" />
      </div>
      <div className={styles.jobBadge}>
        <JobBadge
          jobName="システムエンジニア"
          jobCategory="employee"
          jobColor="#C0D7D8"
        />
      </div>
      <div className={styles.description}>
        <p>私の名前はテストユーザーです。</p>
        <p>私の趣味は図書館に行って歴史書を読むことです。</p>
        <p>最近システムエンジニアになりました。</p>
      </div>
      <div className={styles.postCategory}>
        <CategoryBadge categoryName="趣味" />
      </div>
      <div className={styles.postTime}>
        <IconWithText page={PAGES.POSTED_TIME} userId="User1" />
      </div>
    </div>
  );
}
