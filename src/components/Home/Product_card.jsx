import Image from "next/image"
import { FaOpencart, FaStar } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { addToCart } from "@/features/cartSlice"


const Product_card = ({ image, title, ratings, price, oldPrice }) => {
    const disPatch = useDispatch()

    return (
        <div className="border border-[#ECECEC] rounded-[15px] pb-[29px]">
            <div>
                <Image width={296} height={271} src={image} alt="image" />
            </div>
            <div className="px-[21px]">
                <p className="text-[15px] font-medium leading-6 text-[#2B2B2D] tracking-common pb-[10px]">{title}</p>
                <div className="flex items-center gap-6 pb-6">
                    <FaStar className="text-[#fdc040]" />
                    <p className="text-[#B6B6B6] text-[14px] leading-[24px]">({ratings})</p>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[10px]">
                        <p className="font-bold text-[18px] leading-[24px] text-[#3BB77E]">${price}</p>
                        <del className="font-bold text-[14px] leading-[24px] text-[#ADADAD]">${oldPrice}</del>
                    </div>
                    <button onClick={() => disPatch(addToCart({ image, title, ratings, price }))} className="bg-[#F53E32] py-[13px] px-[20px] rounded-[4px] text-white text-[14px] font-bold leading-[24px] flex items-center gap-1 cursor-pointer">
                        <FaOpencart className="text-white" />
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product_card
