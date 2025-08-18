import React from 'react';
import Image from 'next/image';
import offer from '../../assets/offers.svg';
import free from '../../assets/free.svg';
import retur from '../../assets/return.svg';
import wide from '../../assets/wide.svg';
import deal from '../../assets/deal.svg';

const facilitiesData = [
    {
        id: 1,
        image: offer,
        title: 'Best prices & offers',
        text: 'Orders $50 or more'
    },
    {
        id: 2,
        image: free,
        title: 'Free delivery',
        text: '24/7 amazing services'
    },
    {
        id: 3,
        image: deal,
        title: 'Great daily deal',
        text: 'When you sign up'
    },
    {
        id: 4,
        image: wide,
        title: 'Wide assortment',
        text: 'Mega Discounts'
    },
    {
        id: 5,
        image: retur,
        title: 'Easy returns',
        text: 'Within 30 days'
    }
];

const Facilities = () => {
    return (
        <section className="pt-10 pb-20 lg:pb-28">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-1">
                    {facilitiesData.map((facility) => (
                        <FacilityBox
                            key={facility.id}
                            image={facility.image}
                            title={facility.title}
                            text={facility.text}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const FacilityBox = ({ image, title, text }) => {
    return (
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 rounded-lg p-5 bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
            <div className="flex-shrink-0 w-12 h-12 sm:w-15 sm:h-15">
                <Image
                    src={image}
                    alt={title}
                    width={60}
                    height={60}
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="text-center sm:text-left">
                <h3 className="text-base sm:text-lg font-semibold leading-tight text-gray-900 mb-1">
                    {title}
                </h3>
                <p className="text-sm sm:text-base text-gray-500 leading-tight">
                    {text}
                </p>
            </div>
        </div>
    );
};

export default Facilities;