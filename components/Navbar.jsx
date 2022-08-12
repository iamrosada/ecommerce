import Link from "next/link";
import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
    const { showCart, setShowCart, totalQuantities } = useStateContext();
    return (
        <div className="navbar-container">
            <p className="particular-style-logo">
                <Link href="/">MÔBIOLO </Link>
            </p>
            <button
                className="cart-icon"
                type="button"
                onClick={() => {
                    setShowCart(true);
                }}
            >
                <AiOutlineShopping />
                <span className="cart-item-qty">{totalQuantities}</span>
            </button>
            {showCart && <Cart />}
        </div>
    );
};

export default Navbar;
