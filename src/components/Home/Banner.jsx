'use client'
import { useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { toast, ToastContainer } from "react-toastify";

const Banner = () => {
    const [email, setEmail] = useState("")

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubscribe = () => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

        if (emailRegex.test(email)) {
            toast.success(`Thank you for subscribing! Your email is ${email}`)
            setEmail("")
        } else {
            toast.error("Please enter a valid email address")
        }
    }

    return (
        <section className="banner_image pt-16 pb-16 md:pt-32 md:pb-28 lg:pt-[268px] lg:pb-[229px]">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-[550px_1fr] gap-2 items-center justify-between">
                    <div className="text-center lg:text-left">
                        <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed tracking-wide pb-4">
                            <span className="text-[#F53E32] underline">100%</span> Organic Vegetables
                        </p>

                        <h1 className="text-3xl md:text-4xl lg:text-[55px] font-black tracking-wide pb-5 text-white leading-tight">
                            The best way to stuff your wallet.
                        </h1>

                        <p className="text-sm md:text-base leading-relaxed text-[#7A7A7A] pb-8 lg:pb-12 max-w-md mx-auto lg:mx-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis beatae consequuntur.
                        </p>
                        <div className="max-w-full sm:max-w-[450px] mx-auto lg:mx-0">
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center bg-white md:rounded-full shadow-lg overflow-hidden">
                                <div className="flex-1 py-4 px-6 sm:py-[22px] sm:px-[40px] flex items-center gap-4">
                                    <RiSendPlaneFill className="text-gray-500 flex-shrink-0" />
                                    <input
                                        value={email}
                                        onChange={handleEmailChange}
                                        className="w-full outline-none focus:outline-none placeholder:text-[#838383] text-base"
                                        type="email"
                                        placeholder="Your email address"
                                    />
                                </div>
                                <button
                                    onClick={handleSubscribe}
                                    className="py-4 px-6 sm:py-[22px] sm:px-10 bg-[#3BB77E] text-white cursor-pointer hover:bg-[#2ea068] transition-colors duration-200 font-medium"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 lg:gap-[18px]">
                        <Tag text="Shopping" />
                        <Tag text="Recipes" />
                        <Tag text="Kitchen" />
                        <Tag text="News" />
                        <Tag text="Food" />
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </section>
    )
}

const Tag = ({ text }) => {
    const [isVisible, setIsVisible] = useState(true)

    const handleRemove = () => {
        setIsVisible(false)
    }

    if (!isVisible) return null

    return (
        <div className="py-3 px-4 lg:py-[17px] lg:px-[21px] rounded-full shadow-lg bg-white flex items-center gap-2 lg:gap-[10px] transition-all duration-200 hover:shadow-xl">
            <button
                className="min-w-[20px] h-5 flex items-center justify-center text-gray-500 hover:text-red-500 transition-colors duration-200 text-sm font-bold"
                onClick={handleRemove}
                aria-label={`Remove ${text} tag`}
            >
                ×
            </button>
            <p className="text-sm lg:text-base text-gray-700 whitespace-nowrap">{text}</p>
        </div>
    )
}

export default Banner