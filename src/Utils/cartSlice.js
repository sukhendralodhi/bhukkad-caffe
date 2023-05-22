import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: {},
        removeItem: {},
        clearItem: {},
    }
});

export const { addItem, removeItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;