import * as Accordion from "@radix-ui/react-accordion";
import { UserInfoType } from "@/types/UserInfoType";
import { PostInfoType } from "@/types/PostInfoType";
import { ICON_PATH } from "@/constants/IconPathConst";
import { TOOLTIP_PARAMS } from "@/constants/MessageTemplateConst";
import { Experience, Reflection, Lesson, FlowLine } from "@/components";
import styles from "@/styles/components/modules/PostTextBox.module.css";

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
          tooltipText={TOOLTIP_PARAMS.EXPERIENCE}
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
            tooltipText={TOOLTIP_PARAMS.REFLECTION}
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
            tooltipText={TOOLTIP_PARAMS.LESSON}
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
