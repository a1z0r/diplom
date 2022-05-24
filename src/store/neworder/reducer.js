import {createSlice} from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: 'neworder',
    initialState: {
        itemsInOrder: []
    },
    reducers: {
        setItemInOrder: (state, action) => {
            state.itemsInBasket.push(action.payload)
        }
    }
});

export const { setItemInOrder } = orderSlice.actions;
export default orderSlice.reducer;
