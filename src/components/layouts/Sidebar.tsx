import Title from "../elements/Title";
import { userIconInfoType } from "@/types/UserInfoType";
import styles from "@/styles/components/layouts/Sidebar.module.css";
import NavLink from "../modules/NavLink";
import useInit from "@/hooks/useInit";
import { COMPONENT_SIZE, PAGES } from "@/constants/PageLinksConst";

/**
 * サイドバーコンポーネント
 */
export default function Sidebar() {
  const { initData } = useInit();
  const userIconInfo: userIconInfoType =
    initData.userData.userInfo.userIconInfo;
  const profilePage = {
    ...PAGES.PROFILE,
    userIconInfo,
    pageName: initData.userData.userInfo.userName,
    type: COMPONENT_SIZE.LARGE,
  };
  const centerLinks = [
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
          <NavLink content={profilePage} />
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
