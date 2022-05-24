import Header from "../components/header";
import Cart from "../components/cart";
import React from "react";
;const items = [
    {
        "id": 1,
        "imageUrl": "https://sun9-38.userapi.com/impg/9OC2W_u-4JETXDfBLZBoX1NmKrRM0cqK8iN3MQ/pPbM6GDN4cY.jpg?size=540x540&quality=96&sign=1e1c2b066047b3ba86739ff73cc87560&type=album",
        "name": "Раф",
        "volume": ["250", "350", "450"],
        "milk": ["Обычное", "Растительное"],
        "syrups": ["Ореховый", "Кокосовый", "Шоколадный"],
        "price": 250

    },
    {
        "id": 2,
        "imageUrl": "https://sun9-4.userapi.com/impg/y6AEt6Jv4Qm8ZnrBIJOiO9eFa6d5TewZU_9_4A/LEJb1Mk1Ogc.jpg?size=540x540&quality=96&sign=0a270d2672b4031aa4e5a7e22b8401f2&type=album",
        "name": "Капучино",
        "volume": ["250", "350", "450"],
        "milk": ["Обычное", "Растительное"],
        "syrups": ["Ореховый", "Кокосовый", "Шоколадный"],
        "price": 220
    },
    {
        "id": 3,
        "imageUrl": "https://sun9-58.userapi.com/impg/dYkrh_rLM5zIz-MiQk861JsADzlyXoA0PxMf3A/Q4mIPcjBNGE.jpg?size=540x540&quality=96&sign=5acb385a5d48273eb0dee7be7886d4eb&type=album",
        "name": "Латте",
        "volume": ["250", "350", "450"],
        "milk": ["Обычное", "Растительное"],
        "syrups": ["Ореховый", "Кокосовый", "Шоколадный"],
        "price": 230
    },
    {
        "id": 4,
        "imageUrl": "https://sun9-54.userapi.com/impg/sWzN8YFf1y6khD9EPF0ZQchPiQRmXNUfwBG2uQ/moybtQtSvnA.jpg?size=540x540&quality=96&sign=080ca1c793d2ee212850a665616c08a1&type=album",
        "name": "Эспрессо",
        "volume": ["60"],
        "price": 140
    },
    {
        "id": 5,
        "imageUrl": "https://sun9-75.userapi.com/impg/8BwCmYW7B-M440dvCqMAFZ7FEFta3rgdUL8Ayw/GEgDv4cX3a8.jpg?size=540x540&quality=96&sign=17e16d3f335122bf4db60d426c86a624&type=album",
        "name": "Американо",
        "volume": ["250", "350", "450"],
        "syrups": ["Ореховый", "Кокосовый", "Шоколадный"],
        "price": 200
    },
    {
        "id": 6,
        "imageUrl": "https://sun9-13.userapi.com/impg/M3vgGCLnoJL4tR7pIwun6HGCXNgGSCyzEZf88A/wXGYl9XVv5Y.jpg?size=540x540&quality=96&sign=07f5fcd19cc151e66200d6f03785c785&type=album",
        "name": "Чай",
        "volume": ["250", "350", "450"],
        "price": 170
    },
    {
        "id": 7,
        "imageUrl": "https://sun9-34.userapi.com/impg/rXEXbVItu7jVMilpB5AufmuwRdbkKcyISO3vGQ/_n9Tijr9qFU.jpg?size=2560x2559&quality=95&sign=35d378efe548055c8f60e1727736aa17&type=album",
        "name": "Матча Латте",
        "volume": ["250", "350", "450"],
        "milk": ["Обычное", "Растительное"],
        "price": 250
    },
    {
        "id": 8,
        "imageUrl": "https://sun9-51.userapi.com/impg/vjDr8hnP5aCzQ4e7fGpNysHIin-dHVKLnKnaDg/u7k0_w4Y4dU.jpg?size=2560x2559&quality=95&sign=bfd8a2527cff39f6a5b6273dd37c7103&type=album",
        "name": "Чай Земляника - брусника - вишня",
        "volume": ["250", "350", "450"],
        "price": 210
    },
    {
        "id": 9,
        "imageUrl": "https://sun9-83.userapi.com/impg/ov7L_m5NgeNFcF4doxAOgCfEHVMgoSBRCb7u1A/hP0ud87yA7Q.jpg?size=2560x2559&quality=95&sign=93079dcabad3906dd3aac98633a1f52d&type=album",
        "name": "Чай Дыня - лемонграсс - жасмин",
        "volume": ["250", "350", "450"],
        "price": 210
    },
    {
        "id": 10,
        "imageUrl": "https://sun9-34.userapi.com/impg/5_TScRFWjwJv1OS8JjaDq2WBuPD5ydYJClbOtg/uXUJ5QFHHNg.jpg?size=2560x2559&quality=95&sign=5d814b937d8a57193baa66de31711c91&type=album",
        "name": "Чай Облепиха - лимон - мед",
        "volume": ["250", "350", "450"],
        "price": 210
    },
    {
        "id": 11,
        "imageUrl": "https://www.cofefest.ru/upload/resize_cache/iblock/4b6/548_442_1/5dewcush8vlchy4p23e6flk4ethp3oyg.JPG",
        "name": "Десерт Три шоколада",
        "quantity": [1, 2, 3],
        "price": 180
    },
    {
        "id": 12,
        "imageUrl": "https://www.cofefest.ru/upload/resize_cache/iblock/bdd/548_442_1/85xz8g8c6k0ujbp5uhv4mv4a05xsc3pi.JPG",
        "name": "Пирожное Красный бархат",
        "quantity": [1, 2, 3],
        "price": 180
    },
    {
        "id": 13,
        "imageUrl": "https://www.cofefest.ru/upload/resize_cache/iblock/0ac/548_442_1/s6uhv0eaj5mpwcc63upilr31yfbehnym.JPG",
        "name": "Пирожное Медовик",
        "quantity": [1, 2, 3],
        "price": 180
    },
    {
        "id": 14,
        "imageUrl": "https://www.cofefest.ru/upload/resize_cache/iblock/897/548_442_1/jzdd4bgzo7p4x0fu9kcj5z5780zu8u8f.JPG",
        "name": "Десерт Трюфельный",
        "quantity": [1, 2, 3],
        "price": 200
    },
    {
        "id": 15,
        "imageUrl": "https://www.cofefest.ru/upload/resize_cache/iblock/c57/548_442_1/zwfb34ao5wu5lqbx8hcxdf2msiomuc8x.JPG",
        "name": "Пирожное Чизкейк Сникерс",
        "quantity": [1, 2, 3],
        "price": 220
    },
    {
        "id": 16,
        "imageUrl": "https://www.cofefest.ru/upload/resize_cache/iblock/fe8/548_442_1/3p1d01pmf00pf1zvsctjci84vfddtfi7.jpg",
        "name": "Пирожное Морковное",
        "quantity": [1, 2, 3],
        "price": 210
    },
    {
        "id": 17,
        "imageUrl": "https://www.cofefest.ru/upload/resize_cache/iblock/fe7/548_442_1/y9fianjm5ha4k38vo23sxnn4fvddzf8z.JPG",
        "name": "Пирог творожный маковый",
        "quantity": [1, 2, 3],
        "price": 210
    },
    {
        "id": 18,
        "imageUrl": "https://www.cofefest.ru/upload/resize_cache/iblock/131/548_442_1/vc5yjhdfg36gyiaform9yo3wbjq9k613.JPG",
        "name": "Маффин шоколадный",
        "quantity": [1, 2, 3],
        "price": 160
    },
    {
        "id": 19,
        "imageUrl": "https://www.cofefest.ru/upload/resize_cache/iblock/f68/548_442_1/f68436c0ef021ec99784299927da6fb4.jpg",
        "name": "Трубочка со сгущенкой и грецкими орехами",
        "quantity": [1, 2, 3],
        "price": 180
    },
    {
        "id": 20,
        "imageUrl": "https://www.cofefest.ru/upload/resize_cache/iblock/bc5/548_442_1/bc57501d92a0020278a74d40dc3fbbe2.JPG",
        "name": "Печенье шоколадное",
        "quantity": [1, 2, 3],
        "price": 110
    }
];


function Order(){

    return(
        <>
            <Header />
            <h2 className="orderHeader">Выберите напиток</h2>
            <div className="caseWidth">
                <div className="coffeeCartCase" >
                    { items.map(item => <Cart item={item} key={item.id}/>) }
                </div>
            </div>
        </>
    );
}

export default Order;