import React from "react";
import {Routes,Route} from "react-router-dom";
import Login from "../pages/Login";
import Products from "../pages/Products";
import Deals from "../pages/Deals";
import Menu from "../pages/Menu";

import Home from "../pages/Home";

function AllRoutes(){

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/menu" element={<Menu/>}></Route>
                <Route path="/deals" element={<Deals/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/products" element={<Products/>}></Route>
            </Routes>
        </div>
    )
}
export default AllRoutes;