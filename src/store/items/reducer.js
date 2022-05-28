import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
    name: 'newItems',
    initialState: {
        currentItem: null
    },
    reducers: {
        setCurrentItem: (state, action) => {
            state.currentItem = action.payload;
        }
    }
});

export const { setCurrentItem } = itemsSlice.actions;
export default itemsSlice.reducer;