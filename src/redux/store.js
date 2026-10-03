import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
} from "redux-persist";

import contactsReducer from "./contactsSlice";

const storage = {
  getItem: key => Promise.resolve(localStorage.getItem(key)),

  setItem: (key, value) => {
    localStorage.setItem(key, value);
    return Promise.resolve();
  },

  removeItem: key => {
    localStorage.removeItem(key);
    return Promise.resolve();
  },
};

const persistConfig = {
  key: "contacts",
  storage,
  whitelist: ["contacts"],
};

const persistedReducer = persistReducer(
  persistConfig,
  contactsReducer
);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);