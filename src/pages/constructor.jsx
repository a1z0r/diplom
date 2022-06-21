import React from "react";
import Header from "../components/header";
import {useSelector} from "react-redux";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {setItemInBasket} from "../store/basket/reducer";
import Footer from "../components/footer";

export const Constructor = () => {
    window.scrollTo(0, 0);
    const dispatch = useDispatch();
    const item = useSelector(state => state.item.currentItem);
    const [volume, setVolume] = useState("250");
    const [milk, setMilks] = useState("Обычное");
    const [syrups, setSyrups] = useState("Нет");
    const [quantity, setQuantity] = useState(1);
    const [kolvo, setKolvo] = useState(1);
    const fullPrice = kolvo * (item.totalPrice + item.price +
        (milk === "Обычное" ? + 0 : + 30) +
        (volume === "250" ? + 0 : + 0) +
        (volume === "350" ? + 20 : + 0) +
        (volume === "450" ? + 40 : + 0) +
        (quantity === 2 ? + item.price : + 0) +
        (quantity === 3 ? + item.price + item.price : + 0) +
        (syrups === "Нет" ? + 0 : + 30));
    const newItems =
        {
            "id": item.id,
            "imageUrl": item.imageUrl,
            "name": item.name,
            "volume": item.volume ? {volume} : {},
            "milk": item.milk ? {milk} : {},
            "syrups": item.syrups ? {syrups} : {},
            "kolvo": item.kolvo ? {kolvo} : {},
            "price": fullPrice,
            "quantity": item.quantity ? {quantity} : {}
        }

    const handleClick = (e) => {
        dispatch(setItemInBasket(newItems));
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
                                    ))
                                    }
                                </div>
                            </div>
                            : null
                            }
                            {item.quantity ?
                            <div>
                                <h4>Количество</h4>
                                {item.quantity.map( quantitys => (
                                <button
                                    onClick={() => setQuantity(quantitys)}
                                    style={quantitys === quantity ? {background: "#FFD12D", color: "black"} : {}}
                                >{quantitys}</button>
                            ))}
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
                            <div>
                                <h4>Количество:</h4>
                                <div className="counterBlock">
                                    {kolvo === 1 ?
                                    <button
                                        disabled
                                        className="btnCounter"
                                        onClick={() => setKolvo(kolvo - 1)}
                                    >-</button>
                                        :
                                        <button
                                            className="btnCounter"
                                            onClick={() => setKolvo(kolvo - 1)}
                                        >-</button>
                                    }
                                    <h3>{kolvo}</h3>
                                    {kolvo === 10 ?
                                        <button
                                            disabled
                                            className="btnCounter"
                                            onClick={() => setKolvo(kolvo + 1)}
                                        >+</button>
                                        :
                                        <button
                                            className="btnCounter"
                                            onClick={() => setKolvo(kolvo + 1)}
                                        >+</button>
                                    }
                                </div>
                            </div>
                            <div className="sumBlock">

                                <h3>Сумма: {fullPrice} руб.</h3>
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