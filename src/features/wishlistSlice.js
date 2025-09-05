const { createSlice } = require("@reduxjs/toolkit");

const getInitialWishlist = () => {
    if (typeof window !== "undefined") {
        try {
            const saved = localStorage.getItem("wishlistItem");
            return saved ? JSON.parse(saved) : [];
        } catch (err) {
            return [];
        }
    }
    return [];
};
const initialState = getInitialWishlist()
const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            const exists = state.find(item => item.id === action.payload.id)
            if (!exists) {
                state.push(action.payload)
                if (typeof window !== "undefined") {
                    localStorage.setItem("wishlistItem", JSON.stringify(state));
                }
            }
        },
        removeToWishlist: (state, action) => {
            const updateWishlist = state.filter(item => item.id === action.payload.id)
            if (typeof window !== "undefined") {
                localStorage.setItem("cartItem", JSON.stringify(updateWishlist));
            }
            return updateWishlist;
        }
    }
})

export const { addToWishlist, removeToWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer