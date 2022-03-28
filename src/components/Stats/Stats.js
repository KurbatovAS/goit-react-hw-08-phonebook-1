import { useSelector } from "react-redux";
import styles from "./Stats.module.css";
import { contactsSelectors } from "../../redux/contacts";

export default function Stats() {
  const total = useSelector(contactsSelectors.getTotalContactCount);
  const favorite = useSelector(contactsSelectors.getFavoriteContactsCount);

  return (
    <div className={styles.container}>
      <p className={styles.item}>
        <span className={styles.value}>{total}</span>
        <span className={styles.label}>Всего</span>
      </p>
      <p className={styles.item}>
        <span className={styles.value}>{favorite}</span>
        <span className={styles.label}>Выполнено</span>
      </p>
    </div>
  );
}
