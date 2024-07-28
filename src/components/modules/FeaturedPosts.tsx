import styles from "@/styles/components/modules/FeaturedPosts.module.css";
import FeaturedPost from "../elements/FeaturedPost";
import * as Separator from "@radix-ui/react-separator";
import useInit from "@/hooks/useInit";
import { COMPONENT_LABEL } from "@/constants/PageLinksConst";

/**
 * 注目の経験を表示するコンポーネント
 * @param posts - 注目の経験の配列
 */
export default function FeaturedPosts() {
  /** 初期データ取得関数 */
  const initData = useInit();
  /** 注目の経験 */
  const { featuredPosts } = initData.initData.userData;

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <p>{COMPONENT_LABEL.FEATURED_POSTS}</p>
      </div>
      <ol className={styles.list}>
        {featuredPosts.map((post, index) => (
          <>
            <FeaturedPost key={post.id} post={post} index={index} />
            {index < 4 && <Separator.Root className={styles.separator} />}
          </>
        ))}
      </ol>
    </div>
  );
}
