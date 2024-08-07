import { ICON_PATH } from "@/constants/IconPathConst";
import Button from "@/components/elements/Button";
import MessageDialog from "@/components/elements/MessageDialog";

/**
 * 投稿削除ボタン
 */
export default function DeleteButton() {
  return (
    <form action="">
      <Button iconPath={ICON_PATH.DELETE} />
    </form>
  );
}
