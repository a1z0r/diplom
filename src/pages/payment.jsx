import {useSelector} from "react-redux";
import PaymentInputs from "../components/paymentInputs";
import logo from "../assets/img/logo.svg";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

function Payment(){
    const navigate = useNavigate();
    const items = useSelector(state => state.basket.itemsInBasket);
    const totalPrice = items.reduce((acc, item) => acc += item.price ,0);
    const handleClick = (e) => {
        alert("Ваш заказ принят");
        navigate("/auth");
    };
    return(

        <div>
            <div className="caseWidth">
                <div className="newLogoCase">
                    <img src={logo} alt=""/>
                    <h4>station réveil</h4>
                </div>
                <div>
                    <h3 className="paymentHeader">Выберите место, где хотите забрать заказ</h3>
                    <div className="paymentBtnBlock">
                        <button className="paymentBtn">ТЦ Санрайс</button>
                        <button className="paymentBtn">ТЦ Омега</button>
                        <button className="paymentBtn">Парк Победы</button>
                    </div>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A266bc80e507739d2ee9684344c1461bb43e278c18a0b70f87224e6c3a162f4bd&amp;source=constructor"
                        width="800px"
                        height="400"
                        className="mapInOrder"
                        frameBorder="0"></iframe>
                </div>
                <h3 className="paymentHeader">Сумма к оплате {totalPrice} руб.</h3>
                <div className="paymentElement">
                    <PaymentInputs />
                </div>
                <div className="orderBtnBlock">
                    <button className="newOrderBtn" onClick={handleClick}>Заказать</button>
                </div>
            </div>
        </div>
    )
}

export default Payment;