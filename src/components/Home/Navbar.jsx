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
        <nav className='py-3 sm:py-4 lg:py-5 bg-white'>
            <div className="container">
                <div className='flex flex-col lg:flex-row items-center justify-between gap-y-3 sm:gap-y-4'>
                    <div className='flex flex-col lg:flex-row items-center gap-3 sm:gap-4 lg:gap-6 w-full lg:w-auto'>
                        <Link href={"/"} className='flex items-center gap-2 sm:gap-3 flex-shrink-0'>
                            <Image
                                src={mainLogo}
                                alt='Foodzy logo'
                                width={40}
                                height={40}
                                className='sm:w-[45px] sm:h-[45px] lg:w-[50px] lg:h-[50px]'
                            />
                            <div className='flex flex-col'>
                                <p className='text-lg sm:text-xl font-black tracking-wide'>Foodzy</p>
                                <p className='text-xs text-gray-500 hidden sm:block'>A Treasure of Tastes</p>
                            </div>
                        </Link>
                        <div className='flex w-full sm:w-[350px] md:w-[400px] lg:w-[500px] xl:w-[600px] max-w-2xl'>
                            <input
                                className='flex-grow border border-[#64B496] rounded-l-md px-3 sm:px-4 py-2 outline-none text-sm placeholder:text-gray-500 placeholder:text-xs sm:placeholder:text-sm'
                                type="text"
                                placeholder='Search for items...'
                            />
                            <button
                                className='px-3 sm:px-4 py-2 bg-[#F53E32] rounded-r-md hover:bg-[#e63529] transition-colors duration-200'
                                aria-label='Search'
                            >
                                <IoMdSearch className='text-white text-lg sm:text-xl' />
                            </button>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 sm:gap-4 lg:gap-6'>
                        <div className='flex flex-col sm:flex-row items-center gap-1 sm:gap-2 cursor-pointer hover:text-[#64B496] transition-colors duration-200'>
                            <IoPersonOutline className='text-lg sm:text-xl' />
                            <p className='text-xs sm:text-sm font-medium'>Account</p>
                        </div>
                        <Link href={"/wishlist"} className='flex flex-col sm:flex-row items-center gap-1 sm:gap-2 cursor-pointer hover:text-[#F53E32] transition-colors duration-200 relative'>
                            <FaRegHeart className='text-lg sm:text-xl' />
                            <p className='text-xs sm:text-sm font-medium'>Wishlist</p>
                            {
                                wishlistCount > 0 && (
                                    <span className='absolute top-[-15px] left-[-10px] size-[20px] rounded-full bg-[#F53E32] text-white flex items-center justify-center'>
                                        {wishlistCount}
                                    </span>
                                )
                            }
                        </Link>
                        <Link href={"/cart"} className='flex flex-col sm:flex-row items-center gap-1 sm:gap-2 cursor-pointer hover:text-[#64B496] transition-colors duration-200 relative'>
                            <MdOutlineShoppingCart className='text-lg sm:text-xl' />
                            <p className='text-xs sm:text-sm font-medium'>Cart</p>
                            {cartCount > 0 && (
                                <span className='absolute top-[-15px] left-[-10px] size-[20px] rounded-full bg-[#F53E32] text-white flex items-center justify-center'>
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
