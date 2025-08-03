"use client"
import { useEffect, useState } from "react"
import Product_card from "./Product_card"

const PopularProducts = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true)
                const response = await fetch('https://dummyjson.com/products')
                
                if (!response.ok) {
                    throw new Error('Failed to fetch products')
                }
                
                const data = await response.json()
                setProducts(data.products || [])
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])

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
                    {products.slice(0, 10).map((product) => (
                        <div key={product.id} className="w-full">
                            <Product_card 
                                image={product.thumbnail} 
                                title={product.title} 
                                ratings={product.rating} 
                                price={product.price} 
                                oldPrice={product.discountPercentage} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PopularProducts