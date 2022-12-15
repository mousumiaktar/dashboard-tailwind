import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };


    return (
        <nav
            className="w-full top-0 font-poppins z-50 pl-5 pr-5 ease-in-out duration-1000 sticky md:bg-gray-900 bg-gray-900"
        >
            <div className="container mx-auto h-full">
                <div className="flex justify-between items-center w-full lg:px-8  z-50 nav-area left-0">
                    <div className="logo flex items-center">
                        <h1 className='text-3xl py-3 text-white'>Content-Management</h1>
                    </div>

                    <ul className="hidden md:flex text-white items-center gap-5">
                        <li className="p-4 cursor-pointer">
                            <Link to="/news">Home</Link>
                        </li>
                        <li className="mt-4 mb-4 p-2 px-5  rounded cursor-pointer">
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="mt-4 mb-4 p-2 px-5 rounded cursor-pointer">
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>

                    <div onClick={handleNav} className="block md:hidden">
                        {nav ?
                            <AiOutlineClose className="text-white" size={20} />
                            :
                            <AiOutlineMenu className="text-white" size={20} />}
                    </div>

                    <ul
                        className={
                            nav ?
                                "fixed left-2 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out          duration-500"
                                :
                                "ease-in-out duration-500 fixed left-[-100%]"
                        }
                    >
                        <h1 className='text-2xl py-3 text-white'>Content-Management</h1>
                        <li className="p-4 border-b border-gray-600 text-white">Home</li>
                        <li className="p-4 border-b border-gray-600 text-white">Dashboard</li>
                        <li className="p-4 text-white">Login</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;