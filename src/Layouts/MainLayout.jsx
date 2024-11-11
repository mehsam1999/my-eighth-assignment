import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from "react";

const MainLayout = () => {
    const getCartCount = () => {
        const countCart = localStorage.getItem('cartCount');
        if (countCart !== null) { 
            return parseInt(countCart);
        } else {
            return 0; 
        }
    };

    const getWishlistCount = () => {
        const countWish = localStorage.getItem('wishlistCount');
        if (countWish !== null) { 
            return parseInt(countWish);
        } else {
            return 0; 
        }
    };

    const [cartCount, setCartCount] = useState(getCartCount);
    const [wishlistCount, setWishlistCount] = useState(getWishlistCount);
    const [totalCost, setTotalCost] = useState(0);
    
    useEffect(() => {
        localStorage.setItem('cartCount', cartCount);
        localStorage.setItem('wishlistCount', wishlistCount);
    }, [cartCount, wishlistCount]);

    const incrementCart = () => {
        setCartCount((count) => count + 1);
    };

    const incrementWishlist = () => {
        setWishlistCount((count) => count + 1);
    };

    
    const location = useLocation();
    const isHomePage = location.pathname === '/' || location.pathname.startsWith('/category')

    return (
        <div>
            <Toaster></Toaster>
            {!isHomePage && (
                <div className="bg-base-200">
                    <Navbar cartCount={cartCount} wishlistCount={wishlistCount}></Navbar>
                </div>
            )}
            {/* dynamic contents */}
            <div className="min-h-screen bg-base-200">
                <Outlet context={{ incrementCart, cartCount, setCartCount, totalCost, setTotalCost, incrementWishlist, wishlistCount, setWishlistCount }}></Outlet>
            </div>
            {/* footer */} 
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;