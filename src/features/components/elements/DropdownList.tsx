import * as Select from "@radix-ui/react-select";

/**
 * ドロップダウンリストコンポーネント
 */
export default function DropdownList() {
  return (
    <div>
      <Select.Root>
        <Select.Portal></Select.Portal>
      </Select.Root>
    </div>
  );
}
