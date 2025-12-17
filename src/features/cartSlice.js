import { createSlice } from "@reduxjs/toolkit";

const getInitialCart = () => {
    if (typeof window !== "undefined") {
        try {
            const saved = localStorage.getItem("cartItem");
            return saved ? JSON.parse(saved) : [];
        } catch (err) {
            return [];
        }
    }
    return [];
};

const initialState = getInitialCart();

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.find((item) => item.id === action.payload.id);

            if (!existingProduct) {
                state.push(action.payload);
                if (typeof window !== "undefined") {
                    localStorage.setItem("cartItem", JSON.stringify(state));
                }
            }
        },
        removeFromCart: (state, action) => {
            const updatedCart = state.filter((item) => item.id !== action.payload);
            if (typeof window !== "undefined") {
                localStorage.setItem("cartItem", JSON.stringify(updatedCart));
            }
            return updatedCart;
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.find(item => item.id === id);
            if (item) {
                item.quantity = quantity;
            }
        }
    },
});
export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
