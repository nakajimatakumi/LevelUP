import styles from "@/styles/components/layouts/FeaturedPosts.module.css";
import FeaturedPost from "@/components/modules/FeaturedPost";
import * as Separator from "@radix-ui/react-separator";
import useInit from "@/logics/hooks/useInit";
import {
  COMPONENT_LABEL,
  COMPONENT_LENGTH,
  COMPONENT_SIZE,
} from "@/constants/PageLinksConst";
import WordText from "../elements/WordText";
import Card from "../elements/Card";

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
    <Card>
      <div className={styles.root}>
        <div className={styles.title}>
          <WordText
            text={COMPONENT_LABEL.FEATURED_POSTS}
            size={COMPONENT_SIZE.LARGE}
            length={COMPONENT_LENGTH.FIT}
          />
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
    </Card>
  );
}
