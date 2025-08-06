"use client"
import React, { useState } from 'react'
import { RiSendPlaneFill } from 'react-icons/ri'
import ourShopImg from "../../assets/ourshop.png"
import Image from 'next/image'
import { toast } from 'react-toastify'

const OurShop = () => {
    const [email, setEmail] = useState("")

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    const handleSubscribe = () => {
        if (emailRegex.test(email)) {
            toast.success(`Thank you for subscribing! Your email: ${email}`)
            setEmail("") // Clear input after successful subscription
        } else {
            toast.error("Please enter a valid email address")
        }
    }

    return (
        <section className='mt-8 md:mt-[54px] px-4'>
            <div className="container mx-auto max-w-7xl">
                <div className='bg-[#3BB77E] rounded-[20px] py-8 px-6 md:py-[60px] lg:py-[84px] md:px-8 lg:px-[50px] flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden'>

                    <div className='w-full lg:max-w-[529px] z-10'>
                        <h2 className='text-2xl md:text-3xl lg:text-[40px] font-bold text-[#253D4E] leading-tight lg:leading-[48px] pb-4 lg:pb-[20px]'>
                            Stay home & get your daily needs from our shop
                        </h2>

                        <p className='text-base md:text-lg leading-6 lg:leading-[24px] pb-6 lg:pb-[46px] text-[#253D4E]'>
                            Start your daily shopping with{' '}
                            <span className='text-white font-semibold'>Nest Mart</span>
                        </p>

                        <div className="flex flex-col sm:flex-row items-stretch bg-white lg:rounded-full shadow-lg overflow-hidden max-w-md lg:max-w-none">
                            <div className="flex-1 py-3 px-4 md:py-4 md:px-6 lg:py-[22px] lg:px-[40px] flex items-center gap-3 md:gap-4">
                                <RiSendPlaneFill className="text-gray-500 flex-shrink-0 text-lg md:text-xl" />
                                <input
                                    value={email}
                                    onChange={handleEmailChange}
                                    className="w-full outline-none focus:outline-none placeholder:text-[#838383] text-sm md:text-base"
                                    type="email"
                                    placeholder="Your email address"
                                    onKeyPress={(e) => e.key === 'Enter' && handleSubscribe()}
                                />
                            </div>
                            <button
                                onClick={handleSubscribe}
                                className="py-3 px-6 md:py-4 md:px-8 lg:py-[22px] lg:px-10 bg-[#F53E32] hover:bg-[#d63429] text-white cursor-pointer transition-colors duration-200 font-medium text-sm md:text-base whitespace-nowrap"
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>

                    <div className='relative lg:absolute lg:right-[50px] lg:bottom-0 w-full lg:w-auto flex justify-center lg:justify-end'>
                        <div className='w-48 md:w-64 lg:w-auto'>
                            <Image
                                src={ourShopImg}
                                alt='Shop illustration'
                                className='w-full h-auto object-contain'
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurShop