import { useDispatch, useSelector } from "react-redux";
import { contactsSelectors } from "../../redux/contacts";
import { changeFilter } from "../../redux/contacts";
import styles from "./ContactFilter.module.css";

export default function TodoFilter() {
  const dispatch = useDispatch();
  const value = useSelector(contactsSelectors.getFilter);

  return (
    <div className={styles.filter}>
      <p className={styles.label}>Фильтр по содержимому</p>
      <input
        type="text"
        className={styles.input}
        value={value}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}
