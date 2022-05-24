import logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";
import Authvisible from "./authvisible";


function BaristaHeader(){

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
                    <ul className="navBarUl">
                        <h2>Панель баристы</h2>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default BaristaHeader;