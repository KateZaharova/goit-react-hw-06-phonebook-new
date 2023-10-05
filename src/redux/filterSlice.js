import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
  value: "",
};

const filterSlice = createSlice({
    name: "filter",
    initialState: filtersInitialState,
    reducers: {
        setFilter(state, action) {
            state.value = action.payload;
        },
        resetFilter(state) {
                state.value = "";
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


export const { setFilter, resetFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;