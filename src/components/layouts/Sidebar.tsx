import Title from "@/components/elements/Title";
import styles from "@/styles/components/layouts/Sidebar.module.css";
import NavLink from "@/components/elements/NavLink";
import useInit from "@/logics/hooks/useInit";
import { COMPONENT_SIZE, PAGES } from "@/constants/PageLinksConst";
import { contentType } from "@/types/ContentType";

/**
 * サイドバーコンポーネント
 */
export default function Sidebar() {
  /* 初期データ取得処理 */
  const { initData } = useInit();

  /* プロフィール */
  const profileContent: contentType = {
    ...PAGES.PROFILE,
    userIconInfo: initData.userInfo.userIconInfo,
    pageName: initData.userInfo.userName,
    type: COMPONENT_SIZE.LARGE,
  };

  /* センターページリンク */
  const centerLinks: contentType[] = [
    PAGES.MY_EXP,
    PAGES.ALL_EXP,
    PAGES.BOOKMARK,
    PAGES.NOTIFICATION,
    PAGES.SETTING,
  ];

  return (
    <div className={styles.sidebarWrapper}>
      <div className={styles.sidebarContent}>
        <div className={styles.titleWrapper}>
          <Title />
        </div>
        <div className={styles.topPageLinkWrapper}>
          <NavLink content={profileContent} />
        </div>
        <nav className={styles.centerPageLinkWrapper}>
          {centerLinks.map((link) => (
            <NavLink content={link} key={link.path} />
          ))}
        </nav>
        <div className={styles.bottomPageLinkWrapper}>
          <NavLink content={PAGES.POST} />
        </div>
      </div>
    </div>
  );
}
