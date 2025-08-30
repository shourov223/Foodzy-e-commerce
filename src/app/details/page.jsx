import ComonHeader from '@/components/ComonHeader'
import product_image from "../../assets/product_Image.png"
import Image from 'next/image'

const page = () => {
    return (
        <>
            <ComonHeader link={"/"} pageName={"Product"} title={"Product"} />
            <section>
                <div className="container pt-[100px]">
                    <div className='grid grid-cols-2 gap-9'>
                        <div>
                            <div className='bg-[#F7F7F8] border border-[#E9E9E9] rounded-[5px] overflow-hidden flex items-center justify-center'>
                                <Image src={product_image} alt='image' width={469} height={469} />
                            </div>
                            <div className='flex items-center gap-3 pt-[15px]'>
                                <div className='bg-[#f7f7f8] border border-[#E9E9E9] rounded-[5px] overflow-hidden'>
                                    <Image src={product_image} alt='image' width={83} height={83} />
                                </div>
                                <div className='bg-[#f7f7f8] border border-[#E9E9E9] rounded-[5px] overflow-hidden'>
                                    <Image src={product_image} alt='image' width={83} height={83} />
                                </div>
                                <div className='bg-[#f7f7f8] border border-[#E9E9E9] rounded-[5px] overflow-hidden'>
                                    <Image src={product_image} alt='image' width={83} height={83} />
                                </div>
                                <div className='bg-[#f7f7f8] border border-[#E9E9E9] rounded-[5px] overflow-hidden'>
                                    <Image src={product_image} alt='image' width={83} height={83} />
                                </div>
                                <div className='bg-[#f7f7f8] border border-[#E9E9E9] rounded-[5px] overflow-hidden'>
                                    <Image src={product_image} alt='image' width={83} height={83} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2>Seeds Of Change Oraganic Quinoa, Brown</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, iure minus error doloribus saepe natus?</p>
                            <hr />
                            <div className="grid grid-cols-2 gap-y-3 text-gray-700">
                                <span className="font-semibold">Brand</span>
                                <span>: ESTA BETTERU CO</span>

                                <span className="font-semibold">Flavour</span>
                                <span>: Super Saver Pack</span>

                                <span className="font-semibold">Diet Type</span>
                                <span>: Vegetarian</span>

                                <span className="font-semibold">Weight</span>
                                <span>: 200 Grams</span>

                                <span className="font-semibold">Speciality</span>
                                <span>: Gluten Free, Sugar Free</span>

                                <span className="font-semibold">Info</span>
                                <span>: Egg Free, Allergen-Free</span>

                                <span className="font-semibold">Items</span>
                                <span>: 1</span>
                            </div>

                            <div>
                                <big className='text-[#F53E32]'>$120.25</big>
                                <del>$123.25</del>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page
