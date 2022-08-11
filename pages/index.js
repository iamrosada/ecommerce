import React from "react";
import { client } from "../lib/client";

import { Product, FooterBanner, HeroBanner } from "../components";

const Home = () => {
    return (
        <>
            <HeroBanner />

            <div className="products-heading">
                <h2>Beset Selling Product</h2>
                <p>Speakers of many variations</p>
            </div>
            <div className="products-container">
                {["Product 1", "Product 2"].map((product) => {
                    return product;
                })}
            </div>

            <FooterBanner />
        </>
    );
};

export default Home;
