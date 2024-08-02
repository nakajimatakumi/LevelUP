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
        <FlowLine iconPath={ICON_PATH.EXPERIENCE} />
        <p className={styles.experienceContent}>{postInfo.experience}</p>
      </div>
      <div className={styles.reflectionWrapper}>
        <FlowLine iconPath={ICON_PATH.REFLECTION} />
        <div className={styles.reflection}>
          <div className={styles.reflectionContainer}>
            <Image
              src={ICON_PATH.INTROSPECTION}
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
              src={ICON_PATH.IMPROVEMENT}
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
      </div>
      <div className={styles.lesson}>
        <FlowLine iconPath={ICON_PATH.LESSON} />
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
