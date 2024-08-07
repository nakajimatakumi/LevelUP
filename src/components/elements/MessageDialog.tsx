import * as AlertDialog from "@radix-ui/react-alert-dialog";
import styles from "@/styles/components/elements/MessageDialog.module.css";

export default function MessageDialog({
  children,
  title,
  description,
  open,
  onOpenChange,
}: {
  children: React.ReactNode;
  title: string;
  description: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <AlertDialog.Root open={open} onOpenChange={onOpenChange}>
      <AlertDialog.Portal>
        <AlertDialog.Content className={styles.content}>
          {children}
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
