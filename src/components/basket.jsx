import basketicon from "../assets/basket.svg";
import {useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";

function Basket(){
    const items = useSelector(state => state.basket.itemsInBasket);
    const totalPrice = items.reduce((acc, item) => acc += item.price ,0);
    return(
        <div>
            <Link to="/doorder">
                <div className="basketStyle">
                    <img src={basketicon} width="35px" height="35px" alt=""/>
                    <span className="price"> { totalPrice }руб.</span>
                </div>
            </Link>
        </div>
)
}

export default Basket;