import styles from "@/styles/components/modules/Post.module.css";
import { PostInfoType } from "@/types/PostInfoType";
import { UserInfoType } from "@/types/UserInfoType";
import PostTextBox from "@/components/modules/PostTextBox";
import * as Accordion from "@radix-ui/react-accordion";
import PostHeader from "@/components/modules/PostHeader";

type Props = {
  postInfo: PostInfoType;
  userInfo: UserInfoType;
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
      <Accordion.Root type="single" collapsible>
        <Accordion.Item value="item-1" className={styles.item}>
          <PostHeader
            userInfo={userInfo}
            postInfo={postInfo}
            loginUserId={loginUserId}
          />
          <PostTextBox userInfo={userInfo} postInfo={postInfo} />
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
}
