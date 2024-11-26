import type { Metadata } from "next";
import { Kosugi_Maru } from "next/font/google";
import styles from "../styles/global.module.css";
import Sidebar from "@/components/layouts/Sidebar";

export const kosugiMaru = Kosugi_Maru({
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
          <Sidebar />
        </div>
        {children}
      </body>
    </html>
  );
}
