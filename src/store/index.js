import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import itemsReducer from './items/reducer';
import basketReducer from './basket/reducer';
import neworderReducer from './neworder/reducer';

export const store = configureStore({
    reducer: {
        user: userReducer,
        item: itemsReducer,
        basket: basketReducer,
        orders: neworderReducer
    }
});