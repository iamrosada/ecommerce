import React from "react";
import { client } from "../lib/client";

import { Product, FooterBanner, HeroBanner } from "../components";

const Home = ({ products, bannerData }) => {
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
export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);

    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);

    return {
        props: { products, bannerData },
    };
};
export default Home;
