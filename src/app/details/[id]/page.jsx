"use client"
import ComonHeader from '@/components/ComonHeader'
import Image from 'next/image'
import { FaCheck, FaRegHeart, FaStar } from 'react-icons/fa'
import { useParams } from 'next/navigation'
import { useContext, useState } from 'react'
import { productContext } from '@/context/productContext'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/features/cartSlice'
import PopularProducts from '@/components/Home/Popular_product'
import { addToWishlist } from '@/features/wishlistSlice'
import { toast, ToastContainer } from 'react-toastify'

const ProductDetailsPage = () => {
    const { id } = useParams()
    const { products } = useContext(productContext)
    const dispatch = useDispatch()
    const [wish, setWish] = useState(false)
    const [selectedImageIndex, setSelectedImageIndex] = useState(0)
    const [btnindx, setBtnindx] = useState(0)

    const product = products.find((p) => p.id === Number(id))

    if (!product) {
        return (
            <>
                <ComonHeader link="/" pageName="Product" title="Product" />
                <div className="container pt-[100px] text-center">
                    <p className="text-lg text-gray-600">Product not found</p>
                </div>
            </>
        )
    }

    const {
        id: productId,
        thumbnail,
        images = [],
        title,
        description,
        rating,
        brand,
        stock,
        weight,
        availabilityStatus,
        warrantyInformation,
        discountPercentage,
        price
    } = product

    const allImages = [thumbnail, ...images].filter(Boolean)
    const currentImage = allImages[selectedImageIndex] || thumbnail

    const handleAddToCart = () => {
        dispatch(addToCart(product));
        toast.success("Product added to your cart")
    }

    const handelWishStyle = () => {
        setWish(true)
    }

    return (
        <>
            <ComonHeader link="/" pageName="Product" title="Product" />
            <section>
                <div className="container px-4 pt-[60px] md:pt-[100px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">

                        <div className="space-y-4">

                            <div className="bg-[#F7F7F8] border border-[#E9E9E9] rounded-lg overflow-hidden aspect-square flex items-center justify-center">
                                <Image
                                    src={currentImage}
                                    alt={title}
                                    width={500}
                                    height={500}
                                    className="object-contain w-full h-full max-w-[400px] max-h-[400px]"
                                    priority
                                />
                            </div>

                            {allImages.length > 1 && (
                                <div className="flex gap-3 overflow-x-auto pb-2">
                                    {allImages.map((image, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedImageIndex(index)}
                                            className={`flex-shrink-0 bg-[#f7f7f8] border rounded-lg overflow-hidden transition-all duration-200 ${selectedImageIndex === index
                                                ? 'border-[#F53E32] ring-2 ring-[#F53E32]/20'
                                                : 'border-[#E9E9E9] hover:border-gray-300'
                                                }`}
                                        >
                                            <Image
                                                src={image}
                                                alt={`${title} view ${index + 1}`}
                                                width={80}
                                                height={80}
                                                className="object-contain w-20 h-20"
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h1 className="text-xl md:text-2xl lg:text-3xl font-medium leading-tight text-[#2B2B2D] mb-4">
                                    {title}
                                </h1>
                                <p className="text-sm md:text-base leading-relaxed text-[#7A7A7A] mb-6">
                                    {description}
                                </p>
                                <hr className="border-[#E9E9E9] mb-6" />
                            </div>

                            <div className="flex items-center gap-2 mb-6">
                                <FaStar className="text-[#F5885F] w-4 h-4" />
                                <span className="text-sm md:text-base text-gray-700">
                                    ({rating} Rating)
                                </span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm md:text-base">
                                <div className="flex justify-between sm:block">
                                    <span className="font-semibold text-gray-800">Brand</span>
                                    <span className="sm:block text-gray-600">: {brand}</span>
                                </div>

                                <div className="flex justify-between sm:block">
                                    <span className="font-semibold text-gray-800">Stock</span>
                                    <span className="sm:block text-gray-600">: {stock}</span>
                                </div>

                                <div className="flex justify-between sm:block">
                                    <span className="font-semibold text-gray-800">Weight</span>
                                    <span className="sm:block text-gray-600">: {weight}kg</span>
                                </div>

                                <div className="flex justify-between sm:block">
                                    <span className="font-semibold text-gray-800">Availability</span>
                                    <span className="sm:block text-gray-600">: {availabilityStatus}</span>
                                </div>

                                <div className="flex justify-between sm:block sm:col-span-2">
                                    <span className="font-semibold text-gray-800">Warranty</span>
                                    <span className="sm:block text-gray-600 sm:max-w-md">: {warrantyInformation}</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 py-4">
                                <span className="text-[#F53E32] text-2xl md:text-3xl font-bold">
                                    ${price}
                                </span>
                                {discountPercentage > 0 && (
                                    <span className="text-base md:text-lg text-[#7A7A7A] line-through">
                                        ${(price / (1 - discountPercentage / 100)).toFixed(2)}
                                    </span>
                                )}
                            </div>

                            <div className="space-y-3">
                                <span className="text-base font-medium text-gray-800">
                                    Size/Weight Options:
                                </span>
                                <div className="flex flex-wrap gap-2 pt-3">
                                    {['50kg', '80kg', '120kg', '200kg'].map((size, index) => (
                                        <button
                                            onClick={() => setBtnindx(index)}
                                            key={index}
                                            className={`text-xs md:text-sm px-3 py-2 border border-[#E9E9E9] rounded-md transition-all duration-200 cursor-pointer ${index === btnindx
                                                ? 'bg-[#F53E32] text-white border-[#F53E32]'
                                                : 'text-[#777777] bg-white'
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-4 flex items-center gap-[15px]">
                                <button
                                    onClick={handleAddToCart}
                                    className="w-full sm:w-auto bg-[#F53E32] hover:bg-[#E02D21] active:bg-[#D12B1E] transition-colors duration-200 text-white font-bold text-sm md:text-base py-3 px-6 md:px-8 rounded-lg shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                                </button>
                                <button
                                    onClick={() => {
                                        dispatch(addToWishlist(product))
                                        handelWishStyle()
                                    }} className={`p-3 rounded-[5px] border ${wish ? 'border-red-500' : "border-black"} flex items-center justify-center cursor-pointer`}>
                                    {wish ? <FaCheck className='border-red-500 text-red-500' /> : <FaRegHeart className={'text-black'} />}
                                </button>
                            </div>
                        </div>
                    </div>
                    <PopularProducts />
                </div>
                <ToastContainer />
            </section>
        </>
    )
}

export default ProductDetailsPage