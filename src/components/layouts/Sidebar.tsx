"use client";

import { useRef, useState } from "react";
import {
  AccordionList,
  Button,
  Dialog,
  IconWithText,
  MessageDialog,
  NewPost,
  Notification,
  Title,
} from "@/components";
import {
  BUTTON_VARIANT,
  COMPONENT_LENGTH,
  COMPONENT_SIZE,
  ICON_WITH_TEXT_TYPE,
  NAV_ITEMS,
} from "@/constants/ParamConst";
import { ICON_PATH } from "@/constants/IconPathConst";
import { HEADER_LABEL } from "@/constants/LabelConst";
import {
  MESSAGE_PARAMS,
  MESSAGE_TEMPLATE,
} from "@/constants/MessageTemplateConst";
import useInit from "@/logics/hooks/useInit";
import generateMessage from "@/logics/functions/GenerateMessage";
import styles from "@/styles/components/layouts/Sidebar.module.css";
/**
 * サイドバーコンポーネント
 */
export default function Sidebar() {
  /* 初期データ取得処理 */
  const { initData } = useInit();
  /* 設定ダイアログ開閉状態 */
  const [isSettingOpen, setIsSettingOpen] = useState<boolean>(false);
  /* プロフィール編集ダイアログ開閉状態 */
  const [isProfileEditOpen, setIsProfileEditOpen] = useState<boolean>(false);
  /* ログアウトダイアログ開閉状態 */
  const [isLogoutOpen, setIsLogoutOpen] = useState<boolean>(false);
  /* ダイアログの内容 */
  const content = useRef<string | null>(null);

  /* 設定クリック時イベント */
  const handleSettingClick = (newContent: string) => {
    content.current = newContent;
    setIsSettingOpen(true);
  };

  /* プロフィールクリック時イベント */
  const handleProfileClick = (newContent: string) => {
    content.current = newContent;
    switch (content.current) {
      case NAV_ITEMS.PROFILE.ListItems[0].ItemId:
        setIsProfileEditOpen(true);
        break;
      case NAV_ITEMS.PROFILE.ListItems[1].ItemId:
        setIsLogoutOpen(true);
        break;
    }
  };

  return (
    <div className={styles.sidebarWrapper}>
      <div className={styles.sidebarContent}>
        <div className={styles.titleWrapper}>
          <Title />
        </div>
        <div className={styles.topPageLinkWrapper}>
          <AccordionList
            listItems={NAV_ITEMS.PROFILE.ListItems}
            onClick={(content) => handleProfileClick(content ?? "")}
          >
            <IconWithText
              size={COMPONENT_SIZE.MEDIUM}
              length={COMPONENT_LENGTH.FIT}
              type={ICON_WITH_TEXT_TYPE.USER}
              text={initData.userInfo.userName}
              userIconInfo={initData.userInfo.userIconInfo}
            />
          </AccordionList>
          <Dialog
            description={`controlID：${content.current}`}
            isOpen={isProfileEditOpen}
            onOpenChange={setIsProfileEditOpen}
          >
            <span />
          </Dialog>
          <MessageDialog
            title={MESSAGE_PARAMS.LOGOUT}
            description={generateMessage(MESSAGE_TEMPLATE.CONFIRM_MESSAGE, [
              MESSAGE_PARAMS.LOGOUT,
            ])}
            dispButton={true}
            isOpen={isLogoutOpen}
            onOpenChange={setIsLogoutOpen}
            onConfirm={() => {
              alert("ログアウトしました。(未実装)");
            }}
          />
        </div>
        <nav className={styles.centerPageLinkWrapper}>
          <Button variant={BUTTON_VARIANT.NONE}>
            <IconWithText
              size={COMPONENT_SIZE.LARGE}
              length={COMPONENT_LENGTH.MEDIUM}
              type={ICON_WITH_TEXT_TYPE.NAV}
              text={NAV_ITEMS.MY_EXP.ItemName}
              iconPath={NAV_ITEMS.MY_EXP.iconPath}
            />
          </Button>
          <Button variant={BUTTON_VARIANT.NONE}>
            <IconWithText
              size={COMPONENT_SIZE.LARGE}
              length={COMPONENT_LENGTH.MEDIUM}
              type={ICON_WITH_TEXT_TYPE.NAV}
              text={NAV_ITEMS.ALL_EXP.ItemName}
              iconPath={NAV_ITEMS.ALL_EXP.iconPath}
            />
          </Button>
          <Button variant={BUTTON_VARIANT.NONE}>
            <IconWithText
              size={COMPONENT_SIZE.LARGE}
              length={COMPONENT_LENGTH.MEDIUM}
              type={ICON_WITH_TEXT_TYPE.NAV}
              text={NAV_ITEMS.BOOKMARK.ItemName}
              iconPath={NAV_ITEMS.BOOKMARK.iconPath}
            />
          </Button>
          <MessageDialog
            title={HEADER_LABEL.NOTIFICATION}
            description={<Notification />}
            dispButton={false}
          >
            <Button variant={BUTTON_VARIANT.NONE}>
              <IconWithText
                size={COMPONENT_SIZE.LARGE}
                length={COMPONENT_LENGTH.MEDIUM}
                type={ICON_WITH_TEXT_TYPE.NAV}
                text={NAV_ITEMS.NOTIFICATION.ItemName}
                iconPath={NAV_ITEMS.NOTIFICATION.iconPath}
              />
            </Button>
          </MessageDialog>
          <AccordionList
            listItems={NAV_ITEMS.SETTING.ListItems}
            onClick={(content) => handleSettingClick(content ?? "")}
          >
            <IconWithText
              size={COMPONENT_SIZE.LARGE}
              length={COMPONENT_LENGTH.FIT}
              type={ICON_WITH_TEXT_TYPE.NAV}
              text={NAV_ITEMS.SETTING.ItemName}
              iconPath={ICON_PATH.SETTING}
            />
          </AccordionList>
          <Dialog
            description={`controlID：${content.current}`}
            isOpen={isSettingOpen}
            onOpenChange={setIsSettingOpen}
          >
            <span />
          </Dialog>
        </nav>
        <div className={styles.bottomPageLinkWrapper}>
          <Dialog description={<NewPost />}>
            <Button variant={BUTTON_VARIANT.NONE}>
              <IconWithText
                size={COMPONENT_SIZE.LARGE}
                length={COMPONENT_LENGTH.FIT}
                type={ICON_WITH_TEXT_TYPE.NAV}
                text={NAV_ITEMS.POST.ItemName}
                iconPath={ICON_PATH.EDIT}
              />
            </Button>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
