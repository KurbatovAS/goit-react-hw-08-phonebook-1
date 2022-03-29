import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../components/Container";
import ContactsList from "../components/ContactList";
import ContactEditor from "../components/ContactEditor";
import Filter from "../components/ContactFilter";
import Modal from "../components/Modal";
import IconButton from "../components/IconButton";
import { ReactComponent as AddIcon } from "../icons/add.svg";
import { contactsOperations, contactsSelectors } from "../redux/contacts";
import Loader from "components/Loader";

const barStyles = {
  display: "flex",
  alignItems: "flex-end",
  marginBottom: 20,
};

export default function ContactsView(params) {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(contactsSelectors.getLoading);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen((state) => !state);

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <Container>
      <div style={barStyles}>
        <Filter />
        <IconButton onClick={toggleModal} aria-label="Добавить todo">
          <AddIcon width="30" height="30" fill="#fff" />
        </IconButton>

        {isLoadingContacts && <Loader />}
      </div>

      <ContactsList />

      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <ContactEditor onSave={toggleModal} />
        </Modal>
      )}
    </Container>
  );
}
