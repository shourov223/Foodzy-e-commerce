"use client"
import ComonHeader from '@/components/ComonHeader'
import product_image from "../../../assets/product_Image.png"
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'
import { useParams } from 'next/navigation'
import { useContext, useState } from 'react'
import { productContext } from '@/context/productContext'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/features/cartSlice'

const page = () => {
    const { id } = useParams()
    const { products } = useContext(productContext)
    const detaislProduct = products.filter((p) => p.id === Number(id))
    const dispatch = useDispatch()
    const image = detaislProduct.flatMap((item) => item.images)
    console.log(image)

    return (
        <>
            <ComonHeader link={"/"} pageName={"Product"} title={"Product"} />
            <section>
                <div className="container pt-[100px]">
                    {detaislProduct.map((product) => {
                        const { id, thumbnail, title, description, rating, brand, stock, weight, availabilityStatus, warrantyInformation, discountPercentage, price } = product
                        return (
                            <div key={id} className='grid grid-cols-2 gap-9'>
                                <div>
                                    <div className='bg-[#F7F7F8] border border-[#E9E9E9] rounded-[5px] overflow-hidden flex items-center justify-center'>
                                        <Image src={thumbnail} alt='image' width={469} height={469} />
                                    </div>
                                    <div className='flex items-center gap-3 pt-[15px]'>
                                        {
                                            image.map((im, index) => {
                                                return (
                                                    <div key={index} className='bg-[#f7f7f8] border border-[#E9E9E9] rounded-[5px] overflow-hidden'>
                                                        <Image src={im} alt='image' width={83} height={83} />
                                                    </div>
                                                )
                                            })
                                        }
                                        {/* <div className='bg-[#f7f7f8] border border-[#E9E9E9] rounded-[5px] overflow-hidden'>
                                            <Image src={thumbnail} alt='image' width={83} height={83} />
                                        </div>
                                        <div className='bg-[#f7f7f8] border border-[#E9E9E9] rounded-[5px] overflow-hidden'>
                                            <Image src={thumbnail} alt='image' width={83} height={83} />
                                        </div>
                                        <div className='bg-[#f7f7f8] border border-[#E9E9E9] rounded-[5px] overflow-hidden'>
                                            <Image src={thumbnail} alt='image' width={83} height={83} />
                                        </div>
                                        <div className='bg-[#f7f7f8] border border-[#E9E9E9] rounded-[5px] overflow-hidden'>
                                            <Image src={thumbnail} alt='image' width={83} height={83} />
                                        </div> */}
                                    </div>
                                </div>
                                <div>
                                    <h2 className='text-[22px] leading-[33px] tracking-common text-[#2B2B2D] pb-[17px]'>{title}</h2>
                                    <p className='text-[14px] leading-[24px] tracking-common text-[#7A7A7A] pb-[23px]'>{description}</p>
                                    <hr className='text-[#E9E9E9] pb-[24px]' />
                                    <div className='pb-[26px] flex items-center gap-[10px]'>
                                        <FaStar className='text-[#F5885F]' />
                                        <p className='text-[15px] leading-[26px]'>( {rating} Review )</p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-y-3 text-gray-700">
                                        <span className="font-semibold">Brand</span>
                                        <span>: {brand}</span>

                                        <span className="font-semibold">stock</span>
                                        <span>: {stock}</span>

                                        <span className="font-semibold">weight</span>
                                        <span>: {weight}</span>

                                        <span className="font-semibold">availabilityStatus</span>
                                        <span>: {availabilityStatus}</span>

                                        <span className="font-semibold">warrantyInformation</span>
                                        <span>: {warrantyInformation}</span>
                                    </div>

                                    <div className='flex items-center gap-3 pt-[38px]'>
                                        <big className='text-[#F53E32] text-[24px] font-semibold leading-[28px] tracking-common'>${price}</big>
                                        <del className='text-base text-[#7A7A7A] tracking-common'>${discountPercentage}</del>
                                    </div>

                                    <div className='flex items-center gap-[10px] pt-[22px]'>
                                        <span className='text-base font-medium leading-[24px] tracking-common'>Size/Weight :</span>
                                        <div className='flex items-center gap-1'>
                                            <span className='active text-[12px] text-[#777777] border border-[#E9E9E9] tracking-common rounded-[5px] px-[11px] py-[3px]'>50kg</span>
                                            <span className='text-[12px] text-[#777777] border border-[#E9E9E9] tracking-common rounded-[5px] px-[11px] py-[3px]'>80kg</span>
                                            <span className='text-[12px] text-[#777777] border border-[#E9E9E9] tracking-common rounded-[5px] px-[11px] py-[3px]'>120kg</span>
                                            <span className='text-[12px] text-[#777777] border border-[#E9E9E9] tracking-common rounded-[5px] px-[11px] py-[3px]'>200kg</span>
                                        </div>
                                    </div>
                                    <div className='pt-[22px]'>
                                        <button onClick={() => dispatch(addToCart(product))} className='bg-[#F53E32] cursor-pointer rounded-[5px] text-white font-bold text-[14px] leading-[16px] py-3 px-[23px]'>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default page
