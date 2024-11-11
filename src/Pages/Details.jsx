import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllWishList, wishList } from "../Utilies/wishlist";
import { useOutletContext } from 'react-router-dom';
import { addToCart } from "../Utilies/cart";
import { Helmet } from "react-helmet";

const Details = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const [gadget, setGadget] = useState({});
    const [wishLists, setWishLists] = useState(false)
    const { incrementCart, incrementWishlist } = useOutletContext();

    useEffect(() => {
        const singleData = data.find(gadget => gadget.product_id === id)
        setGadget(singleData);
        const wishes = getAllWishList()
        const isExist = wishes.find(item => item.product_id === singleData.product_id)
        if(isExist){
            setWishLists(true)
        }
    }, [data, id]);
    const { product_title, product_image, price, description, specification, availability, rating} = gadget

    const handleWishList = gadget => {
        wishList(gadget)
        setWishLists(true)
        incrementWishlist();
    }
    const handleAddToCart = (gadget) => {
        addToCart(gadget); 
        incrementCart();
    };

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Product Details | Gadget Heaven</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="bg-banner relative">
                <div className="md:container mx-auto px-2 md:py-10">
                    <div className="flex flex-col justify-center items-center text-center">
                        <h1 className="text-white lg:text-3xl font-semibold ">Product Details</h1>
                        <p className="text-gray-200 mt-4 text-xs lg:text-[1rem] leading-relaxed mb-80">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                    </div>
                </div> 
            </div>
            <div className="rounded-2xl px-7 flex items-center gap-8 bg-white container mx-auto absolute bottom-10 left-1/2 transform -translate-x-1/2">
                <div className="h-[500px] border-2 border-purple-100 rounded-2xl">
                    <img src={product_image} className="rounded-2xl h-full " alt="" />
                </div>
                <div className="space-y-3 py-6">
                    <h2 className="text-2xl font-bold">{product_title}</h2>
                    <p className="font-bold">Price: ${price}</p>
                    <p className={`btn border-banner ${availability ? "bg-green-100 border-green-500 text-green-700 rounded-full w-24" : "bg-red-100 border-red-500 text-red-700 rounded-full w-28"}`}>
                        {availability ? "In Stock" : "Stock Out"}
                    </p>
                    <p className="text-gray-500 font-medium">{description}</p>
                    <ol className="space-y-2"> <p className="font-bold">Specification:</p>
                        {specification?.map((specifications, index) => (
                            <li key={index}>
                                {index + 1}. {specifications}
                            </li>
                        ))}
                    </ol>
                    <p className="font-bold">Rating</p>
                    <div className="flex items-center gap-3">
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500"  />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" defaultChecked/>
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" />
                        </div>
                        <div className="rounded-2xl p-2 bg-gray-200">{rating}</div>
                    </div>
                    <div className="flex items-center gap-3">
                        <button onClick={() => handleAddToCart(gadget)} className="btn bg-banner rounded-full w-40 text-white">
                            <p>Add To Card</p>
                            <img src="https://i.ibb.co.com/TBZq4KN/icons8-cart-48.png" className="w-6 h-6 object-cover"></img>
                        </button>
                        <button disabled={wishLists} onClick={()=>handleWishList(gadget)} className="btn bg-white btn-circle border border-icon-border ">
                            <img src="https://img.icons8.com/?size=32&id=23822&format=png" className="w-6 h-6 object-cover"></img>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
