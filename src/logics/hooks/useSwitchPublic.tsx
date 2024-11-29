import { useContext, useState } from "react";
import { ToastContext } from "@/contexts/ToastContext";
import {
  MESSAGE_PARAMS,
  MESSAGE_TEMPLATE,
} from "@/constants/MessageTemplateConst";
import generateMessage from "@/logics/functions/GenerateMessage";
import MessageDialog from "@/components/elements/MessageDialog/MessageDialog";

export const useSwitchPublic = (postIsPrivate: boolean) => {
  /* 公開設定の状態 */
  const [isPrivate, setIsPrivate] = useState<boolean>(postIsPrivate);

  /* 公開ダイアログの開閉状態 */
  const [isOpenPublic, setIsOpenPublic] = useState<boolean>(false);

  /* トースト表示関数取得 */
  const { showToast } = useContext(ToastContext);

  /* 投稿削除関数 */
  const switchPublic = (isPrivate: boolean) => {
    isPrivate
      ? (setIsPrivate((prev) => !prev),
        showToast(
          generateMessage(MESSAGE_TEMPLATE.CHANGE_MESSAGE, [
            MESSAGE_PARAMS.POST,
            MESSAGE_PARAMS.PRIVATE,
          ])
        ))
      : setIsOpenPublic(true);
  };

  /* 公開確認ダイアログ */
  const ChangePublicDialog = () => (
    <MessageDialog
      title={generateMessage(MESSAGE_TEMPLATE.CONFIRM_2PARAMS_MESSAGE, [
        MESSAGE_PARAMS.POST,
        MESSAGE_PARAMS.PUBLIC,
      ])}
      description={MESSAGE_TEMPLATE.ATTENTION_PUBLIC_MESSAGE}
      onConfirm={() => {
        setIsPrivate(false);
        showToast(
          generateMessage(MESSAGE_TEMPLATE.COMPLETE_MESSAGE, [
            MESSAGE_PARAMS.POST,
            MESSAGE_PARAMS.PUBLIC,
          ])
        );
      }}
      isOpen={isOpenPublic}
      onOpenChange={setIsOpenPublic}
    />
  );

  return {
    isPrivate,
    switchPublic,
    ChangePublicDialog,
  };
};
