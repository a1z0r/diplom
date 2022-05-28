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
                {item.volume.volume ? <p className="specStyles">Объем: {item.volume.volume} мл.</p> :
                null
                }
                {item.milk.milk ? <p className="specStyles">Молоко: {item.milk.milk}</p> :
                null
                }
                {item.syrups.syrups ? <p className="specStyles">Сироп: {item.syrups.syrups}</p> :
                null
                }
                {item.quantity.quantity ? <p className="specStyles">Количество: {item.quantity.quantity}</p> :
                null
                }
                <span>Цена: {item.price} руб.</span>
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
