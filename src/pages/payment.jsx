import {useDispatch, useSelector} from "react-redux";
import PaymentInputs from "../components/paymentInputs";
import logo from "../assets/img/logo.svg";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {setItemInOrder} from "../store/neworder/reducer";

function Payment(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const items = useSelector(state => state.basket.itemsInBasket);
    const totalPrice = items.reduce((acc, item) => acc += item.price ,0);
    const crd = {
        location: ["ТЦ Санрайс", "ТЦ Омега", "Парк Победы"]
    }

    const [location, setLocation] = useState("ТЦ Санрайс");
    const handleClick = (e) => {
        alert("Ваш заказ принят");
        navigate("/auth");
        dispatch(setItemInOrder(items));
    };
    const clickToBack = (e) => {
        navigate("/doorder");
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
                        <div>
                            <div>
                                {crd.location.map( locations => (
                                    <button
                                        onClick={() =>
                                            setLocation(locations)
                                        }
                                        className="paymentBtn"
                                        style={locations === location ? {background: "#FFD12D", color: "black"} : {}}
                                    >{locations}</button>

                                ))}
                            </div>
                        </div>
                    </div>
                    {location === "ТЦ Санрайс" ?
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3Abaa21b6b538b8941168af65b531b073aa12a2eb558184d1ec0587d94ccd8063f&amp;source=constructor"
                        width="800px"
                        height="400"
                        className="mapInOrder"
                        frameBorder="0"></iframe>
                        : null
                    }
                    {location === "ТЦ Омега" ?
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A9e71640cda5f4dca57e70377b5789c76e951964d30445a367920149443c6d92b&amp;source=constructor"
                        width="800px"
                        height="400"
                        className="mapInOrder"
                        frameBorder="0"></iframe>
                        : null
                    }
                    {location === "Парк Победы" ?
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3Ace54b51019dee51120bd266da3f7a7039c408e947ea25f19e70d54d29f9c69a5&amp;source=constructor"
                        width="800px"
                        height="400"
                        className="mapInOrder"
                        frameBorder="0"></iframe>
                        : null
                    }
                    </div>
                <h3 className="paymentHeader">Сумма к оплате {totalPrice} руб.</h3>
                <div className="paymentElement">
                    <PaymentInputs />
                </div>
                <div className="orderBtnBlock">
                <div className="orderBtnBlock">
                    <button className="btnToBack" onClick={clickToBack}>Вернуться</button>
                </div>
                <div className="orderBtnBlock">
                    <button className="newOrderBtn" onClick={handleClick}>Заказать</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;