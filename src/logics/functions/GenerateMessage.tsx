/**
 * メッセージ生成関数
 * @param template メッセージテンプレート
 * @param replacements メッセージテンプレートの置換文字列
 */
export default function generateMessage(
  template: string,
  replacements: string[]
): string {
  /* messageを生成 */
  let message = template;
  replacements.map((replacement, index) => {
    /* 置換文字列を生成 */
    const placeholder = `{${index + 1}}`;
    message = message.replace(placeholder, replacement);
  });
  return message;
}
