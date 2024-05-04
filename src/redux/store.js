import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contactsSlice";
import { filterReducer } from "./filtersSlice";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filters: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// const initialState = {
//   contacts: [
//     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//   ],

//   filters: { name: "" },
// };

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "contacts/addContacts": {
//       return { ...state, contacts: [...state.contacts, action.payload] };
//     }
//     case "contacts/deleteContact": {
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           (contact) => contact.id !== action.payload
//         ),
//       };
//     }
//     case "filters/changeFilter": {
//       return {
//         ...state,
//         filters: { name: action.payload },
//       };
//     }
//     default:
//       return state;
//   }
// };

// const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhancer);

// export const addContact = (value) => {
//   return {
//     type: "contacts/addContacts",
//     payload: value,
//   };
// };

// export const deleteContact = (value) => {
//   return { type: "contacts/deleteContact", payload: value };
// };

// export const changeFilter = (value) => {
//   return { type: "filters/changeFilter", payload: value };
// };
