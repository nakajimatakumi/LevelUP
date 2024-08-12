import styles from "@/styles/components/modules/PostTextBox.module.css";
import * as Accordion from "@radix-ui/react-accordion";
import Experience from "@/components/modules/Experience";
import Reflection from "@/components/modules/Reflection";
import Lesson from "@/components/modules/Lesson";
import { UserInfoType } from "@/types/UserInfoType";
import { PostInfoType } from "@/types/PostInfoType";
import FlowLine from "./FlowLine";
import { ICON_PATH } from "@/constants/IconPathConst";
import { TOOLTIP_TEXT } from "@/constants/TooltipConst";

type Props = {
  userInfo: UserInfoType;
  postInfo: PostInfoType;
};

/**
 *  投稿テキストボックス
 * @param postInfo 投稿情報
 * @param userInfo ユーザー情報
 */
export default function PostTextBox({ userInfo, postInfo }: Props) {
  return (
    <div className={styles.root}>
      <div className={styles.contentWrapper}>
        <FlowLine
          iconPath={ICON_PATH.EXPERIENCE}
          tooltipText={TOOLTIP_TEXT.EXPERIENCE}
        />
        <Experience
          experience={postInfo.experience}
          userInfo={userInfo}
          postInfo={postInfo}
        />
      </div>
      <Accordion.Content className={styles.content}>
        <div className={styles.contentWrapper}>
          <FlowLine
            iconPath={ICON_PATH.REFLECTION}
            tooltipText={TOOLTIP_TEXT.REFLECTION}
          />
          <Reflection
            userInfo={userInfo}
            postInfo={postInfo}
            reflections={postInfo.reflections}
            improvementsList={postInfo.improvementsList}
          />
        </div>
        <div className={styles.contentWrapper}>
          <FlowLine
            iconPath={ICON_PATH.LESSON}
            tooltipText={TOOLTIP_TEXT.LESSON}
          />
          <Lesson
            lessonsList={postInfo.lessonsList}
            userInfo={userInfo}
            postInfo={postInfo}
          />
        </div>
      </Accordion.Content>
    </div>
  );
}
