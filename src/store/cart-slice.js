import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    totalQuantity: 0,
  },
  reducers: {
    addProduct(state, action) {
      let addedProduct = {
        ...action.payload,
        quantity: action.payload.quantity ? action.payload.quantity + 1 : 1
      }

      let qty = 1;
      state.products = [
        ...state.products.filter((item) => {
          if (item.id === action.payload.id) {
            qty = item.quantity + 1
          }
          return (item.id !== action.payload.id)
        }), {...addedProduct, quantity: qty},
      ];
      state.totalQuantity += 1
    },

    decreaseProductQty(state, action) {
      const productFound = state.products.find(product => product.id === action.payload.id)

      if(productFound?.quantity > 1) {
        productFound.quantity -= 1
      }
      else {
        state.products = [...state.products.filter(product => product.id !== productFound.id)]
      }
      state.totalQuantity -= 1
    },

    removeProduct(state, action) {
      let total = action.payload.quantity
      state.products = [...state.products.filter(product => product.id !== action.payload.id)];
      state.totalQuantity -= total;
    }

  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
