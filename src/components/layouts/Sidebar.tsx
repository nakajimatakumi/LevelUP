import Title from "../elements/Title";
import { contentType } from "@/types/ContentType";
import styles from "@/styles/components/layouts/Sidebar.module.css";
import NavLink from "../modules/NavLink";

type Props = {
  topLink: contentType;
  centerLinks: contentType[];
  bottomLink: contentType;
};

/**
 * サイドバーコンポーネント
 * @param topLink 上部のリンク
 * @param centerLinks 中央のリンク
 * @param bottomLink 下部のリンク
 */
export default function Sidebar({ topLink, centerLinks, bottomLink }: Props) {
  return (
    <div className={styles.sidebarWrapper}>
      <div className={styles.sidebarContent}>
        <div className={styles.titleWrapper}>
          <Title />
        </div>
        <div className={styles.topPageLinkWrapper}>
          <NavLink content={topLink} />
        </div>
        <nav className={styles.centerPageLinkWrapper}>
          {centerLinks.map((link) => (
            <NavLink content={link} key={link.PATH} />
          ))}
        </nav>
        <div className={styles.bottomPageLinkWrapper}>
          <NavLink content={bottomLink} />
        </div>
      </div>
    </div>
  );
}
