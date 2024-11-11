/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Gadget = ({ gadget }) => {
    const { product_id, product_title, product_image, category, price } = gadget || {};
    
    return (
        <div className="card bg-base-100 border-2 rounded-2xl h-[400px] transition hover:scale-105 overflow-hidden">
            <figure className="h-[700px] p-4">
                <img className="h-full rounded-2xl object-cover"
                    src={product_image}
                    alt="product" />
            </figure>
            <div className="px-10 py-4">
                <h2 className="card-title text-xl font-bold">{product_title}</h2>
                <p className="text-gray-600">{category}</p>
                <p className="text-gray-600">Price: ${price}</p>
                <Link to={`/details/${product_id}`}><button className="btn font-semibold text-banner rounded-full border border-banner mt-2">View Details</button></Link>
            </div>
        </div>
    );
};

export default Gadget;