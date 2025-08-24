"use client"
import { useContext } from "react"
import Product_card from "./Product_card"
import { productContext } from "@/context/productContext"

const PopularProducts = () => {
    const { error, loading, products } = useContext(productContext);

    if (loading) {
        return (
            <section className="py-8">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center items-center min-h-[200px]">
                        <div className="text-gray-600 text-lg">Loading products...</div>
                    </div>
                </div>
            </section>
        )
    }

    if (error) {
        return (
            <section className="py-8">
                <div className="container">
                    <div className="flex justify-center items-center min-h-[200px]">
                        <div className="text-red-600 text-lg">Error: {error}</div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="py-8 md:py-12">
            <div className="container">
                <h2 className="text-[#253D4E] text-2xl md:text-3xl lg:text-[32px] font-bold leading-tight pb-6 md:pb-8 lg:pb-[43px] text-center md:text-left">
                    Popular Products
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-[25px]">
                    {products.slice(0, 10).map((item) => (
                        <div key={item.id} className="w-full">
                            <Product_card
                                product={item}
                                key={item.id}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PopularProducts