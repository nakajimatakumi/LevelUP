import styles from "@/styles/components/modules/Post.module.css";
import { postInfoType } from "@/types/PostInfoType";
import IconWithText from "../elements/IconWithText";
import { userInfoType } from "@/types/UserInfoType";
import { COMPONENT_SIZE } from "@/constants/PageLinksConst";
import PostTextBox from "../elements/PostTextBox";
import Image from "next/image";
import { ICON_PATH } from "@/constants/IconPathConst";
import * as Accordion from "@radix-ui/react-accordion";

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
      <Accordion.Root type="single" collapsible className={styles.root}>
        <Accordion.Item value="item-1">
          <div className={styles.userInfo}>
            <IconWithText content={userContent} />
            <Accordion.Trigger className={styles.trigger}>
              <Image
                src={ICON_PATH.CHEVRON}
                alt="chevron"
                width={18}
                height={18}
                className={styles.chevron}
              />
            </Accordion.Trigger>
          </div>
          <div className={styles.buttons}></div>
          <div className={styles.textboxContainer}>
            <PostTextBox postInfo={postInfo} />
          </div>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
}
