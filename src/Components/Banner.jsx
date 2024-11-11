/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Banner = ({cartCount ,wishlistCount}) => {
    const navigate = useNavigate()
    return (
        <div>
            <div className="pt-6">
                <div className="relative border border-purple-200 rounded-3xl mx-8 p-2 bg-white">
                    <div className="bg-banner rounded-2xl">
                        <div className="text-white">
                            <Navbar cartCount={cartCount} wishlistCount={wishlistCount}></Navbar>
                        </div>
                        <div className="md:container mx-auto px-2 md:py-4">
                            <div className="flex flex-col justify-center items-center text-center">
                                <h1 className="text-white lg:text-5xl font-semibold leading-relaxed">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                                <p className="text-gray-200 mt-4 text-xs lg:text-[1rem] leading-relaxed">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                                <button onClick={()=> navigate('/dashboard')} className="btn rounded-full px-6 mt-6 text-banner font-bold mb-60">Shop Now</button>
                            </div>
                        </div> 
                        <div className="absolute border-2 border-base-100 rounded-3xl p-4 top-96 left-1/2 transform -translate-x-1/2">
                            <div className="h-[500px] w-[1000px]">
                                <img src="https://i.ibb.co.com/1fnhQtT/banner.jpg" className="h-full w-full object-cover rounded-2xl" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Banner;