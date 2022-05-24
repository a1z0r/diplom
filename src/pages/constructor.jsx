import React from "react";
import Header from "../components/header";
import {useSelector} from "react-redux";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {setItemInBasket} from "../store/basket/reducer";

export const Constructor = () => {
    const dispatch = useDispatch();
    const item = useSelector(state => state.item.currentItem);
    const [volume, setVolume] = useState("250");
    const [milk, setMilks] = useState("Обычное");
    const [syrups, setSyrups] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(item.price);
    const handleClick = (e) => {
        dispatch(setItemInBasket(item));
    };

    return(
        <>
            <Header />
            <main>
                <div className="caseWidth">
                    <h1 className="constHeader">Соберите напиток</h1>
                    <div className="constructor">
                        <div className="coffeeCart" >
                            <img src={item.imageUrl} alt=""/>
                            <h3>{item.name}</h3>
                        </div>
                        <div>
                            {item.volume ?
                            <div>
                                <h4>Объем (мл)</h4>
                                <div>
                                    {item.volume.map( volumes => (
                                    <button
                                    onClick={() =>
                                        setVolume(volumes)
                                    }
                                    style={volumes === volume ? {background: "#FFD12D", color: "black"} : {}}
                                    >{volumes}</button>
                                ))}
                                </div>
                            </div>
                            : null
                            }
                            {item.milk ?
                            <div>
                                <h4>Молоко</h4>
                                <div>
                                    {item.milk.map( milks => (
                                    <button
                                        onClick={() => setMilks(milks)}
                                        style={milks === milk ? {background: "#FFD12D", color: "black"} : {}}
                                    >{milks}</button>
                                    ))}
                                </div>
                            </div>
                            : null
                            }
                            {item.quantity ?
                            <div>
                                <h4>Количество</h4>
                                <div>
                                    {item.quantity.map( quantitys => (
                                    <button
                                        onClick={() => setQuantity(quantitys)}
                                        style={quantitys === quantity ? {background: "#FFD12D", color: "black"} : {}}
                                    >{quantitys}</button>
                                    ))}
                                </div>
                            </div>
                            : null
                            }
                            {item.syrups ?
                            <div>
                                <h4>Сироп</h4>
                                {item.syrups.map( syrupes => (
                                <button
                                    onClick={() => setSyrups(syrupes)}
                                    style={syrupes === syrups ? {background: "#FFD12D", color: "black"} : {}}
                                >{syrupes}</button>
                            ))}
                            </div>
                            : null
                            }

                            <div className="sumBlock">
                                <h3>Сумма: {price}руб.</h3>
                            </div>
                            <button className="orderBtn"
                                    onClick={ handleClick }
                            >Добавить в корзину</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Constructor;