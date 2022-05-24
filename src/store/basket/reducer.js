import {createSlice} from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        itemsInBasket: []
    },
    reducers: {
        setItemInBasket: (state, action) => {
            state.itemsInBasket.push(action.payload)
        },
        deleteItemInBasket: (state, action) => {
            state.itemsInBasket = state.itemsInBasket.filter(item => item.id !== action.payload)
        },
        deleteAllItemInBasket: (state, action) => {
            state.itemsInBasket = state.itemsInBasket.filter(item => item !== action.payload)
        }
    }
});

export const { setItemInBasket, deleteItemInBasket, deleteAllItemInBasket } = basketSlice.actions;
export default basketSlice.reducer;
