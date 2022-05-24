import React from 'react';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import {Provider} from 'react-redux'

import App from './App';
import Order from "./pages/order";
import Auth from "./pages/auth";
import './css/style.css'
import Register from "./pages/register";
import Profile from "./pages/profile";
import {store} from "./store";
import './firebase';
import Doorder from "./pages/doorder";
import Constructor from "./pages/constructor";
import Contacts from "./pages/contacts";
import AboutUs from "./pages/aboutUs";
import Barista from "./pages/barista";
import Payment from "./pages/payment";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/order" element={<Order />} />
                    <Route path="/doorder" element={<Doorder />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/aboutUs" element={<AboutUs />} />
                    <Route path="/barista" element={<Barista />} />
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/profile" element={<Profile />} />
                    {/*<Route*/}
                    {/*    path=":id"*/}
                    {/*    element={<Constructor />}*/}
                    {/*/>*/}
                    <Route
                        path="/constructor/:id"
                        element={<Constructor />}
                    />
                </Routes>
            </Provider>
        </BrowserRouter>
    </StrictMode>,
);
