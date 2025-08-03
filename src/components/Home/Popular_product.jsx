"use client"
import { useEffect, useState } from "react"
import Product_card from "./Product_card"


const Popular_product = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then((data) => {
                setProduct(data.products)
                setLoading(false)
            })
    }, [])
    if (loading) {
        return <div>Loading.......</div>
    }
    return (
        <section>
            <div className="container">
                <h2 className="text-[#253D4E] text-[32px] font-bold leading-[38.4px] pb-[43px]">Popular Products</h2>
                <div className="grid grid-cols-5 gap-[25px] items-center">
                    {
                        product.slice(0,10).map((item) => {
                            return <Product_card key={item.id} image={item.thumbnail} title={item.title} ratings={item.rating} price={item.price} oldPrice={item.discountPercentage} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Popular_product
