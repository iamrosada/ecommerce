import React from "react";
import {
    AiOutlineMinus,
    AiOutlinePlus,
    AiFillStar,
    AiOutlineStar,
} from "react-icons/ai";
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
                    {/* <div className="small-images-container">
                        {image?.map((item, i) => (
                            <img src={urlFor(item)} alt="" 
                            className=""
                            onMouseEnter=""
                            />
                        ))}
                    </div> */}
                </div>
                <div className="product-detail-desc">
                    <h1>{name}</h1>
                    <div>
                        <div className="reviews">
                            <div>
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiOutlineStar />
                            </div>
                            <p>(20)</p>
                        </div>
                        <h4>Details: </h4>
                        <p>{details}</p>
                        <p className="price">${price}</p>
                        <div className="quantity">
                            <h3>Quantity:</h3>
                            <p className="quantity-desc">
                                <span className="minus" onClick="">
                                    <AiOutlineMinus />
                                </span>
                                <span className="num" onClick="">
                                    0
                                </span>
                                <span className="plus" onClick="">
                                    <AiOutlinePlus />
                                </span>
                            </p>
                        </div>
                        <div className="buttons">
                            <button className="add-to-cart" type="button">
                                Add to Cart
                            </button>
                            <button className="buy-now" type="button">
                                Buy Now
                            </button>
                        </div>
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

    const paths = products.map((product) => ({
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
