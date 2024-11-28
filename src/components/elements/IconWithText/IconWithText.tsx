import clsx from "clsx";
import { UserIconType, OtherIconType, SizeType } from "@/types/ContentType";
import {
  COMPONENT_SIZE,
  ICON_WITH_TEXT_TYPE,
  ICON_SIZE,
  NAV_SIZE,
  TEXT_SIZE,
  USER_SIZE,
} from "@/constants/ParamConst";
import { Icon, UserIcon, WordText } from "@/components";
import styles from "@/components/elements/IconWithText/IconWithText.module.css";

type Props = UserIconType | OtherIconType;

/**
 * アイコンとテキストコンポーネント
 * @param size サイズ
 * @param length 長さ
 * @param iconPath アイコンのパス
 * @param userIconInfo ユーザーのアイコン情報
 * @param text テキスト
 * @param type タイプ
 */
export default function IconWithText({
  size,
  length,
  iconPath,
  userIconInfo,
  type,
  text,
}: Props) {
  /* タイプごとにサイズを設定 */
  const sizeUpper = size.toUpperCase() as keyof typeof COMPONENT_SIZE;
  const SIZE_MAP = {
    [ICON_WITH_TEXT_TYPE.USER]: {
      iconSize: USER_SIZE.iconSize[sizeUpper],
      textSize: USER_SIZE.textSize[sizeUpper],
    },
    [ICON_WITH_TEXT_TYPE.NAV]: {
      iconSize: NAV_SIZE.iconSize[sizeUpper],
      textSize: NAV_SIZE.textSize[sizeUpper],
    },
    default: {
      iconSize: ICON_SIZE.SMALL,
      textSize: TEXT_SIZE.SMALL,
    },
  } as const;
  const { iconSize, textSize } =
    SIZE_MAP[type as keyof typeof SIZE_MAP] ?? SIZE_MAP.default;

  /* ルートクラス */
  const rootClassName = clsx(styles.root, styles[size], styles[type]);

  return (
    <div className={rootClassName}>
      {type === ICON_WITH_TEXT_TYPE.USER ? (
        <UserIcon userIconInfo={userIconInfo!} size={iconSize as SizeType} />
      ) : (
        <Icon iconPath={iconPath!} size={iconSize as SizeType} />
      )}
      <WordText text={text} size={textSize as SizeType} length={length} />
    </div>
  );
}
