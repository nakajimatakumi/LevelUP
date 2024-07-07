import Title from "../elements/Title";
import NavLink from "../elements/NavLink";
import { pages } from "@/constants/pageLink";
import styles from "@/features/styles/layouts/Sidebar.module.css";
import NavLinkList from "../modules/NavLinkList";

export default function Sidebar() {
  return (
    <div className={styles.sidebarWrapper}>
      <div className={styles.titleWrapper}>
        <Title />
      </div>
      <div className={styles.topPageLinkWrapper}>
        <NavLinkList page={pages.profile} userId="userId" />
      </div>
      <nav className={styles.centerPageLinkWrapper}>
        <NavLink page={pages.myExp} userId="userId" />
        <NavLink page={pages.allExp} userId="userId" />
        <NavLink page={pages.bookmark} userId="userId" />
        <NavLink page={pages.notification} userId="userId" />
        <NavLinkList page={pages.setting} userId="userId" />
      </nav>
      <div className={styles.bottomPageLinkWrapper}>
        <NavLink page={pages.post} userId="userId" />
      </div>
    </div>
  );
}
