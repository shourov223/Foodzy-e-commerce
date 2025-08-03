"use client"
import { productContext } from '@/context/productContext'
import Image from 'next/image'
import React, { useContext } from 'react'
import { FaOpencart, FaStar } from 'react-icons/fa'

const Deals = () => {
    const { products } = useContext(productContext)
    
    return (
        <section className="py-8 lg:py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-[#253D4E] text-2xl md:text-3xl lg:text-[32px] font-bold leading-tight pb-6 lg:pb-10">
                    Deals Of The Day
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                    {products?.slice(0, 4).map((product) => (
                        <DealsCard 
                            key={product.id} 
                            image={product.thumbnail} 
                            discountPercentage={product.discountPercentage} 
                            price={product.price} 
                            rating={product.rating} 
                            title={product.title} 
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

const DealsCard = ({ image, title, price, rating, discountPercentage }) => {
    const originalPrice = discountPercentage 
        ? (price / (1 - discountPercentage / 100)).toFixed(2)
        : null

    return (
        <div className="w-full max-w-sm mx-auto rounded-[15px] overflow-hidden">
            
            <div className="bg-[#f7f7f7] aspect-square relative">
                <Image 
                    fill
                    src={image} 
                    alt={title || 'Product image'}
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
            </div>
            
            <div className="py-4 px-5 lg:py-6 lg:px-[30px] shadow-xl bg-white rounded-[10px] -mt-16 lg:-mt-[90px] mx-4 relative z-10">
                {/* Title */}
                <h3 className="text-[#253D4E] text-sm lg:text-base leading-tight font-bold pb-2 lg:pb-[10px] line-clamp-2">
                    {title}
                </h3>
                
                <div className="flex items-center gap-2 mb-3">
                    <FaStar className="text-[#fdc040] text-sm" />
                    <span className="text-xs lg:text-sm text-[#B6B6B6]">
                        ({rating})
                    </span>
                </div>
                
                <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 lg:gap-[10px]">
                        <span className="text-base lg:text-lg font-bold text-[#3BB77E]">
                            ${price}
                        </span>
                        {originalPrice && (
                            <del className="text-[#ADADAD] text-xs lg:text-sm font-bold">
                                ${originalPrice}
                            </del>
                        )}
                    </div>
                    
                    <button 
                        className="flex items-center gap-1 text-white font-bold py-2 px-3 lg:py-3 lg:px-5 rounded-[5px] bg-[#F53E32] hover:bg-[#e53528] transition-colors text-sm lg:text-base"
                        aria-label={`Add ${title} to cart`}
                    >
                        <FaOpencart className="text-white text-sm" />
                        <span className="hidden sm:inline">Add</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Deals