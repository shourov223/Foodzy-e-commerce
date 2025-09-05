"use client"
import { addToCart } from "@/features/cartSlice"
import Image from "next/image"
import Link from "next/link"
import { FaShoppingCart, FaStar } from "react-icons/fa"
import { IoCloseSharp } from "react-icons/io5"
import { useDispatch, useSelector } from "react-redux"
import { useCallback, memo } from "react"
import { removeToWishlist } from "@/features/wishlistSlice"

const Page = () => {
    const wishlist = useSelector((state) => state.wishlist)
    
    if (!wishlist?.length) {
        return (
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            Your wishlist is empty
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Start adding items you love to your wishlist
                        </p>
                        <Link 
                            href="/" 
                            className="inline-block bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                        >
                            Go to Homepage
                        </Link>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="py-6 lg:py-8">
            <div className="container mx-auto px-4">
                <div className="mb-6">
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
                        My Wishlist ({wishlist.length} {wishlist.length === 1 ? 'item' : 'items'})
                    </h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                    {wishlist.map((item) => (
                        <WishlistCard key={item.id} productItem={item} />
                    ))}
                </div>
            </div>
        </section>
    )
}

const WishlistCard = memo(({ productItem }) => {
    const { thumbnail, title, rating, price, oldPrice, id, stock = 0 } = productItem
    const dispatch = useDispatch()
    
    const handleAddToCart = useCallback(() => {
        if (stock > 0) {
            dispatch(addToCart(productItem))
        }
    }, [dispatch, productItem, stock])
    
    const handleRemoveFromWishlist = useCallback(() => {
        dispatch(removeToWishlist(id))
    }, [dispatch, id])
    
    const discountPercentage = oldPrice ? Math.round(((oldPrice - price) / oldPrice) * 100) : 0
    const isOutOfStock = stock <= 0

    return (
        <div className="relative group border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            {discountPercentage > 0 && (
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full">
                    -{discountPercentage}%
                </div>
            )}
            {isOutOfStock && (
                <div className="absolute inset-0 z-10 bg-gray-900/50 flex items-center justify-center">
                    <span className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold">
                        Out of Stock
                    </span>
                </div>
            )}
            <button 
                onClick={handleRemoveFromWishlist}
                className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-white/90 hover:bg-white border border-red-200 hover:border-red-300 flex items-center justify-center transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1"
                aria-label={`Remove ${title} from wishlist`}
            >
                <IoCloseSharp className="text-red-500 text-sm" />
            </button>
            <div className="relative aspect-square overflow-hidden bg-gray-50">
                <Link href={`/details/${id}`} aria-label={`View details for ${title}`}>
                    <Image
                        src={thumbnail}
                        alt={title}
                        fill
                        className={`object-cover transition-transform duration-300 ${
                            isOutOfStock ? 'grayscale' : 'group-hover:scale-105'
                        }`}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                        loading="lazy"
                    />
                </Link>
            </div>
            <div className="p-4">
                <Link href={`/details/${id}`}>
                    <h3 className="text-sm font-medium text-gray-900 leading-tight mb-2 line-clamp-2 min-h-[2.5rem] hover:text-red-600 transition-colors">
                        {title}
                    </h3>
                </Link>
                <div className="flex items-center gap-1 mb-3">
                    <FaStar className="text-amber-400 text-sm" />
                    <span className="text-gray-600 text-sm">
                        {rating ? `${rating}/5` : 'No rating'}
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-lg text-emerald-600">
                                ${price}
                            </span>
                            {oldPrice && (
                                <del className="font-medium text-sm text-gray-400">
                                    ${oldPrice}
                                </del>
                            )}
                        </div>
                        {stock > 0 && stock <= 5 && (
                            <span className="text-xs text-orange-600 font-medium">
                                Only {stock} left
                            </span>
                        )}
                    </div>
                    
                    <button
                        onClick={handleAddToCart}
                        disabled={isOutOfStock}
                        className={`px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-1.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                            isOutOfStock 
                                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                                : 'bg-red-500 hover:bg-red-600 active:bg-red-700 text-white hover:scale-105 focus:ring-red-500'
                        }`}
                        aria-label={`Add ${title} to cart`}
                    >
                        <FaShoppingCart className="text-sm" />
                        <span className="hidden sm:inline">
                            {isOutOfStock ? 'Unavailable' : 'Add'}
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
})

WishlistCard.displayName = 'WishlistCard'

export default Page