import BaristaHeader from "../components/baristaHeader";
import React from "react";
import OrderItem from "../components/orderItem";
import {useDispatch, useSelector} from "react-redux";
import {deleteAllItemInBasket} from "../store/basket/reducer";
function Barista({basket}){
    const dispatch = useDispatch();
    const items = useSelector(state => state.basket.itemsInBasket);
    const handleClick = (e) => {
        dispatch(deleteAllItemInBasket(basket));
    };
    return(
        <>
            <BaristaHeader />
            <h2 className="baristaHeaders">Информация о заказах</h2>
            <div className="ordersBlock">
                <div className="coffeeCartCase">
                    {items.map(item =>
                        <div className="coffeeCart"><OrderItem item={item} />
                        </div>)}
                </div>
                <div className="orderBtnBlock">
                    <button
                        className="orderBtn"
                        onClick={handleClick}
                    >Подтвердить заказ</button>
                </div>
            </div>
        </>
    );
}

export default Barista;