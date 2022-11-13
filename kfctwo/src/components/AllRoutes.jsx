import React from "react";
import {Routes,Route} from "react-router-dom";
import Login from "../pages/Login";
import Burgers from "../pages/Burders";
import Chicken from "../pages/Chicken";
import Home from "../pages/Home";
import Biryani from "../pages/Biryani";
import HotDeals from "../pages/HotDeals";
import Cart from "../pages/Cart";
import Menu from "../pages/Menu";
import AdminLogin from "../pages/AdminLogin";
import AdminPage from "../pages/AdminPage";
import UserDetails from "../pages/UserDetails";


function AllRoutes(){

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/burgers" element={<Burgers/>}></Route>
                <Route path="/chicken" element={<Chicken/>}></Route>
                <Route path="/biryani" element={<Biryani/>}></Route>
                <Route path="/hotdeals" element={<HotDeals/>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>
                <Route path="/menu" element={<Menu/>}></Route>
                <Route path="/adminlogin" element={<AdminLogin/>}></Route>
                <Route path="/adminpage" element={<AdminPage/>}></Route>
               
                <Route path="/userdetails" element={<UserDetails/>}></Route>
            </Routes>
        </div>
    )
}
export default AllRoutes;