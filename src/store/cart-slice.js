import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		products: [],
		},
	reducers: {
		addToCart(state, payload) {
			state.products = payload
		}
	}
})

export const cartActions = cartSlice.actions

export default cartSlice;