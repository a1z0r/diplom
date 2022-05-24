import React from 'react';
import { Link } from "react-router-dom";
import {SignUp} from "../components/SignUp";
import Header from "../components/header";

function Register() {
    return (
        <div>
            <Header />
            <h1 className="orderHeader">Регистрация</h1>
                <SignUp />
            <Link className="linkAuth" to="/auth">Уже с нами ? Войти</Link>
        </div>
    );
}

export default Register;