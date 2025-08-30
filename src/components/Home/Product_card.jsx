import Image from "next/image";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "@/features/cartSlice";
import Link from "next/link";

const ProductCard = ({ product }) => {
    const { thumbnail, title, ratings, price, oldPrice, id } = product;
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <div className="group border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="relative aspect-square overflow-hidden">
                <Link href={`/details/${id}`}>
                    <Image
                        src={thumbnail}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                </Link>
            </div>
            <div className="p-4 sm:p-5 lg:p-6">
                <h3 className="text-sm sm:text-base font-medium text-gray-800 leading-tight mb-3 line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem]">
                    {title}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                        <FaStar className="text-amber-400 text-sm" />
                    </div>
                    <span className="text-gray-500 text-xs sm:text-sm">
                        ({ratings})
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-lg sm:text-xl text-emerald-500">
                            ${price}
                        </span>
                        {oldPrice && (
                            <del className="font-medium text-sm text-gray-400">
                                ${oldPrice}
                            </del>
                        )}
                    </div>
                    <button
                        onClick={handleAddToCart}
                        className="bg-red-500 hover:bg-red-600 active:bg-red-700 px-3 py-2 sm:px-4 sm:py-2.5 rounded-md text-white text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                        aria-label={`Add ${title} to cart`}
                    >
                        <FaShoppingCart className="text-xs sm:text-sm" />
                        <span className="hidden xs:inline">Add</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;