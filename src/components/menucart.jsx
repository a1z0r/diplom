
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";


export const Menucart = ({ item }) => {

    const navigate = useNavigate();

    const handleClick = () =>{
        navigate(`/order/`);
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

export default Menucart;