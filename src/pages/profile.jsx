import Header from "../components/header";
import Authvisible from "../components/authvisible";
import {useAuth} from "../hooks/use-auth";
import {useDispatch} from "react-redux";
import {removeUser} from 'store/slices/userSlice'
import {useNavigate } from 'react-router-dom';

function Profile(){

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {email} = useAuth();

    return(
        <>
            <Header />
            <div className="caseWidth">
                <img src="https://cdn-icons-png.flaticon.com/512/4825/4825038.png" width="250px" alt=""/>
                <h4>Ваш электронный адрес {email}</h4>
                <h4>Ваше имя </h4>
                <h4>Ваши бонусы </h4>
                <button
                    className="outProfileBtn"
                    onClick={()=>
                        dispatch(removeUser(),
                        navigate('/')
                    )}
                >Выйти из профиля</button>
            </div>
        </>
    );
}

export default Profile;