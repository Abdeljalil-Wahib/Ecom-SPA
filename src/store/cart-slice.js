import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		products: [],
		totalQuantity: 0,
		totalPrice: 0
		},
	reducers: {
		addToCart(state, action) {
			let addedProduct = {
				...action.payload,
				quantity: action.payload.quantity ? action.payload.quantity + 1 : 1
			}
			state.products = [...state.products
			.filter(item => {
				if (item.id === action.payload.id) {
					addedProduct = {
						...action.payload,
						quantity: item.quantity ? item.quantity + 1 : 1
					}
				}
				return (item.id !== action.payload.id)}),
			addedProduct];
			state.totalQuantity++;
		},
		removeOneProd(state, action) {
			const productExists = state.products.find(product => product.id === action.payload.id)
			if (productExists.quantity > 1) {
				productExists.quantity--;
			}
			else {
				state.products = state.products.filter(product => product.id !== action.payload.id)
			}
			state.totalQuantity--;
		},
		removeProd(state, action) {
			state.products = state.products.filter(product => {
				if (product.id === action.payload.id) {
					state.totalQuantity -= product.quantity
				}
				return product.id !== action.payload.id})
			console.log(state.totalQuantity)
		}
	}
})

export const cartActions = cartSlice.actions

export default cartSlice;