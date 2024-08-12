import styles from "@/styles/components/modules/Notification.module.css";
import useInit from "@/logics/hooks/useInit";
import SentenceText from "../elements/SentenceText";
import * as Separator from "@radix-ui/react-separator";

export default function Notification() {
  const { initData } = useInit();
  const { notificationList } = initData;
  return (
    <div className={styles.root}>
      {notificationList.map((notification, index) => (
        <div key={index}>
          <div className={styles.sentenceWrapper}>
            <SentenceText
              text={notification.notificationMessage}
              lineClamp={20}
              lineHeight={1.3}
              fontSize={16}
              key={index}
            />
          </div>
          {index < notificationList.length - 1 && (
            <Separator.Root className={styles.separator} />
          )}
        </div>
      ))}
    </div>
  );
}
