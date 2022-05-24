import React from 'react';
import { Link } from "react-router-dom";
import {Login} from "../components/Login";
import Header from "../components/header";

function Auth() {
    return (
        <div>
            <Header />
            <h1 className="orderHeader">Авторизация</h1>
                <Login />
            <Link className="linkAuth" to="/register">Еще не с нами ? Зарегистрироваться</Link>
            <Link to="/barista"><button className="baristaBtn">Войти как администратор</button></Link>
        </div>
    );
}

export default Auth;