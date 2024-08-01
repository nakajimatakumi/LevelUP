import styles from "../../styles/components/elements/PostTextBox.module.css";
import { Separator } from "@radix-ui/react-separator";
import { postInfoType } from "@/types/PostInfoType";
import Image from "next/image";
import FlowLine from "./FlowLine";
import { ICON_PATH } from "@/constants/IconPathConst";

type Props = {
  postInfo: postInfoType;
};

/**
 *  投稿テキストボックス
 * @param postInfo 投稿情報
 */
export default function PostTextBox({ postInfo }: Props) {
  return (
    <>
      <div className={styles.experience}>
        <div className={styles.flowLineWrapper}>
          <FlowLine iconPath={ICON_PATH.EXPERIENCE} />
        </div>
        <p className={styles.experienceContent}>{postInfo.experience}</p>
      </div>
      <div className={styles.reflection}>
        <div className={styles.reflectionContainer}>
          <Image
            src="/icon/introspection.svg"
            alt="introspection"
            width={25}
            height={25}
          />
          <ul className={styles.positiveContent}>
            {postInfo.reflections.positiveList.map((positive, index) => (
              <li key={index} className={styles.positiveContent}>
                {positive}
              </li>
            ))}
          </ul>
          <ul className={styles.negativeContent}>
            {postInfo.reflections.negativeList.map((negative, index) => (
              <li key={index} className={styles.negativeContent}>
                {negative}
              </li>
            ))}
          </ul>
        </div>
        <Separator className={styles.separator} />
        <div className={styles.improvementContainer}>
          <Image
            src="/icon/improvement.svg"
            alt="improvement"
            width={25}
            height={25}
          />
          <ul className={styles.improvementContent}>
            {postInfo.improvementsList.map((improvement, index) => (
              <li key={index} className={styles.improvementContent}>
                {improvement}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.lesson}>
        <ul className={styles.lessonContents}>
          {postInfo.lessonsList.map((lesson, index) => (
            <li key={index} className={styles.lessonContent}>
              {lesson}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
