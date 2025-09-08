"use client"
import Image from 'next/image'
import { IoMdSearch } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import mainLogo from "../../assets/mainLogo.svg"
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const items = useSelector(state => state.cart);
    const { wishlist } = useSelector(state => state);

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const cartCount = mounted ? items.length : 0;
    const wishlistCount = mounted ? wishlist.length : 0;

    return (
        <nav className='py-3 sm:py-4 lg:py-5 bg-white shadow-sm border-b border-gray-100'>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className='flex flex-col lg:flex-row items-center justify-between gap-y-4 lg:gap-y-0'>

                    {/* Logo and Search Section */}
                    <div className='flex flex-col lg:flex-row items-center gap-4 lg:gap-8 w-full lg:w-auto'>

                        {/* Logo */}
                        <Link href={"/"} className='flex items-center gap-3 flex-shrink-0 group'>
                            <div className="relative">
                                <Image
                                    src={mainLogo}
                                    alt='Foodzy logo'
                                    width={45}
                                    height={45}
                                    className='lg:w-[50px] lg:h-[50px] transition-transform duration-300 group-hover:scale-110'
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-[#64B496]/20 to-[#F53E32]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                            </div>
                            <div className='flex flex-col'>
                                <p className='text-xl lg:text-2xl font-black tracking-wide bg-gradient-to-r from-[#64B496] via-[#5ba085] to-[#4a9f7a] bg-clip-text text-transparent'>
                                    Foodzy
                                </p>
                                <p className='text-xs text-gray-500 hidden sm:block font-medium tracking-wide'>
                                    A Treasure of Tastes
                                </p>
                            </div>
                        </Link>

                        {/* Search Bar */}
                        <div className='flex w-full sm:w-[350px] md:w-[450px] lg:w-[500px] xl:w-[600px] max-w-2xl'>
                            <div className="relative w-full group">
                                <input
                                    className='w-full border-2 border-[#64B496] rounded-l-xl px-4 lg:px-5 py-2.5 lg:py-3 outline-none text-sm lg:text-base placeholder:text-gray-400 transition-all duration-300 focus:border-[#4a9f7a] focus:shadow-lg focus:shadow-[#64B496]/20 bg-white'
                                    type="text"
                                    placeholder='Search for delicious items...'
                                />
                                <div className="absolute inset-0 rounded-l-xl bg-gradient-to-r from-[#64B496]/5 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            </div>
                            <button
                                className='px-4 lg:px-6 py-2.5 lg:py-3 bg-gradient-to-r from-[#F53E32] via-[#e63529] to-[#d42d20] rounded-r-xl hover:from-[#e63529] hover:via-[#d42d20] hover:to-[#c42118] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#F53E32]/25 transform hover:scale-[1.02] active:scale-[0.98] group'
                                aria-label='Search'
                            >
                                <IoMdSearch className='text-white text-lg lg:text-xl group-hover:rotate-12 transition-transform duration-300' />
                            </button>
                        </div>
                    </div>

                    {/* Navigation Icons */}
                    <div className='flex items-center gap-4 lg:gap-8'>

                        {/* Account */}
                        <div className='flex flex-col sm:flex-row items-center gap-1 sm:gap-2 cursor-pointer group transition-all duration-300 hover:scale-105 p-2 rounded-xl hover:bg-[#64B496]/10'>
                            <div className="relative">
                                <IoPersonOutline className='text-xl lg:text-2xl text-gray-600 group-hover:text-[#64B496] transition-all duration-300' />
                                <div className="absolute inset-0 bg-[#64B496]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                            </div>
                            <p className='text-xs sm:text-sm font-semibold text-gray-600 group-hover:text-[#64B496] transition-colors duration-300'>
                                Account
                            </p>
                        </div>

                        {/* Wishlist */}
                        <Link href={"/wishlist"} className='flex flex-col sm:flex-row items-center gap-1 sm:gap-2 cursor-pointer group transition-all duration-300 hover:scale-105 p-2 rounded-xl hover:bg-[#F53E32]/10 relative'>
                            <div className="relative">
                                <FaRegHeart className='text-xl lg:text-2xl text-gray-600 group-hover:text-[#F53E32] transition-all duration-300 group-hover:animate-pulse' />
                                <div className="absolute inset-0 bg-[#F53E32]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                            </div>
                            <p className='text-xs sm:text-sm font-semibold text-gray-600 group-hover:text-[#F53E32] transition-colors duration-300'>
                                Wishlist
                            </p>
                            {wishlistCount > 0 && (
                                <span className='absolute -top-1 -right-1 min-w-[22px] h-[22px] px-1 rounded-full bg-gradient-to-r from-[#F53E32] to-[#e63529] text-white text-xs flex items-center justify-center font-bold shadow-lg animate-bounce border-2 border-white'>
                                    {wishlistCount}
                                </span>
                            )}
                        </Link>

                        {/* Cart */}
                        <Link href={"/cart"} className='flex flex-col sm:flex-row items-center gap-1 sm:gap-2 cursor-pointer group transition-all duration-300 hover:scale-105 p-2 rounded-xl hover:bg-[#64B496]/10 relative'>
                            <div className="relative">
                                <MdOutlineShoppingCart className='text-xl lg:text-2xl text-gray-600 group-hover:text-[#64B496] transition-all duration-300 group-hover:animate-bounce' />
                                <div className="absolute inset-0 bg-[#64B496]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                            </div>
                            <p className='text-xs sm:text-sm font-semibold text-gray-600 group-hover:text-[#64B496] transition-colors duration-300'>
                                Cart
                            </p>
                            {cartCount > 0 && (
                                <span className='absolute -top-1 -right-1 min-w-[22px] h-[22px] px-1 rounded-full bg-gradient-to-r from-[#F53E32] to-[#e63529] text-white text-xs flex items-center justify-center font-bold shadow-lg animate-bounce border-2 border-white'>
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar