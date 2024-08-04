import styles from "../../styles/components/elements/PostTextBox.module.css";
import { postInfoType } from "@/types/PostInfoType";
import * as Accordion from "@radix-ui/react-accordion";
import Experience from "./Experience";
import Reflection from "./Reflection";
import Lesson from "./Lesson";
import { userInfoType } from "@/types/UserInfoType";

type Props = {
  postInfo: postInfoType;
  userInfo: userInfoType;
  eventHandler: () => void;
};

/**
 *  投稿テキストボックス
 * @param postInfo 投稿情報
 */
export default function PostTextBox({ postInfo, eventHandler }: Props) {
  return (
    <>
      <Accordion.Trigger
        className={styles.trigger}
        onClick={() => eventHandler()}
      >
        <Experience experience={postInfo.experience} />
      </Accordion.Trigger>
      <Accordion.Content className={styles.content}>
        <Accordion.Trigger
          className={styles.trigger}
          onClick={() => eventHandler()}
        >
          <Reflection
            reflections={postInfo.reflections}
            improvementsList={postInfo.improvementsList}
          />
          <Lesson lessonsList={postInfo.lessonsList} />
        </Accordion.Trigger>
      </Accordion.Content>
    </>
  );
}
