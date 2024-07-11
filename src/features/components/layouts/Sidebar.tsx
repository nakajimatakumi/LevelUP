import Title from "../elements/Title";
import { page } from "@/types/page";
import styles from "@/features/styles/layouts/Sidebar.module.css";
import NavLink from "../modules/NavLink";

type props = {
  topLink: page;
  centerLinks: page[];
  bottomLink: page;
  userId: string;
};

/**
 * サイドバーコンポーネント
 * @param topLink 上部のリンク
 * @param centerLinks 中央のリンク
 * @param bottomLink 下部のリンク
 * @param userId ユーザーID
 */
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
        <NavLink page={topLink} userId={userId} />
      </div>
      <nav className={styles.centerPageLinkWrapper}>
        {centerLinks.map((link) => (
          <NavLink page={link} userId={userId} key={link.PATH} />
        ))}
      </nav>
      <div className={styles.bottomPageLinkWrapper}>
        <NavLink page={bottomLink} userId={userId} />
      </div>
    </div>
  );
}
