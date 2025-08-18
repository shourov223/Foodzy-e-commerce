"use client"
import Image from "next/image"
import Mainlogo from "../../assets/mainLogo.svg"
import { IoCallOutline, IoLocationOutline } from "react-icons/io5"
import { CiMail } from "react-icons/ci";
import { IoIosSend } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaRegCopyright } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

// Data structure for footer content
const footerData = {
    company: {
        name: "Foodzy",
        tagline: "A Treasure of Tastes",
        description: "FoodTrove is the biggest market of grocery products. Get your daily needs from our store.",
        contact: {
            address: "51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783, USA.",
            email: "example@email.com",
            phone: "+91 123 4567890"
        }
    },
    companyLinks: [
        "About Us",
        "Delivery Information",
        "Privacy Policy",
        "Terms & Conditions",
        "contact Us",
        "Support Center"
    ],
    categoryLinks: [
        "Dairy & Bakery",
        "Fruits & Vegetable",
        "Snack & Spice",
        "Juice & Drinks",
        "Chicken & Meat",
        "Fast Food"
    ]
};

const Footer = () => {
    const [email, setEmail] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const emailRegex = /^(?=.{1,254}$)(?=.{1,64}@)[A-Za-z0-9._%+-]+@(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,63}$/;

    const handleSendMessage = () => {
        if (emailRegex.test(email)) {
            toast.success("Thank you for subscribe us");
            setEmail("");
        } else {
            toast.error("Please input a valid email");
        }
    };

    return (
        <footer className="pt-16 lg:pt-25 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 pb-16 lg:pb-25">
                    <div className="lg:col-span-1 md:col-span-2 lg:max-w-md">
                        <div className="flex items-center gap-2.5 mb-6">
                            <Image src={Mainlogo} alt="Foodzy Logo" />
                            <div>
                                <h2 className="text-black font-bold text-lg">{footerData.company.name}</h2>
                                <p className="text-gray-500 text-xs font-semibold">{footerData.company.tagline}</p>
                            </div>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-sm">
                            {footerData.company.description}
                        </p>
                        <div className="space-y-2">
                            <ContactItem
                                icon={IoLocationOutline}
                                text={footerData.company.contact.address}
                            />
                            <ContactItem
                                icon={CiMail}
                                text={footerData.company.contact.email}
                            />
                            <ContactItem
                                icon={IoCallOutline}
                                text={footerData.company.contact.phone}
                            />
                        </div>
                    </div>

                    <div>
                        <FooterSection title="Company" links={footerData.companyLinks} />
                    </div>

                    <div>
                        <FooterSection title="Category" links={footerData.categoryLinks} />
                    </div>

                    <div>
                        <h3 className="text-lg font-bold leading-tight mb-5">
                            Subscribe Our Newsletter
                        </h3>

                        <div className="flex items-center justify-between py-3 px-4 border border-gray-200 rounded-md mb-6 max-w-md focus-within:border-red-500 transition-colors">
                            <input
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                className="w-full focus:outline-none text-sm"
                                placeholder="Input your email"
                            />
                            <button
                                onClick={handleSendMessage}
                                className="text-black hover:text-red-500 transition-colors"
                                aria-label="Subscribe"
                            >
                                <IoIosSend />
                            </button>
                        </div>

                        <div className="flex items-center gap-2">
                            <SocialLink href="#" icon={FaFacebookF} />
                            <SocialLink href="#" icon={FaXTwitter} />
                            <SocialLink href="#" icon={TbWorld} />
                            <SocialLink href="#" icon={FaInstagram} />
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 py-4">
                    <div className="flex items-center justify-center gap-1">
                        <FaRegCopyright className="text-gray-600" />
                        <p className="text-sm text-gray-600">
                            2025 <span className="text-red-500 font-medium">foodzy</span>, All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const ContactItem = ({ icon: Icon, text }) => (
    <div className="flex items-start gap-2.5">
        <Icon className="text-red-500 mt-0.5 flex-shrink-0" />
        <span className="text-sm text-gray-600 leading-relaxed">{text}</span>
    </div>
);

const FooterSection = ({ title, links }) => (
    <div>
        <h3 className="text-lg font-bold leading-tight mb-5">{title}</h3>
        <ul className="space-y-4">
            {links.map((link, index) => (
                <li key={index}>
                    <Link
                        href="#"
                        className="text-sm text-gray-600 hover:text-red-500 transition-colors leading-relaxed"
                    >
                        {link}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

const SocialLink = ({ href, icon: Icon }) => (
    <Link
        href={href}
        className="flex items-center justify-center w-9 h-9 border border-gray-300 rounded-md hover:border-red-500 hover:text-red-500 transition-all duration-200"
    >
        <Icon />
    </Link>
);

export default Footer;