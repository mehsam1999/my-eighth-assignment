/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import { TiDeleteOutline } from "react-icons/ti";
import { Helmet } from "react-helmet";

const Cart = ({ gadget, handleRemoveCart }) => {
    const { pathname } = useLocation();
    const { product_id, product_title, product_image, description, price } = gadget || {};

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Cart | Gadget Heaven</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="border-2 p-6 grid grid-cols-1 rounded-xl my-2 bg-white">
                <div className="flex flex-row">
                    <div className="w-40 h-40 flex items-center justify-center rounded-2xl border-2 border-purple-100">
                        <img src={product_image} className="w-full h-full object-cover rounded-xl" alt="" />
                    </div>
                    <div className="ml-6 flex-grow space-y-2">
                        <h2 className="text-2xl font-bold">{product_title}</h2>
                        <p className="text-gray-500 font-semibold text-lg">{description}</p>
                        <p className="text-gray-800 font-bold text-lg">Price: ${price}</p>
                        <Link to={`/details/${product_id}`}><button className="btn font-semibold text-banner rounded-full border border-banner mt-2">View Details</button></Link>
                    </div>
                    {pathname.includes('/dashboard') && (
                        <p onClick={() => handleRemoveCart(product_id)} className="text-red-500 cursor-pointer">
                            <TiDeleteOutline size={35} />
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cart;
