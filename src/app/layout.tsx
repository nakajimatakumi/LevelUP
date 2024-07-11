import type { Metadata } from "next";
import { Kosugi_Maru } from "next/font/google";
import styles from "../styles/global.module.css";
import Sidebar from "@/features/components/layouts/Sidebar";
import { pages } from "@/constants/pageLink";
import SearchForm from "@/features/components/modules/SearchForm";

const kosugiMaru = Kosugi_Maru({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Level UP",
  description: "Level UP",
};

/**
 * レイアウトコンポーネント
 * @param children ページ
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={kosugiMaru.className}>
      <body className={styles.body}>
        <div className={styles.sidebar}>
          <Sidebar
            topLink={pages.PROFILE}
            centerLinks={[
              pages.MY_EXP,
              pages.ALL_EXP,
              pages.BOOKMARK,
              pages.NOTIFICATION,
              pages.SETTING,
            ]}
            bottomLink={pages.POST}
            userId="userId"
          />
          {children}
        </div>
        <div className={styles.searchForm}>
          <SearchForm />
        </div>
      </body>
    </html>
  );
}
