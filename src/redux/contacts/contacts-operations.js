import axios from "axios";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  toggleFavoriteRequest,
  toggleFavoriteSuccess,
  toggleFavoriteError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from "./contacts-actions";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get("/contacts");

    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};

const addContact = ({ name, number }) => (dispatch) => {
  const contact = {
    name,
    number,
    favorite: false,
  };
  console.log(contact);
  dispatch(addContactRequest());

  axios
    .post("/contacts", contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch((error) => dispatch(addContactError(error.message)));
};

const deleteContact = (contactId) => (dispatch) => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch((error) => dispatch(deleteContactError(error.message)));
};

const toggleFavorite = ({ id, favorite }) => (dispatch) => {
  const update = { favorite };

  dispatch(toggleFavoriteRequest());

  axios
    .patch(`/contacts/${id}`, update)
    .then(({ data }) => dispatch(toggleFavoriteSuccess(data)))
    .catch((error) => dispatch(toggleFavoriteError(error.message)));
};

const ContactsOperations = {
  fetchContacts,
  addContact,
  deleteContact,
  toggleFavorite,
};
export default ContactsOperations;
