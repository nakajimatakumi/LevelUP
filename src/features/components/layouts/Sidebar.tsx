import Title from "../elements/Title";
import PageLink from "../elements/PageLink";
import { pages } from "@/constants/pageLink";
import styles from "@/features/styles/layouts/Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles.sidebarWrapper}>
      <div className={styles.titleWrapper}>
        <Title />
      </div>
      <nav className={styles.centerPageLinkWrapper}>
        <PageLink page={pages.myExp} userId="userId" />
        <PageLink page={pages.allExp} userId="userId" />
        <PageLink page={pages.bookmark} userId="userId" />
        <PageLink page={pages.notification} userId="userId" />
        <PageLink page={pages.setting} userId="userId" />
      </nav>
      <div className={styles.bottomPageLinkWrapper}>
        <PageLink page={pages.post} userId="userId" />
      </div>
    </div>
  );
}
