"use client"
import React, { useEffect, useState } from "react";
const { createContext } = require("react");

export const productContext = createContext()

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([])
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
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])
    return (
        <productContext.Provider value={{ products, setProducts, error, setError, loading, setLoading }}>
            {children}
        </productContext.Provider>
    )
}
export default ProductProvider