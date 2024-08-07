import styles from "@/styles/components/modules/Post.module.css";
import { postInfoType } from "@/types/PostInfoType";
import { userInfoType } from "@/types/UserInfoType";
import PostTextBox from "@/components/modules/PostTextBox";
import * as Accordion from "@radix-ui/react-accordion";
import PostHeader from "@/components/modules/PostHeader";

type Props = {
  postInfo: postInfoType;
  userInfo: userInfoType;
  loginUserId: string;
};

/**
 * 投稿コンポーネント
 * @param postInfo 投稿情報
 * @param userInfo ユーザー情報
 * @param loginUserId ログインユーザーID
 */
export default function Post({ postInfo, userInfo, loginUserId }: Props) {
  return (
    <div className={styles.root}>
      <Accordion.Root type="single" collapsible className={styles.root}>
        <Accordion.Item value="item-1">
          <PostHeader
            userInfo={userInfo}
            postInfo={postInfo}
            loginUserId={loginUserId}
          />
          <div className={styles.textboxContainer}>
            <PostTextBox userInfo={userInfo} postInfo={postInfo} />
          </div>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
}
