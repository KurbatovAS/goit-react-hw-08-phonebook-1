import { useState } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import Notiflix from "notiflix";
import style from "./ContactEditor.module.css";
import { contactsSelectors } from "../../redux/contacts";
import { contactsOperations } from "../../redux/contacts";

function ContactEditor({ onSave }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      Notiflix.Notify.failure(`${name} is already in contacts.`);
    } else if (contacts.find((contact) => contact.number === number)) {
      Notiflix.Notify.failure(`${number} is already in contacts.`);
    } else if (name.trim() === "" || number.trim() === "") {
      Notiflix.Notify.failure("Enter the contact's name and number phone!");
    } else {
      dispatch(contactsOperations.addContact({ name, number }));
    }

    setNumber("");
    setName("");
    onSave();
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <img
        className={style.avatar}
        alt="avatar"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReK6pUGk66nxuoUjAgPyXQ55neCkfFdO8EDjah4hqBn_-VrQKYo5oI_citL5mS9_ZWgaQ&usqp=CAU"
      />

      <label className={style.label}>
        Name
        <input
          className={style.input}
          type="text"
          name="name"
          onChange={(event) => setName(event.target.value)}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Sofia"
          required
        />
      </label>
      <label className={style.label}>
        Number
        <input
          className={style.input}
          type="tel"
          name="number"
          onChange={(event) => setNumber(event.target.value)}
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="number number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="380-111-11-1111"
          required
        />
      </label>
      <button className={style.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (name, number) =>
    dispatch(contactsOperations.addContact(name, number)),
});

export default connect(null, mapDispatchToProps)(ContactEditor);
