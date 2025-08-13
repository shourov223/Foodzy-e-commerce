import React from 'react'
import offer from "../../assets/offers.svg"
import free from "../../assets/free.svg"
import retur from "../../assets/return.svg"
import wide from "../../assets/wide.svg"
import deal from "../../assets/deal.svg"
import Image from 'next/image'

const Facilities = () => {
    return (
        <section className='pt-10 pb-[114px]'>
            <div className="container">
                <div className='grid grid-cols-5 gap-[1px]'>
                    <Box image={offer} text={'Orders $50 or more'} title={"Best prices & offers"} />
                    <Box image={free} text={'24/7 amazing services'} title={"Free delivery"} />
                    <Box image={deal} text={'When you sign up'} title={"Great daily deal"} />
                    <Box image={wide} text={'Mega Discounts'} title={"Wide assortment"} />
                    <Box image={retur} text={'Within 30 days'} title={"Easy returns"} />
                </div>
            </div>
        </section>
    )
}

const Box = ({ image, title, text }) => {
    return (
        <div className='flex items-center gap-[20px] rounded-[10px] p-[20px] bg-[#F4F6FA]'>
            <div className='min-w-[60px]'>
                <Image src={image} alt='image' />
            </div>
            <div>
                <p className='text-[18px] font-semibold leading-[21px]'>{title}</p>
                <p className='text-[#ADADAD] text-base leading-[21px]'>{text}</p>
            </div>
        </div>
    )
}
export default Facilities
