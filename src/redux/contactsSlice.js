import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsInitialState = [
    { id: 'id-1', contact: { name: 'Rosie Simpson', phone: '459-12-56' } },
    { id: 'id-2', contact: { name: 'Hermione Kline', phone: '443-89-12' } },
    { id: 'id-3', contact: { name: 'Eden Clements', phone: '645-17-79' } },
    { id: 'id-4', contact: { name: 'Annie Copeland', phone: '227-91-26' } },
];

const contactSlice = createSlice({
    name: "contacts";
    initialState: contactsInitialState,
    reducers: {
        addContacts: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(text) {
                return {
                    payload: {
                        text,
                        id: nanoid(),
                    },
                };
            },
            deleteContacts(state, action) {
                const index = state.findIndex(contacts => contacts.id === action.payload);
                state.splice(index, 1);
            },
            resetContactList(state, action) {
                for (const contacts of state) {
                    if (contacts.id === action.payload) {
                        return contacts;
                    }
                }
            },
        }
    },
});

export const { addContacts, deleteContacts, resetContactList } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;