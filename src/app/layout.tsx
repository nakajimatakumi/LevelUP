import type { Metadata } from "next";
import { Kosugi_Maru } from "next/font/google";
import styles from "../styles/global.module.css";
import Sidebar from "@/features/components/layouts/Sidebar";
import { PAGES } from "@/constants/pageLinks";

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
            topLink={PAGES.PROFILE}
            centerLinks={[
              PAGES.MY_EXP,
              PAGES.ALL_EXP,
              PAGES.BOOKMARK,
              PAGES.NOTIFICATION,
              PAGES.SETTING,
            ]}
            bottomLink={PAGES.POST}
            userId="userId"
          />
          {children}
        </div>
      </body>
    </html>
  );
}
