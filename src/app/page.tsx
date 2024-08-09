import SearchForm from "@/components/layouts/SearchForm";
import styles from "@/styles/app/Home.module.css";
import UserInfoCard from "@/components/layouts/UserInfoCard";
import FeaturedPosts from "@/components/layouts/FeaturedPosts";
import PostList from "@/components/layouts/PostList";
import { DispPostCardProvider } from "@/contexts/DispPostCardContext";
import { DispPostListProvider } from "@/contexts/DispPostListContext";
import { ToastProvider } from "@/contexts/ToastContext";
/**
 * トップページ
 */
export default function TopPage() {
  return (
    <DispPostListProvider>
      <DispPostCardProvider>
        <ToastProvider>
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
        </ToastProvider>
      </DispPostCardProvider>
    </DispPostListProvider>
  );
}
