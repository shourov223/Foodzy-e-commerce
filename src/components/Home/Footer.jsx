import Image from "next/image"
import Mainlogo from "../../assets/mainLogo.svg"

const Footer = () => {
    return (
        <footer className="pt-[101px] bg-[#F7F7F8]">
            <div className="container">
                <div>
                    <div className="flex items-center gap-[10px]">
                        <Image src={Mainlogo} alt="logo" />
                        <div className="flex flex-col items-start">
                            <p className="text-black font-bold text-[18px]">Foodzy</p>
                            <p className="text-[#818181] text-[10px] font-semibold"> A Treasure of Tastes</p>
                        </div>
                    </div>
                    <p className="text-[#7A7A7A] text-[14px] leading-[24.5px] tracking-common pb-[30px]">FoodTrove is the biggest market of grocery products. Get your daily needs from our store.</p>
                    
                </div>
                <div></div>
            </div>
        </footer>
    )
}

export default Footer
