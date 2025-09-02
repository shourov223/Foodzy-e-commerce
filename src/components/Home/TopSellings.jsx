"use client"
import { productContext } from '@/context/productContext'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'
import { FaStar } from 'react-icons/fa'

const TopSellings = () => {
    const { products } = useContext(productContext)

    return (
        <section className="py-8 lg:py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-xl md:text-2xl lg:text-[24px] font-bold text-[#253D4E] leading-tight pb-6 lg:pb-10">
                    Top Selling
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
                    {products?.slice(0, 12).map((product) => (
                        <TopSellingCard
                            id = {product.id}
                            key={product.id}
                            image={product.thumbnail}
                            price={product.price}
                            rating={product.rating}
                            title={product.title}
                            discountPercentage={product.discountPercentage}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

const TopSellingCard = ({ image, title, rating, price, discountPercentage, id }) => {

    const originalPrice = discountPercentage
        ? (price / (1 - discountPercentage / 100)).toFixed(2)
        : null
    console.log(id)

    return (
        <Link href={`/details/${id}`} className="w-full max-w-sm mx-auto">
            <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[110px_1fr] items-center gap-3 p-3 hover:shadow-md transition-shadow rounded-lg">

                <div className="rounded-[10px] overflow-hidden bg-[#f7f7f7] aspect-square relative">
                    <Image
                        fill
                        src={image}
                        alt={title || 'Product image'}
                        className="object-cover"
                        sizes="(max-width: 640px) 100px, 110px"
                    />
                </div>

                <div className="min-w-0 flex-1">

                    <h3 className="text-[#253D4E] text-sm lg:text-base leading-tight pb-1 line-clamp-2 font-medium">
                        {title}
                    </h3>

                    <div className="flex items-center gap-2 mb-2">
                        <FaStar className="text-[#fdc040] text-sm flex-shrink-0" />
                        <span className="text-[#B6B6B6] text-xs lg:text-sm">
                            ({rating})
                        </span>
                    </div>

                    <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[#3BB77E] text-base lg:text-lg font-bold">
                            ${price}
                        </span>
                        {originalPrice && (
                            <del className="text-[#ADADAD] text-xs lg:text-sm font-bold">
                                ${originalPrice}
                            </del>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default TopSellings