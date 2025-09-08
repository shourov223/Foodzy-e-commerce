"use client"
import React, { useEffect, useState } from "react";
const { createContext } = require("react");

export const productContext = createContext()

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true)
                const response = await fetch('https://dummyjson.com/products')

                if (!response.ok) {
                    throw new Error('Failed to fetch products')
                }

                const data = await response.json()
                setProducts(data.products || [])

                const uniqueCategories = ["all", ...new Set(data.products.map(item => item.category))]
                setCategories(uniqueCategories)

            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])
    return (
        <productContext.Provider value={{ products, setProducts, error, setError, loading, setLoading, categories, setCategories, selectedCategory, setSelectedCategory }}>
            {children}
        </productContext.Provider>
    )
}
export default ProductProvider