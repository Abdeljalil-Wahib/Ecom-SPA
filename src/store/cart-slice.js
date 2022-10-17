import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		products: [],
		},
	reducers: {
		addToCart(state, action) {
			state.products = [...state.products
			.filter(item => item.id !== action.payload.id),
			action.payload];
		}
	}
})

export const cartActions = cartSlice.actions

export default cartSlice;