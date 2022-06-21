import Header from "../components/header";
import Cart from "../components/cart";
import React from "react";
import Footer from "../components/footer";
const items = [
    {
        "id": 1,
        "imageUrl": "https://sun9-38.userapi.com/impg/9OC2W_u-4JETXDfBLZBoX1NmKrRM0cqK8iN3MQ/pPbM6GDN4cY.jpg?size=540x540&quality=96&sign=1e1c2b066047b3ba86739ff73cc87560&type=album",
        "name": "Раф",
        "volume": ["250", "350", "450"],
        "milk": ["Обычное", "Растительное"],
        "syrups": ["Нет","Ореховый", "Кокосовый", "Шоколадный"],
        "kolvo": 1,
        "price": 120,
        "totalPrice": 0

    },
    {
        "id": 2,
        "imageUrl": "https://sun9-4.userapi.com/impg/y6AEt6Jv4Qm8ZnrBIJOiO9eFa6d5TewZU_9_4A/LEJb1Mk1Ogc.jpg?size=540x540&quality=96&sign=0a270d2672b4031aa4e5a7e22b8401f2&type=album",
        "name": "Капучино",
        "volume": ["250", "350", "450"],
        "milk": ["Обычное", "Растительное"],
        "syrups": ["Нет","Ореховый", "Кокосовый", "Шоколадный"],
        "kolvo": 1,
        "price": 110,
        "totalPrice": 0
    },
    {
        "id": 3,
        "imageUrl": "https://sun9-58.userapi.com/impg/dYkrh_rLM5zIz-MiQk861JsADzlyXoA0PxMf3A/Q4mIPcjBNGE.jpg?size=540x540&quality=96&sign=5acb385a5d48273eb0dee7be7886d4eb&type=album",
        "name": "Латте",
        "volume": ["250", "350", "450"],
        "milk": ["Обычное", "Растительное"],
        "syrups": ["Нет", "Ореховый", "Кокосовый", "Шоколадный"],
        "kolvo": 1,
        "price": 110,
        "totalPrice": 0
    },
    {
        "id": 4,
        "imageUrl": "https://sun9-54.userapi.com/impg/sWzN8YFf1y6khD9EPF0ZQchPiQRmXNUfwBG2uQ/moybtQtSvnA.jpg?size=540x540&quality=96&sign=080ca1c793d2ee212850a665616c08a1&type=album",
        "name": "Эспрессо",
        "volume": ["60"],
        "kolvo": 1,
        "price": 80,
        "totalPrice": 0
    },
    {
        "id": 5,
        "imageUrl": "https://sun9-75.userapi.com/impg/8BwCmYW7B-M440dvCqMAFZ7FEFta3rgdUL8Ayw/GEgDv4cX3a8.jpg?size=540x540&quality=96&sign=17e16d3f335122bf4db60d426c86a624&type=album",
        "name": "Американо",
        "volume": ["250", "350", "450"],
        "syrups": ["Нет","Ореховый", "Кокосовый", "Шоколадный"],
        "kolvo": 1,
        "price": 100,
        "totalPrice": 0
    },
    {
        "id": 6,
        "imageUrl": "https://sun9-13.userapi.com/impg/M3vgGCLnoJL4tR7pIwun6HGCXNgGSCyzEZf88A/wXGYl9XVv5Y.jpg?size=540x540&quality=96&sign=07f5fcd19cc151e66200d6f03785c785&type=album",
        "name": "Чай",
        "volume": ["250", "350", "450"],
        "kolvo": 1,
        "price": 100,
        "totalPrice": 0
    },
    {
        "id": 7,
        "imageUrl": "https://sun9-34.userapi.com/impg/rXEXbVItu7jVMilpB5AufmuwRdbkKcyISO3vGQ/_n9Tijr9qFU.jpg?size=2560x2559&quality=95&sign=35d378efe548055c8f60e1727736aa17&type=album",
        "name": "Матча Латте",
        "volume": ["250", "350", "450"],
        "milk": ["Обычное", "Растительное"],
        "kolvo": 1,
        "price": 130,
        "totalPrice": 0
    },
    {
        "id": 8,
        "imageUrl": "https://sun9-51.userapi.com/impg/vjDr8hnP5aCzQ4e7fGpNysHIin-dHVKLnKnaDg/u7k0_w4Y4dU.jpg?size=2560x2559&quality=95&sign=bfd8a2527cff39f6a5b6273dd37c7103&type=album",
        "name": "Чай Земляника - брусника - вишня",
        "volume": ["250", "350", "450"],
        "kolvo": 1,
        "price": 120,
        "totalPrice": 0
    },
    {
        "id": 9,
        "imageUrl": "https://sun9-83.userapi.com/impg/ov7L_m5NgeNFcF4doxAOgCfEHVMgoSBRCb7u1A/hP0ud87yA7Q.jpg?size=2560x2559&quality=95&sign=93079dcabad3906dd3aac98633a1f52d&type=album",
        "name": "Чай Дыня - лемонграсс - жасмин",
        "volume": ["250", "350", "450"],
        "kolvo": 1,
        "price": 120,
        "totalPrice": 0
    },
    {
        "id": 10,
        "imageUrl": "https://sun9-34.userapi.com/impg/5_TScRFWjwJv1OS8JjaDq2WBuPD5ydYJClbOtg/uXUJ5QFHHNg.jpg?size=2560x2559&quality=95&sign=5d814b937d8a57193baa66de31711c91&type=album",
        "name": "Чай Облепиха - лимон - мед",
        "volume": ["250", "350", "450"],
        "kolvo": 1,
        "price": 120,
        "totalPrice": 0
    },
    {
        "id": 11,
        "imageUrl": "https://sun9-west.userapi.com/sun9-3/s/v1/ig2/K1K72yOFQWQIL1i_le8YwXAZCn55kZ_RBbUUwIhZvQ4TEuj7xDNIhLg7ZuIv3ZP9Q4xtu97bQ18nLKu5pIOrDXJv.jpg?size=548x411&quality=96&type=album",
        "name": "Десерт Три шоколада",
        "kolvo": 1,
        "price": 130,
        "totalPrice": 0
    },
    {
        "id": 12,
        "imageUrl": "https://sun9-north.userapi.com/sun9-83/s/v1/ig2/ZE6q2xh2tLcyXdL_3Z1ofuZalaObXYFuCcywtT9OBmEK85RnsoTid7JpkApm4e2sS9aFSdlz-8bEUalIxn87zrix.jpg?size=548x411&quality=96&type=album",
        "name": "Пирожное Красный бархат",
        "kolvo": 1,
        "price": 125,
        "totalPrice": 0
    },
    {
        "id": 13,
        "imageUrl": "https://sun9-east.userapi.com/sun9-41/s/v1/ig2/FAqkML1zZ54utUcfhZq0vbRCJYeztfKPUb8Fv8WPQgCs6BTXhcMIEwcZyExDCrZLrRMN873K6T7pP1IF7-0qoEdI.jpg?size=548x411&quality=96&type=album",
        "name": "Пирожное Медовик",
        "kolvo": 1,
        "price": 130,
        "totalPrice": 0
    },
    {
        "id": 14,
        "imageUrl": "https://sun9-north.userapi.com/sun9-81/s/v1/ig2/gXX04teX6HcYlFl_ds0lfOGi_iaW6O_I3nIcindh_HEnqpK73734Zxd-Z1NT0eQkkXPAa-wQd3Z38U4nxPkh-kiH.jpg?size=548x411&quality=96&type=album",
        "name": "Десерт Трюфельный",
        "kolvo": 1,
        "price": 140,
        "totalPrice": 0
    },
    {
        "id": 15,
        "imageUrl": "https://sun9-west.userapi.com/sun9-6/s/v1/ig2/TDhGMzHrWV9vZmdy9mN5q1Zh_DmOWBEa7v8TZ1G6DTx5WauRhWsbbLKVfmajmohHk85bq3um87gZcSbV3M984kzv.jpg?size=548x411&quality=96&type=album",
        "name": "Пирожное Чизкейк Сникерс",
        "kolvo": 1,
        "price": 150,
        "totalPrice": 0
    },
    {
        "id": 16,
        "imageUrl": "https://sun9-east.userapi.com/sun9-57/s/v1/ig2/z0fl5VQDiAgbV67Sl8Maltkd5B25uEbnEpatyIQuIQ5POME76gIv4cgU3inUYul51l_ds2UngKtRFwbNKWoidd8p.jpg?size=548x411&quality=96&type=album",
        "name": "Пирожное Морковное",
        "kolvo": 1,
        "price": 145,
        "totalPrice": 0
    },
    {
        "id": 17,
        "imageUrl": "https://sun9-east.userapi.com/sun9-60/s/v1/ig2/5nwUgZMw7XjkZss1Kdq_PDbvTq6mTLzwnWdkRENc6kJfFy34gZCg5ELHXvW1QlXxv5RKYjZLxVrxiJS4Umwy-Jmo.jpg?size=548x411&quality=96&type=album",
        "name": "Пирог творожный маковый",
        "kolvo": 1,
        "price": 145,
        "totalPrice": 0
    },
    {
        "id": 18,
        "imageUrl": "https://sun9-east.userapi.com/sun9-43/s/v1/ig2/Xjo5YxWRAKmPYqDqXfsZN-cUxAmW3zjh7ot7DY1HoofJTrUA04d8lILLJpeAmf1cc6eDZg0EAEM--L6EgEznzr92.jpg?size=548x411&quality=96&type=album",
        "name": "Маффин шоколадный",
        "kolvo": 1,
        "price": 85,
        "totalPrice": 0
    },
    {
        "id": 19,
        "imageUrl": "https://sun9-east.userapi.com/sun9-21/s/v1/ig2/mrzU1rivKQupK5sIN0g9gfDoshocIR0Od12GmB8oeJ7yXVGLlbSN326ON19zgfoIJe1xCJGVP0R_40iJCrx0CDiD.jpg?size=548x365&quality=96&type=album",
        "name": "Трубочка со сгущенкой и грецкими орехами",
        "kolvo": 1,
        "price": 110,
        "totalPrice": 0
    },
    {
        "id": 20,
        "imageUrl": "https://sun9-east.userapi.com/sun9-60/s/v1/ig2/Q9DW_PenaV1bP0kG8xJuOe4JdQOxb5AhjIi4OnKP7kz1ICmxbTQFU9f5E9s_fLYa3RBEit1l4KW0FCnV-zqWt2QV.jpg?size=548x365&quality=96&type=album",
        "name": "Печенье шоколадное",
        "kolvo": 1,
        "price": 75,
        "totalPrice": 0
    }
];


function Order(){
    window.scrollTo(0, 0);
    return(
        <>
            <Header />
            <h2 className="orderHeader">Наш ассортимент</h2>
            <div className="caseWidth">
                <div className="coffeeCartCase" >
                    { items.map(item => <Cart item={item} key={item.id}/>) }
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Order;