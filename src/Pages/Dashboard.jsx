/* eslint-disable react/prop-types */
import { useOutletContext } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getAllWishList, removewish } from "../Utilies/wishlist";
import { getAllCart, removeCart } from "../Utilies/cart";
import WishList from "../Components/WishList";
import Cart from "../Components/Cart";
import { NavLink, useLocation } from "react-router-dom";
import PurchaseModal from '../Components/PurchaseModal';
import { Helmet } from 'react-helmet';


const Dashboard = ({ view }) => { 
    // eslint-disable-next-line no-unused-vars
    const { cartCount, setCartCount, totalCost, setTotalCost, wishlistCount, setWishlistCount } = useOutletContext();
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const location = useLocation();
    const activeView = view || location.pathname.includes("wishlist") ? "wishlist" : "cart";

    useEffect(() => {
        const cart = getAllCart();
        setCart(cart);
        setCartCount(cart.length);

        const wishes = getAllWishList();
        setWishlist(wishes);
        setWishlistCount(wishes.length);

        let total = 0;
        for (let item of cart) {
            total += item.price;
        }
        setTotalCost(total);
    }, [setCartCount, setTotalCost, setWishlistCount]);

    const sortByPrice = () => {
        const sortedCart = [...cart].sort((a, b) => b.price - a.price);
        setCart(sortedCart);
    };

    const handleRemoveCart = (id) => {
        removeCart(id);
        const cart = getAllCart();
        setCart(cart);
        setCartCount(cart.length);
        const newTotal = cart.reduce((total, item) => total + item.price, 0);
        setTotalCost(newTotal);
    };

    const handleRemoveWish = (id) => {
        removewish(id);
        const wishes = getAllWishList();
        setWishlist(wishes);
        setWishlistCount(wishes.length);
    };

    const clearCart = () => {
        setCart([]); 
        setCartCount(0);  
        setTotalCost(0); 
        localStorage.removeItem('cartCount'); 
        localStorage.removeItem('cart');  
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlePurchase = () => {
        setIsModalOpen(true);
        
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        clearCart(); 
    };

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Dashboard | Gadget Heaven</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="bg-banner">
                <div className="md:container mx-auto px-2 md:py-10">
                    <div className="flex flex-col justify-center items-center text-center">
                        <h1 className="text-white lg:text-3xl font-semibold">Dashboard</h1>
                        <p className="text-gray-200 mt-4 text-xs lg:text-[1rem] leading-relaxed">
                            Explore the latest gadgets that will take your experience to the next level.
                        </p>
                        <div className="flex gap-3">
                            <NavLink
                                to="/dashboard/cart"
                                className={({ isActive }) =>
                                    `btn rounded-full px-6 mt-6 font-bold w-28 ${isActive ? "bg-banner text-white" : "text-banner"}`
                                }
                            >
                                Cart
                            </NavLink>
                            <NavLink
                                to="/dashboard/wishlist"
                                className={({ isActive }) =>
                                    `btn rounded-full px-6 mt-6 font-bold w-28 ${isActive ? "bg-banner text-white" : "text-banner"}`
                                }
                            >
                                Wishlist
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto py-10">
                {activeView === "cart" ? (
                    <>
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="text-xl font-bold">Cart</h2>
                            </div>
                            <div className="flex gap-3 items-center">
                                <p className="text-xl font-bold">Total Cost: $ {totalCost}</p>
                                <button onClick={sortByPrice} className="btn flex gap-3 items-center bg-white text-banner border-banner rounded-3xl">
                                    Sort by Price
                                    <img className="w-8 h-8" src="https://i.ibb.co.com/X72bb7b/Screenshot-2024-11-07-054448-removebg-preview.png" alt="" />
                                </button>
                                <button 
                                    onClick={handlePurchase} 
                                    disabled={cart.length === 0 || totalCost === 0} 
                                    className="btn bg-banner text-white rounded-3xl w-28"
                                >
                                    Purchase
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4 mb-10">
                            {cart.map((gadget) => (
                                <Cart key={gadget.product_id} gadget={gadget} handleRemoveCart={handleRemoveCart} />
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="grid grid-cols-1 gap-4 mb-10">
                        {wishlist.map((gadget) => (
                            <WishList key={gadget.product_id} gadget={gadget} handleRemoveWish={handleRemoveWish} />
                        ))}
                    </div>
                )}
                <PurchaseModal isOpen={isModalOpen} onClose={handleCloseModal} totalCost={totalCost} clearCart={clearCart} />
            </div>
        </div>
    );
};

export default Dashboard;
