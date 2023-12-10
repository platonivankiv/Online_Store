import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../Home/Home";
import {ROUTES} from "../../utils/routes";
import SingleProducts from "../Products/SingleProducts";
import Profile from "../Profile/Profile";

const AppRoutes = () => (
        <Routes>
            <Route index element={<Home />}/>
            <Route path={ROUTES.PRODUCT} element={<SingleProducts />}/>
            <Route path={ROUTES.PROFILE} element={<Profile />}/>
        </Routes>
    );


export default AppRoutes;