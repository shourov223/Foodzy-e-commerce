"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'
import { IoTrashBinSharp } from 'react-icons/io5'
import { useSelector } from 'react-redux'

const Page = () => {
  const { item } = useSelector((state) => state.cart)

  return (
    <section>
      <div className='bg-[#F53E32] py-6'>
        <div className="container">
          <div className='flex items-center justify-between'>
            <p className='text-[19px] text-white leading-[19px] font-bold tracking-common'>Cart</p>
            <div className='flex items-center gap-1'>
              <Link className='text-white text-[14px] font-medium leading-[18.2px] tracking-common' href={"/"} >Home</Link><span className='text-white font-bold'>/</span><p className='text-white text-[14px] font-medium leading-[18.2px] tracking-common'>Cart</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className='mt-[100px] bg-[#E9E9E9] grid grid-cols-[520px_201px_283px_201px_90px] items-center justify-between p-[15px] rounded-t-[5px]'>
          <p className='text-[#444444] text-[15px] font-semibold leading-[15px]'>Product</p>
          <p className='text-[#444444] text-[15px] font-semibold leading-[15px]'>price</p>
          <p className='text-[#444444] text-[15px] font-semibold leading-[15px]'>Quantity</p>
          <p className='text-[#444444] text-[15px] font-semibold leading-[15px]'>Total</p>
          <p className='text-[#444444] text-[15px] font-semibold leading-[15px]'>Action</p>
        </div>
        <div>
          {item.map((i) => {
            return <ProductRow image={i.image} price={i.price} title={i.title} key={i.id} />
          })}
        </div>
      </div>
    </section>
  )
}

const ProductRow = ({ image, title, price }) => {
  return (
    <div className='grid grid-cols-[520px_201px_283px_201px_90px] justify-between items-center px-[15px] py-[25px] bg-[#F7F7F8]'>
      <div className='flex items-center gap-[20px] max-w-[520px]'>
        <div className='size-[60px] rounded-[5px] border border-[#E9E9E9] flex items-center justify-center'>
          <Image width={60} height={60} src={image} alt='image' />
        </div>
        <p className='text-[14px] leading-[21px] text-[#444444]'>{title}</p>
      </div>
      <p className='text-[15px] leading-[22.5px] text-[#555555]'>${price}</p>
      <div className='flex items-center justify-between gap-2 bg-white w-[80px] px-2 h-[30px] rounded-[5px] border border-[#E9E9E9]'>
        <button className='text-base leading-[24px] text-black'>+</button>
        <div>
          1
        </div>
        <button className='text-base leading-[24px] text-black'>-</button>
      </div>
      <p>Total price</p>
      <button className='cursor-pointer'>
        <IoTrashBinSharp />
      </button>
    </div>
  )
}

export default Page
