import Contact from "../Todo";
import { useSelector, useDispatch } from "react-redux";
import { contactsOperations, contactsSelectors } from "../../redux/contacts";
import styles from "./ContactList.module.css";

export default function TodoList() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  console.log(contacts);
  const onDeleteContact = (id) =>
    dispatch(contactsOperations.deleteContact(id));
  const onToggleFavorite = (id) =>
    dispatch(contactsOperations.toggleFavorite(id));

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number, favorite }) => (
        <li key={id} className={favorite ? styles.favorite : styles.item}>
          <Contact
            name={name}
            number={number}
            favorite={favorite}
            onToggleFavorite={() =>
              onToggleFavorite({ id, favorite: !favorite })
            }
            onDelete={() => onDeleteContact(id)}
          />
        </li>
      ))}
    </ul>
  );
}
