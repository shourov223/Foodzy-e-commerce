const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
    item: []
}

const cartSlice = createSlice({
    name: "add to cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.item.find((item) => item.id === action.payload.id)
            if (!existingProduct) {
                state.item.push(action.payload)
            }
        }
    }
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer