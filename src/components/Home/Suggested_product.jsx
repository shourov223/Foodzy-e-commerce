import onion from "../../assets/onion.jpg"
import drink from "../../assets/drink.jpg"
import vegitable from "../../assets/vegitable.png"
import Image from "next/image"

const Suggested_product = () => {
    return (
        <section className="pt-[75px]">
            <div className="container">
                <div className="grid grid-cols-3 gap-[23px]">
                    <div className="relative pt-20 pb-[73px] px-[50px] rounded-[10px] overflow-hidden">
                        <div className="absolute w-full h-full z-[-1] top-0 left-0">
                            <Image className="w-full h-full object-contain" src={onion} alt="image" />
                        </div>
                        <h4 className="text-[#253D4E] text-[24px] font-bold leading-[28.8px] max-w-[250px] pb-[28px]">Everyday Fresh & Clean with Our Products</h4>
                        <button className="text-[12px] font-bold leading-[15.6px] text-white bg-[#F53E32] rounded-[4px] cursor-pointer py-2 px-4">Shop Now</button>
                    </div>

                    <div className="relative pt-20 pb-[73px] px-[50px]">
                        <div className="absolute w-full h-full z-[-1] top-0 left-0">
                            <Image className="w-full h-full object-contain" src={drink} alt="image" />
                        </div>
                        <h4 className="text-[#253D4E] text-[24px] font-bold leading-[28.8px] max-w-[250px] pb-[28px]">Make your Breakfast Healthy and Easy</h4>
                        <button className="text-[12px] font-bold leading-[15.6px] text-white bg-[#F53E32] rounded-[4px] cursor-pointer py-2 px-4">Shop Now</button>
                    </div>

                    <div className="relative pt-20 pb-[73px] px-[50px]">
                        <div className="absolute w-full h-full z-[-1] top-0 left-0">
                            <Image className="w-full h-full object-contain" src={vegitable} alt="image" />
                        </div>
                        <h4 className="text-[#253D4E] text-[24px] font-bold leading-[28.8px] max-w-[250px] pb-[28px]">The best Organic Products Online</h4>
                        <button className="text-[12px] font-bold leading-[15.6px] text-white bg-[#F53E32] rounded-[4px] cursor-pointer py-2 px-4">Shop Now</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Suggested_product
