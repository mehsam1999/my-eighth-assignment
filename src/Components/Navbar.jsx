/* eslint-disable react/prop-types */
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ cartCount, wishlistCount }) => {
    
    return (
        <div className="">
            <nav className="md:container mx-auto px-2 md:py-4">
                <div className="navbar">
                    <div className="navbar-start">
                        <Link to='/' className="text-xl font-bold flex gap-2 items-center cursor-pointer">
                            <p className="lg:text-xl font-extrabold ">Gadget Heaven</p>
                        </Link>
                    </div>
                
                    <div className="navbar-end md:hidden">
                        <div className="dropdown dropdown-end ">
                            <div tabIndex="0" role="button" className="btn btn-ghost flex items-center justify-center text-3xl">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block h-5 w-5 stroke-current">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </div>
                                <ul tabIndex="0" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
                                    <NavLink to='/' className={({isActive})=> `btn my-2 w-40 rounded-full ${isActive? ' bg-banner text-white' : ''}`}>Home</NavLink>
                                    <NavLink to='/statistics' className={({isActive})=> `btn my-2 w-40 rounded-full ${isActive? ' bg-banner text-white' : ''}`}>Statistics</NavLink>
                                    <NavLink to='/dashboard' className={({isActive})=> `btn my-2 w-40 rounded-full ${isActive? ' bg-banner text-white' : ''}`}>Dashboard</NavLink>
                                    <NavLink to='/support' className={({isActive})=> `btn my-2 rounded-full ${isActive? ' bg-banner text-white' : ''}`}>Online Support</NavLink>
                                </ul>
                            </div>
                        </div>
                        <div className="navbar-center hidden md:flex">
                            <ul className="menu menu-horizontal px-1 font-semibold text-nav-text gap-2">
                                <NavLink to='/' className={({isActive})=> `btn btn-ghost w-28 rounded-xl ${isActive? ' bg-banner text-white font-bold' : ''}`}>Home</NavLink>
                                <NavLink to='/statistics' className={({isActive})=> `btn btn-ghost w-28 rounded-xl ${isActive? ' text-banner font-bold' : ''}`}>Statistics</NavLink>
                                <NavLink to='/dashboard' className={({isActive})=> `btn btn-ghost w-28 rounded-xl ${isActive? ' text-banner font-bold' : ''}`}>Dashboard</NavLink>
                                <NavLink to='/support' className={({isActive})=> `btn btn-ghost rounded-xl ${isActive? ' text-banner font-bold' : ''}`}>Online Support</NavLink>
                            </ul>
                        </div>
                        <div className="navbar-end hidden md:flex gap-3">
                            <Link to='/dashboard/cart'>
                                <button className="btn bg-white btn-circle border border-icon-border relative">
                                    <img src="https://img.icons8.com/?size=80&id=CE7rP-35_XQR&format=png" className="w-6 h-6 object-cover"></img>
                                    <p className="bg-base-100 rounded-full p-2 absolute bottom-8 left-7 border border-gray-300">{cartCount}</p>
                                </button>
                            </Link>
                            <Link to='/dashboard/wishlist'>
                                <button className="btn bg-white btn-circle border border-icon-border relative">
                                    <img src="https://img.icons8.com/?size=32&id=23822&format=png" className="w-6 h-6 object-cover"></img>
                                    <p className="bg-base-100 rounded-full p-2 absolute bottom-8 left-7 border border-gray-300">{wishlistCount}</p>
                                </button>
                            </Link>
                            
                        </div>
                    </div>
            </nav>
        </div>
    );
};

export default Navbar;