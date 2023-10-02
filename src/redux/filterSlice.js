import { createSlice } from "@reduxjs/toolkit";


const filterInitialState = {};

const filterSlice = createSlice({
    name: "filters",
    initialState: filterInitialState,
    reducers: {
        setStatusFilter(state, action) {
            state.status = action.payload;
        },
    },
});

/*
reducers: {
 deleteContact: (state, action) => {
  state.contacts = state.contacts.filter(el => [el.id](<http://el.id/>) !== action.payload)
 },
 addContact: (state, action) => {
  state.contacts = [...state.contacts, action.payload]
 },
},*/


export const { setStatusFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;