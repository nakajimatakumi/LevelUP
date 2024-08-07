import SearchForm from "@/components/layouts/SearchForm";
import styles from "@/styles/app/Home.module.css";
import UserInfoCard from "@/components/layouts/UserInfoCard";
import FeaturedPosts from "@/components/layouts/FeaturedPosts";
import PostList from "@/components/layouts/PostList";
import { DispPostProvider } from "@/contexts/DispPostContext";

/**
 * トップページ
 */
export default function TopPage() {
  return (
    <DispPostProvider>
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
            <UserInfoCard />
          </div>
          <div className={styles.featuredPosts}>
            <FeaturedPosts />
          </div>
        </div>
      </div>
    </DispPostProvider>
  );
}
