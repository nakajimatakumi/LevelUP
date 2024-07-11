import Image from "next/image";
import logo from "@/../public/title/logo.svg";
import title from "@/../public/title/title.svg";
import styles from "../../styles/elements/Title.module.css";

/**
 * タイトルコンポーネント
 * @todo リンクにする
 */
export default function Title() {
  return (
    <div className={styles.title}>
      <Image src={logo} alt="logo" />
      <Image src={title} alt="title" />
    </div>
  );
}
