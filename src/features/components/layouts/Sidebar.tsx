import Title from "../elements/Title";
import { page } from "@/types/page";
import styles from "@/features/styles/layouts/Sidebar.module.css";
import NavLinkList from "../modules/NavLinkList";

type props = {
  topLink: page;
  centerLinks: page[];
  bottomLink: page;
  userId: string;
};

export default function Sidebar({
  topLink,
  centerLinks,
  bottomLink,
  userId,
}: props) {
  return (
    <div className={styles.sidebarWrapper}>
      <div className={styles.titleWrapper}>
        <Title />
      </div>
      <div className={styles.topPageLinkWrapper}>
        <NavLinkList page={topLink} userId={userId} />
      </div>
      <nav className={styles.centerPageLinkWrapper}>
        {centerLinks.map((link) => (
          <NavLinkList page={link} userId={userId} key={link.PATH} />
        ))}
      </nav>
      <div className={styles.bottomPageLinkWrapper}>
        <NavLinkList page={bottomLink} userId={userId} />
      </div>
    </div>
  );
}
