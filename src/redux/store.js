import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filterSlice";
//import { contactsReducer } from "./contactsSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
//import rootReducer from "./reducers"

const persistConfig = {
    key: "filter",
    storage,
    whiteList: ['value'],
};

/*const persistedContactsReducer = persistReducer(
    persistConfig,
    contactsReducer
);*/

const persistedFilterReducer = persistReducer(
    persistConfig,
    filterReducer,

);

export const store = configureStore({
    reducer: {
        //contacts: persistedContactsReducer,
        filter: persistedFilterReducer,
    },
});

export const persistor = persistStore(store);

/*export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    },
});*/

/*export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    },
});*/
