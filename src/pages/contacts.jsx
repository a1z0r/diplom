import Header from "../components/header";
import React from "react";
import Mapcase from "../components/mapcase";

function Contacts(){
    return(
        <>
            <Header />
            <h2 className="baristaHeaders">Информация о контактах</h2>
            <ul className="contactsBlock">
                <li>
                    <h4>Контактый номер точки ТЦ Омега</h4>
                    <p>8-(999)-666-09-11</p>
                </li>
                <li>
                    <h4>Контактый номер точки ТЦ Санрайс</h4>
                    <p>8-(999)-666-09-11</p>
                </li>
                <li>
                    <h4>Контактый номер точки в Парке Победе</h4>
                    <p>8-(999)-666-09-11</p>
                </li>
            </ul>
            <Mapcase />
            <h2 className="baristaHeaders">Мы в соцсетях и месседжерах</h2>
            <ul className="contactsSocialBlock">
                <li><a href="https://vk.com/coffeelikench" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/3670/3670029.png" width="50px" alt=""/></a></li>
                <li><a href="https://t.me/COFFEELIKE_franchise_bot" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111710.png" width="50px" alt=""/></a></li>
                <li><a href="https://api.whatsapp.com/send/?phone=00000000" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/733/733641.png" width="50px" alt=""/></a></li>
            </ul>
        </>
    );
}

export default Contacts;