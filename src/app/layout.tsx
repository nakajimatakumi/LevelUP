import type { Metadata } from "next";
import { Kosugi_Maru } from "next/font/google";
import styles from "../styles/global.module.css";
import Sidebar from "@/features/components/layouts/Sidebar";

const kosugiMaru = Kosugi_Maru({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Level UP",
  description: "Level UP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={kosugiMaru.className}>
      <body className={styles.body}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
