import React from "react";

import { useNavigate } from "react-router-dom";
// import Addtocart from "./Addtocart";
const Navbar = ({ cartcount }) => {
    const navigate = useNavigate();
    const addtocart = () => {
        navigate("/cart");
    }
    return (
        <>
            <div className="logo">
               <h2> rk.fashionStore.</h2>
            </div>
            <div className="list">
                <a href="home">Home</a>
                <a href="home">About US</a>
                <a href="home">Products</a>
                <a href="home">Contact Us</a>
            </div>
          <div className="cart-search-icon">
          <div className="search-bar">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="search for collections" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <span class="input-group-text" id="basic-addon2"><i class="fa-solid fa-magnifying-glass"></i></span>
                </div>
            </div>
            <div className="cart">
                <button onClick={addtocart}><img src="images/cart.png" alt="cart" /></button>
                <div className="cartthings">
                    <span className="badge">{cartcount} items</span>
                    {/* <p className="totalbill">Rs.0</p> */}
                </div>

            </div>
          </div>
        </>
    );

};
export default Navbar;