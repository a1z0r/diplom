
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setCurrentItem} from "../store/items/reducer";


 export const Cart = ({ item }) => {

     const navigate = useNavigate();
     const dispatch = useDispatch();

     const handleClick = () =>{
         dispatch(setCurrentItem(item));
         navigate(`/constructor/${item.id}`);
     }
    return(
        <>
                <div className="coffeeCart" onClick={ handleClick }>
                    <img src={item.imageUrl} alt="12312" />
                    <h3>{item.name}</h3>
                </div>
        </>
    );
}

export default Cart;