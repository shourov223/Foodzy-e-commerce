import onion from "../../assets/onion.jpg"
import drink from "../../assets/drink.jpg"
import vegitable from "../../assets/vegitable.png"
import Image from "next/image"

const SuggestedProducts = () => {
    const productData = [
        {
            id: 1,
            image: onion,
            title: "Everyday Fresh & Clean with Our Products",
            alt: "Fresh onion products"
        },
        {
            id: 2,
            image: drink,
            title: "Make your Breakfast Healthy and Easy",
            alt: "Healthy breakfast drinks"
        },
        {
            id: 3,
            image: vegitable,
            title: "The best Organic Products Online",
            alt: "Fresh organic vegetables"
        }
    ]

    const ProductCard = ({ image, title, alt }) => (
        <div className="relative pt-12 md:pt-16 lg:pt-20 pb-12 md:pb-16 lg:pb-[73px] px-6 md:px-8 lg:px-[50px] rounded-[10px] overflow-hidden group hover:shadow-lg transition-shadow duration-300">
            <div className="absolute w-full h-full z-[-1] top-0 left-0">
                <Image
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    src={image}
                    alt={alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300" />
            </div>

            <div className="relative z-10">
                <h4 className="text-[#253D4E] text-lg md:text-xl lg:text-[24px] font-bold leading-tight max-w-[250px] pb-6 md:pb-7 lg:pb-[28px]">
                    {title}
                </h4>
                <button className="text-xs md:text-sm font-bold leading-relaxed text-white bg-[#F53E32] hover:bg-[#e53429] rounded-[4px] cursor-pointer py-2 md:py-2.5 px-4 md:px-5 transition-colors duration-200 shadow-md hover:shadow-lg">
                    Shop Now
                </button>
            </div>
        </div>
    )

    return (
        <section className="pt-12 md:pt-16 lg:pt-[75px] pb-8 md:pb-12">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-[23px]">
                    {productData.map((product) => (
                        <ProductCard
                            key={product.id}
                            image={product.image}
                            title={product.title}
                            alt={product.alt}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SuggestedProducts