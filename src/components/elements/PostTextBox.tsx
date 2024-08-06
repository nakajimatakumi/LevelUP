import styles from "../../styles/components/elements/PostTextBox.module.css";
import { postInfoType } from "@/types/PostInfoType";
import * as Accordion from "@radix-ui/react-accordion";
import Experience from "./Experience";
import Reflection from "./Reflection";
import Lesson from "./Lesson";

type Props = {
  postInfo: postInfoType;
  eventHandler: () => void;
};

/**
 *  投稿テキストボックス
 * @param postInfo 投稿情報
 */
export default function PostTextBox({ postInfo, eventHandler }: Props) {
  return (
    <div className={styles.root}>
      <Accordion.Trigger
        className={styles.trigger}
        onClick={() => eventHandler()}
      >
        <Experience experience={postInfo.experience} />
        <Accordion.Content className={styles.content}>
          <Reflection
            reflections={postInfo.reflections}
            improvementsList={postInfo.improvementsList}
          />
          <Lesson lessonsList={postInfo.lessonsList} />
        </Accordion.Content>
      </Accordion.Trigger>
    </div>
  );
}
