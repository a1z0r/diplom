import React from "react";
import {useDispatch} from "react-redux";
import {deleteItemInBasket} from "../store/basket/reducer";

function OrderItem({item}) {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(deleteItemInBasket(item.id));
    }
    return(
        <>
            <div>
                <img src={item.imageUrl} alt=""/>
                <h5>{item.name}</h5>
                <span>{item.price} руб.</span>
                <br/>
                <span
                    className="deleteSpan"
                    onClick={handleClick}
                >Удалить</span>
            </div>
        </>
    );
}

export default OrderItem;
