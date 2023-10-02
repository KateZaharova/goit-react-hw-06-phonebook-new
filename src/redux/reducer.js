import { addContact, deleteContact, resetContactList, setStatusFilter } from "../redux/contactsSlice";
import { createReducer } from "@reduxjs/toolkit";


const contactsInitialState = [];

export const contactsReducer = createReducer(contactsInitialState, {
    [addContact]: (state, action) => {
        state.push(action.payload);
     },
    [deleteContact]: (state, action) => { 
        const index = state.findIndex(contact => contact.id === action.payload);
        state.splice(index, 1);
    },
    [resetContactList]: (state, action) => { 
        for (const contact of state) {
            if (contact.id === action.payload) {
                    return contact;
            }
        }
    },
});

export const filterReducer = createReducer(filterInitialState, {
    [setStatusFilter]: (state, action) => {
        state.status = action.payload;
        },
});