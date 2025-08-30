"use client"

import { productContext } from "@/context/productContext"
import { useParams } from "next/navigation"
import { useContext } from "react"




const Details = () => {
    const { id } = useParams()
    const { products } = useContext(productContext)
    // console.log(products)
    console.log(typeof id)

    const detailsProduct = products.find((p) => {
        return p.id == Number(id)
    })
    console.log(detailsProduct)
    return (
        <div className="h-[100px] bg-red-400">
            {id}
            <h1>Hello world</h1>
        </div>
    )
}

export default Details
