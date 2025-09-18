"use client"
import ComonHeader from '@/components/ComonHeader'
import ProductCard from '@/components/Home/Product_card'
import { productContext } from '@/context/productContext'
import { Poppins } from 'next/font/google'
import { useContext, useState } from 'react'

const poppins = Poppins({
    subsets: ["latin"],
    weight: "400"
});

const Page = () => {
    const { products, categories, selectedCategory, setSelectedCategory } = useContext(productContext)
    const [isCategoryOpen, setIsCategoryOpen] = useState(false)
    
    const filteredProducts = selectedCategory === "all" 
        ? products 
        : products.filter(p => p.category === selectedCategory)

    const handleCategorySelect = (category) => {
        setSelectedCategory(category)
        setIsCategoryOpen(false)
    }

    return (
        <section className="min-h-screen">
            <ComonHeader 
                link={'/'} 
                pageName={"Product"} 
                title={"All Product"} 
            />
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className='flex flex-col lg:grid lg:grid-cols-[250px_1fr] gap-6 lg:gap-8 py-6 lg:py-10'>
                    
                    <div className='hidden lg:block'>
                        <div className='sticky top-6 p-6 rounded-lg bg-gradient-to-b from-gray-100 to-gray-200 shadow-sm border'>
                            <h2 className={`${poppins.className} text-lg text-gray-800 font-semibold pb-4 border-b border-gray-300`}>
                                Product Categories
                            </h2>
                            <ul className='flex flex-col gap-2 pt-4'>
                                {categories.map((cat, index) => (
                                    <li 
                                        key={index} 
                                        className={`${poppins.className} px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-all duration-200 ${
                                            selectedCategory === cat 
                                                ? 'bg-blue-600 text-white shadow-sm' 
                                                : 'text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                                        }`}
                                        onClick={() => handleCategorySelect(cat)}
                                    >
                                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className='lg:hidden relative'>
                        <button
                            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                            className={`${poppins.className} w-full flex justify-between items-center p-4 bg-gray-100 rounded-lg text-gray-800 font-medium border`}
                        >
                            <span>
                                Category: {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
                            </span>
                            <svg 
                                className={`w-5 h-5 transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        
                        {isCategoryOpen && (
                            <div className='absolute top-full left-0 right-0 z-10 mt-2 bg-white border rounded-lg shadow-lg'>
                                <ul className='py-2'>
                                    {categories.map((cat, index) => (
                                        <li 
                                            key={index}
                                            className={`${poppins.className} px-4 py-3 cursor-pointer transition-colors ${
                                                selectedCategory === cat 
                                                    ? 'bg-blue-50 text-blue-600 font-semibold' 
                                                    : 'text-gray-700 hover:bg-gray-50'
                                            }`}
                                            onClick={() => handleCategorySelect(cat)}
                                        >
                                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className='flex-1'>
                        <div className={`${poppins.className} mb-6 text-gray-600`}>
                            <p>Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}</p>
                        </div>

                        {filteredProducts.length > 0 ? (
                            <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6'>
                                {filteredProducts.map((product, index) => (
                                    <div key={product.id || index} className="w-full">
                                        <ProductCard product={product} />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className='flex flex-col items-center justify-center py-16 text-center'>
                                <div className='w-16 h-16 mb-4 bg-gray-200 rounded-full flex items-center justify-center'>
                                    <svg className='w-8 h-8 text-gray-400' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                    </svg>
                                </div>
                                <h3 className={`${poppins.className} text-lg font-medium text-gray-900 mb-2`}>
                                    No products found
                                </h3>
                                <p className={`${poppins.className} text-gray-500 max-w-sm`}>
                                    We couldn't find any products in this category. Try selecting a different category.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {isCategoryOpen && (
                <div 
                    className='lg:hidden fixed inset-0 bg-black bg-opacity-50 z-5'
                    onClick={() => setIsCategoryOpen(false)}
                />
            )}
        </section>
    )
}

export default Page