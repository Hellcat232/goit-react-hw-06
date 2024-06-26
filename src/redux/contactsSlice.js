import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  contacts: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(value) {
        return {
          payload: { id: nanoid(), name: value.name, number: value.number },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.contacts.findIndex(
        (contact) => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});

export const selectContacts = (state) => state.contacts.contacts;

export const { addContact, deleteContact } = contactsSlice.actions;

const persistConfig = {
  key: "contacts",
  storage,
  whitelist: ["contacts"],
};

const persistedContacts = persistReducer(persistConfig, contactsSlice.reducer);

export const contactReducer = persistedContacts;
