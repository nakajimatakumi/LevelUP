import styles from "@/styles/components/modules/Post.module.css";
import { postInfoType } from "@/types/PostInfoType";
import IconWithText from "../elements/IconWithText";
import { userInfoType } from "@/types/UserInfoType";
import { COMPONENT_SIZE } from "@/constants/PageLinksConst";
import PostTextBox from "../elements/PostTextBox";

type Props = {
  postInfo: postInfoType;
  userInfo: userInfoType;
};

/** 投稿コンポーネント */
export default function Post({ postInfo, userInfo }: Props) {
  const userContent = {
    pageName: userInfo.userName,
    userIconInfo: userInfo.userIconInfo,
    isLink: false,
    type: COMPONENT_SIZE.MEDIUM,
  };
  return (
    <div className={styles.root}>
      <div className={styles.userInfo}>
        <IconWithText content={userContent} />
      </div>
      <div className={styles.buttons}></div>
      <div className={styles.textboxContainer}>
        <PostTextBox postInfo={postInfo} />
      </div>
    </div>
  );
}
