import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsInitialState = {
    list: [
        { id: 'id-1', contact: { name: 'Rosie Simpson', phone: '459-12-56' } },
        { id: 'id-2', contact: { name: 'Hermione Kline', phone: '443-89-12' } },
        { id: 'id-3', contact: { name: 'Eden Clements', phone: '645-17-79' } },
        { id: 'id-4', contact: { name: 'Annie Copeland', phone: '227-91-26' } },
    ]
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.list.push(action.payload);
            },
            prepare(contact) {
                return {
                    payload: {
                        contact,
                        id: nanoid(),
                    },
                };
            },
        },
            deleteContact(state, action) {
                const index = state.list.findIndex(contacts => contacts.id === action.payload);
                state.list.splice(index, 1);
            },
        
    },
});

export const { addContact, deleteContact} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

