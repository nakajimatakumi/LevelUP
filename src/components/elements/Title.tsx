import Image from "next/image";
import logo from "@/../public/title/logo.svg";
import title from "@/../public/title/title.svg";
import styles from "@/styles/components/elements/Title.module.css";
import Link from "next/link";

/**
 * タイトルコンポーネント
 */
export default function Title() {
  return (
    <Link href="/">
      <div className={styles.title}>
        <Image src={logo} alt="logo" />
        <Image src={title} alt="title" />
      </div>
    </Link>
  );
}
