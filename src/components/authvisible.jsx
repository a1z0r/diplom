import { useAuth } from 'hooks/use-auth';
import { Link } from "react-router-dom";

function Authvisible(){

    const {isAuth, email} = useAuth();

    return isAuth ?(
        <>
            <div className="profileStyle">
                <h4>Приветствуем, <Link to="/profile">{email}</Link></h4>
            </div>
            <br/>
        </>
    ) : (
            <>
        <div className="profStyle"><Link to="/auth">Войти</Link></div>
            </>
    )
}

export default Authvisible;