import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../Images/Icon/logo.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
            <nav className="bg-white pb-1 sticky top-0">
                <div className="lg:mx-36 mx-auto pr-4 lg:px-0">
                    <div className="flex items-center justify-between h-16">

                        <div className="flex-shrink-0">
                            <NavLink to="#">
                                <div className="flex items-center">
                                    <img
                                        className="h-14 w-14 lg:h-20 lg:w-20"
                                        src={logo}
                                        alt="Workflow"
                                    />
                                    <h2 className="text-black text-xl font-medium lg:pl-5">NIVIZA</h2>
                                </div>
                            </NavLink>

                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <NavLink
                                    to="#"
                                    className=" hover:bg-stone-400 text-black text-xl px-3 py-2 rounded-md text-xl font-medium"
                                >
                                    Home
                                </NavLink>

                                <NavLink
                                    to="#"
                                    className="text-black text-xl hover:bg-stone-400  text-xl px-3 py-2 rounded-md text-medium font-medium"
                                >
                                    Services
                                </NavLink>

                                <NavLink
                                    to="#"
                                    className="text-black text-xl hover:bg-stone-400  text-xl px-3 py-2 rounded-md text-medium font-medium"
                                >
                                   Country
                                </NavLink>

                                <NavLink
                                    to="#"
                                    className="text-black text-xl hover:bg-stone-400  text-xl px-3 py-2 rounded-md text-medium font-medium"
                                >
                                    Blogs
                                </NavLink>

                                <NavLink
                                    to="#"
                                    className="text-black text-xl hover:bg-stone-400  text-xl px-3 py-2 rounded-md text-medium font-medium"
                                >
                                    About Us
                                </NavLink>
                            </div>
                        </div>

                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-300 inline-flex items-center justify-center p-2 rounded-md text-gray-800  text-xl hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >

                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>


                {isOpen && (
                    <div className="md:hidden transition-top duration-500 ease-in-out" id="mobile-menu">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <NavLink
                                to="#"
                                className="hover:bg-stone-400 text-black text-xl block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Home
                            </NavLink>

                            <NavLink
                                to="#"
                                className="text-black text-xl hover:bg-stone-400  text-xl block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Services
                            </NavLink>

                            <NavLink
                                to="#"
                                className="text-black text-xl hover:bg-stone-400  text-xl block px-3 py-2 rounded-md text-base font-medium"
                            >
                               Country
                            </NavLink>

                            <NavLink
                                to="#"
                                className="text-black text-xl hover:bg-stone-400  text-xl block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Blogs
                            </NavLink>

                            <NavLink
                                to="#"
                                className="text-black text-xl hover:bg-stone-400  text-xl block px-3 py-2 rounded-md text-base font-medium"
                            >
                                About Us
                            </NavLink>
                        </div>
                    </div>
                )}
            </nav>
    );
};

export default Header;