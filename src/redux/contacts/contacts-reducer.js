import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
  toggleFavoriteRequest,
  toggleFavoriteSuccess,
  toggleFavoriteError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from "./contacts-actions";

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [toggleFavoriteSuccess]: (state, { payload }) =>
    state.map((contact) => (contact.id === payload.id ? payload : contact)),
});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [toggleFavoriteRequest]: () => true,
  [toggleFavoriteSuccess]: () => false,
  [toggleFavoriteError]: () => false,
});

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [fetchContactsError]: (state, action) => action.payload,
  [fetchContactsRequest]: () => null,
  [addContactRequest]: () => null,
  [deleteContactRequest]: () => null,
  [deleteContactError]: (state, action) => action.payload,
  [addContactError]: (state, action) => action.payload,
});
export default combineReducers({
  items,
  filter,
  loading,
  error,
});