import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '../models/product'

export interface ProductState {
    products: IProduct[]
}

const initialState: ProductState = {
    products: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IProduct>) => {
            const item = state.products.filter(item => item.id === action.payload.id)
            if (item) {
                item[action.payload.id].quantity++
            } else {
                state.products.push(action.payload)
            }
        },

    },
})

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions

export default cartSlice.reducer