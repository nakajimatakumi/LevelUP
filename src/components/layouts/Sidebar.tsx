import Title from "@/components/elements/Title";
import styles from "@/styles/components/layouts/Sidebar.module.css";
import AccordionList from "@/components/elements/AccordionList";
import useInit from "@/logics/hooks/useInit";
import {
  COMPONENT_LENGTH,
  COMPONENT_SIZE,
  COMPONENT_TYPE,
  NAV_ITEMS,
} from "@/constants/PageLinksConst";
import IconWithText from "../elements/IconWithText";
import { ICON_PATH } from "@/constants/IconPathConst";
import Button from "../elements/Button";
import { VARIANT } from "@/constants/ButtonConst";
import MessageDialog from "../elements/MessageDialog";

/**
 * サイドバーコンポーネント
 */
export default function Sidebar() {
  /* 初期データ取得処理 */
  const { initData } = useInit();

  const centerItems = [
    NAV_ITEMS.MY_EXP,
    NAV_ITEMS.ALL_EXP,
    NAV_ITEMS.BOOKMARK,
    NAV_ITEMS.NOTIFICATION,
  ];

  return (
    <div className={styles.sidebarWrapper}>
      <div className={styles.sidebarContent}>
        <div className={styles.titleWrapper}>
          <Title />
        </div>
        <div className={styles.topPageLinkWrapper}>
          <AccordionList listItems={NAV_ITEMS.PROFILE.ListItems}>
            <IconWithText
              size={COMPONENT_SIZE.MEDIUM}
              length={COMPONENT_LENGTH.FIT}
              type={COMPONENT_TYPE.USER}
              text={initData.userInfo.userName}
              userIconInfo={initData.userInfo.userIconInfo}
            />
          </AccordionList>
        </div>
        <nav className={styles.centerPageLinkWrapper}>
          <Button variant={VARIANT.NONE}>
            <IconWithText
              size={COMPONENT_SIZE.LARGE}
              length={COMPONENT_LENGTH.MEDIUM}
              type={COMPONENT_TYPE.NAV}
              text={NAV_ITEMS.MY_EXP.ItemName}
              iconPath={NAV_ITEMS.MY_EXP.iconPath}
            />
          </Button>
          <Button variant={VARIANT.NONE}>
            <IconWithText
              size={COMPONENT_SIZE.LARGE}
              length={COMPONENT_LENGTH.MEDIUM}
              type={COMPONENT_TYPE.NAV}
              text={NAV_ITEMS.ALL_EXP.ItemName}
              iconPath={NAV_ITEMS.ALL_EXP.iconPath}
            />
          </Button>
          <Button variant={VARIANT.NONE}>
            <IconWithText
              size={COMPONENT_SIZE.LARGE}
              length={COMPONENT_LENGTH.MEDIUM}
              type={COMPONENT_TYPE.NAV}
              text={NAV_ITEMS.BOOKMARK.ItemName}
              iconPath={NAV_ITEMS.BOOKMARK.iconPath}
            />
          </Button>
          <MessageDialog
            title="通知"
            description="通知を表示しますか？"
            dispButton={false}
          >
            <Button variant={VARIANT.NONE}>
              <IconWithText
                size={COMPONENT_SIZE.LARGE}
                length={COMPONENT_LENGTH.MEDIUM}
                type={COMPONENT_TYPE.NAV}
                text={NAV_ITEMS.NOTIFICATION.ItemName}
                iconPath={NAV_ITEMS.NOTIFICATION.iconPath}
              />
            </Button>
          </MessageDialog>
          <AccordionList listItems={NAV_ITEMS.SETTING.ListItems}>
            <IconWithText
              size={COMPONENT_SIZE.LARGE}
              length={COMPONENT_LENGTH.FIT}
              type={COMPONENT_TYPE.NAV}
              text={NAV_ITEMS.SETTING.ItemName}
              iconPath={ICON_PATH.SETTING}
            />
          </AccordionList>
        </nav>
        <div className={styles.bottomPageLinkWrapper}>
          <Button variant={VARIANT.NONE}>
            <IconWithText
              size={COMPONENT_SIZE.LARGE}
              length={COMPONENT_LENGTH.FIT}
              type={COMPONENT_TYPE.NAV}
              text={NAV_ITEMS.POST.ItemName}
              iconPath={ICON_PATH.EDIT}
            />
          </Button>
        </div>
      </div>
    </div>
  );
}
