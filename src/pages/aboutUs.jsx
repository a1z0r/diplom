import Header from "../components/header";
import React from "react";

function AboutUs(){
    return(
        <>
            <Header />
                <h2 className="baristaHeaders">О Нас</h2>
                <div className="contactsBlock">
                    <div className="aboutBlocks">
                        <div className="aboutElements">
                            <img src="https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" width="500px" alt=""/>
                        </div>
                        <div className="aboutElements">
                            <h3>
                                Наша история началась осенью 2013 года,
                                когда Аяз Шабутдинов познакомился с Зуфаром Гариповым — оба планировали
                                открывать кофейню в Ижевске. Они долго обсуждали,
                                быть им конкурентами и открываться под разными брендами или объединить усилия и
                                стать партнерами. Итогом стала совместная регистрация ООО «station réveil».
                                13 ноября мы открыли свой первый кофе-бар в Ижевске.
                                Он до сих пор работает и располагается все на том же месте —
                                остановке общественного транспорта рядом с Удмуртским Государственным Университетом.
                                Это излюбленное место студентов. Уже через 2 недели после открытия мы вышли на точку
                                безубыточности. А в 2017 году мы присвоили первому кофе-бару статус музея — было решено,
                                что его внешний вид не будет кардинально меняться, чтобы сохранить историю развития компании.
                            </h3>
                        </div>
                    </div>
                    <div className="aboutBlocks">
                        <div className="aboutElements">
                            <img src="https://images.pexels.com/photos/1402407/pexels-photo-1402407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" width="500px" alt=""/>
                        </div>
                        <div className="aboutElements">
                            <h3>
                                В те времена это был прорыв. Мы не просили наших гостей носить с собой карточки,
                                ставить штампы, клеить наклейки. Достаточно было назвать номер телефона, чтобы узнать баланс бонусов.
                                Уже тогда была масса желающих работать с нами, поэтому решили открываться
                                в других городах по франшизе.
                                Партнером стал Денис Крупенин из Екатеринбурга.
                                За короткое время число открытых кофе-баров достигло 62 шт., и уже тогда наша сеть стала самой динамично
                                развивающейся в СНГ.
                                В мае состоялся Первый слет партнеров в Ижевске. Здесь мы впервые озвучили миссию и ценности нашей компании:
                                мы те, кто берет кофе с собой, мы не стоим на месте, ценим вкус хорошего кофе и идем к своей цели, мы пьем
                                кофе по дороге на работу и в универ, мы просыпаемся первыми в этом городе, мы путешествуем, влюбляемся,
                                запускаем проекты и открываем что-то новое каждый день, наша жизнь — водоворот ярких событий, мы не боимся
                                бросить вызов себе.
                            </h3>
                        </div>
                    </div>
                </div>
        </>
    );
}

export default AboutUs;