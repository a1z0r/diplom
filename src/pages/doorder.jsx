import Header from "../components/header";
import React from "react";
import {useSelector} from "react-redux";
import OrderItem from "../components/orderItem";
import {useAuth} from "../hooks/use-auth";
import {Link, useNavigate} from "react-router-dom";
import {setCurrentItem} from "../store/items/reducer";
function Doorder() {
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate(`/payment/`);
    };
    const {isAuth} = useAuth();
    const items = useSelector(state => state.basket.itemsInBasket);
    const totalPrice = items.reduce((acc, item) => acc += item.price ,0);
    if(items.length < 1){
        return <>
                <Header />
                <h1 className="orderHeader">Ваша корзина</h1>
                <div className="caseWidth">
                    <div className="coffeeCartCase">
                        <h3>Ваша корзина пуста</h3>
                    </div>
                </div>
        </>
    }
    return isAuth ?(
        <>
            <Header />
            <h1 className="orderHeader">Ваша корзина</h1>
            <div className="caseWidth">
                <div className="coffeeCartCase">
                        {items.map(item =>
                            <div className="coffeeCart"><OrderItem item={item} />
                            </div>)}
                    </div>
                    <h3 className="orderPrice">К оплате {totalPrice} руб.</h3>
                <div className="orderBtnBlock">
                    <button className="orderBtn"
                        onClick={handleClick}
                    >Перейти к оплате</button>
                </div>
            </div>
        </>
    ) :(
        <>
            <Header />
            <h1 className="orderHeader">Ваша корзина</h1>
            <div className="caseWidth">
                <div className="coffeeCartCase">
                    {items.map(item =>
                        <div className="coffeeCart"><OrderItem item={item} />
                        </div>)}
                </div>
                <h3 className="orderPrice">К оплате {totalPrice} руб.</h3>
                <h3 className="warningHeader">Для оформления заказа нужно быть авторизованным пользователем</h3>
                <div className="orderBtnBlock">
                    <Link to="/auth"><button className="loginBtn">Войти</button></Link>
                </div>
            </div>
        </>
    );
}

export default Doorder;