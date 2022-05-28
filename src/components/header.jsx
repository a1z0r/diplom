import logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";
import Authvisible from "./authvisible";
import Basket from "./basket";


function Header(){

    return(
        <>
            <header>
                <nav className="caseWidth">
                    <div className="topNav">
                        <div className="logoCase">
                            <img src={logo} alt=""/>
                            <h4>station réveil</h4>
                        </div>
                        <Authvisible />
                    </div>
                    <Basket/>
                    <ul className="navBarUl">
                        <li><Link to="/">главная</Link></li>
                        <li><Link to="/aboutUs">о нас</Link></li>
                        <li><Link to="/order">заказать</Link></li>
                        <li><Link to="/contacts">контакты</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;