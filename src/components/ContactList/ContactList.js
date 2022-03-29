import Contact from "../Contact";
import { useSelector, useDispatch } from "react-redux";
import { contactsOperations, contactsSelectors } from "../../redux/contacts";
import style from "./ContactList.module.css";

export default function TodoList() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const onDeleteContact = (id) =>
    dispatch(contactsOperations.deleteContact(id));

  return (
    <ul className={style.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={style.item}>
          <Contact
            name={name}
            number={number}
            onDelete={() => onDeleteContact(id)}
          />
        </li>
      ))}
    </ul>
  );
}
