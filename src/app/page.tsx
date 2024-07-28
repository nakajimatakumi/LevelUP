import SearchForm from "@/components/modules/SearchForm";
import styles from "@/styles/app/Home.module.css";
import UserInfoCard from "@/components/modules/UserInfoCard";
import FeaturedPosts from "@/components/modules/FeaturedPosts";
import PostList from "@/components/layouts/PostList";

/**
 * トップページ
 */
export default function TopPage() {
  const postInfo = null;
  return (
    <div className={styles.root}>
      <div className={styles.centerContent}>
        <div className={styles.postList}>
          <PostList />
        </div>
      </div>
      <div className={styles.rightSideContent}>
        <div className={styles.searchForm}>
          <SearchForm />
        </div>
        <div className={styles.userInfoCard}>
          <UserInfoCard postInfo={postInfo} />
        </div>
        <div className={styles.featuredPosts}>
          <FeaturedPosts />
        </div>
      </div>
    </div>
  );
}
