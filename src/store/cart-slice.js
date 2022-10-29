import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addProduct(state, action) {
      let addedProduct = {
        ...action.payload,
        quantity: action.payload.quantity ? action.payload.quantity + 1 : 1,
      };

      const pdctFound = state.products.find(
        (item) =>
          item.id === action.payload.id &&
          item.colorChosen === action.payload.colorChosen
      );

      pdctFound
        ? pdctFound.quantity++
        : (state.products = [addedProduct, ...state.products]);

      state.totalQuantity += 1;
      state.totalPrice += action.payload.price;
    },

    decreaseProductQty(state, action) {
      const productFound = state.products.find(
        (product) =>
          product.id === action.payload.id &&
          product.colorChosen === action.payload.colorChosen
      );

      if (productFound?.quantity > 1) {
        productFound.quantity -= 1;
      } else {
        state.products = [
          ...state.products.filter(
            (product) =>
              product.id !== productFound.id ||
              product.colorChosen !== productFound.colorChosen
          ),
        ];
      }
      state.totalQuantity -= 1;
      state.totalPrice -= action.payload.price;
    },

    removeProduct(state, action) {
      let total = action.payload.quantity;
      state.products = [
        ...state.products.filter(
          (product) =>
            product.id !== action.payload.id ||
            product.colorChosen !== action.payload.colorChosen
        ),
      ];
      state.totalQuantity -= total;
      state.totalPrice -= action.payload.price * total;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
