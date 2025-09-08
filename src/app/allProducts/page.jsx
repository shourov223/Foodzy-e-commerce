"use client"
import ComonHeader from '@/components/ComonHeader'
import ProductCard from '@/components/Home/Product_card'
import { productContext } from '@/context/productContext'
import { useContext } from 'react'

const Page = () => {
    const { products } = useContext(productContext)
    return (
        <section>
            <ComonHeader link={'/'} pageName={"Product"} title={"All Product"} />
            <div className="container">
                <div className='grid grid-cols-4 gap-[30px] pt-10'>
                    {products.map((item, index) => {
                        return <ProductCard product={item} key={index} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default Page
