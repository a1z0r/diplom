import BaristaHeader from "../components/baristaHeader";
import React from "react";
import OrderItem from "../components/orderItem";
import {useDispatch, useSelector} from "react-redux";
import {deleteAllItemInBasket} from "../store/basket/reducer";
function Barista({basket}){
    const dispatch = useDispatch();
    const items = useSelector(state => state.basket.itemsInBasket);
    const location = useSelector(state => state.location.itemsInOrder);
    const handleClick = (e) => {
        dispatch(deleteAllItemInBasket(basket));
    };
    return(
        <>
            <BaristaHeader />

        </>
    );
}

export default Barista;