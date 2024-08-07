import styles from "@/styles/components/layouts/FeaturedPosts.module.css";
import FeaturedPost from "@/components/modules/FeaturedPost";
import * as Separator from "@radix-ui/react-separator";
import useInit from "@/logics/hooks/useInit";
import { COMPONENT_LABEL } from "@/constants/PageLinksConst";

/**
 * 注目の経験を表示するコンポーネント
 * @param posts - 注目の経験の配列
 */
export default function FeaturedPosts() {
  /** 初期データ取得関数 */
  const { initData } = useInit();
  /** 注目の経験 */
  const featuredPosts = initData.featuredPosts;

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <p>{COMPONENT_LABEL.FEATURED_POSTS}</p>
      </div>
      <ul className={styles.list}>
        {featuredPosts.map((post, index) => (
          <li key={index} className={styles.item}>
            <FeaturedPost post={post} index={index} key={index} />
            {index < 4 && <Separator.Root className={styles.separator} />}
          </li>
        ))}
      </ul>
    </div>
  );
}
