import React from "react";
import { urlFor, client } from "../../lib/client";

const ProductDetails = ({ product, products }) => {
    const { image, name, details, price } = product;
    return (
        <div>
            <div className="product-detail-container">
                <div>
                    <div className="image-container">
                        <img src={urlFor(image && image[0])} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export const getStaticPaths = async () => {
    //para return os dados do produto clicado
    const query = `*[_type== "product"]{
      slug{
        current
      }
    }`;
    const products = await client.fetch(query);
    const paths = produts.map((product) => ({
        params: {
            slug: product.slug.current,
        },
    }));
    return {
        paths,
        fallback: "blocking",
    };
};
export const getStaticProps = async ({ params: { slug } }) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productQuery = '*[_type == "product"]';

    const product = await client.fetch(query);
    const products = await client.fetch(productQuery);

    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);

    return {
        props: { product, products },
    };
};
export default ProductDetails;
