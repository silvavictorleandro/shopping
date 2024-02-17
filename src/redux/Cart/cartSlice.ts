import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../components/ProductList/ProductList";

interface CartState {
  cart: Product[];
  showCart: boolean;
}

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems")!)
  : [];

const initialState: CartState = {
  cart: cartItemsFromStorage,
  showCart: false,
};

export const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addProduct: (state, action) => {
      state.cart = [...state.cart, action.payload];
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
    removeProduct: (state, action) => {
      const productToRemove = action.payload;
      const cartFiltered = state.cart.filter(
        (product) => product.id !== productToRemove.id
      );
      state.cart = cartFiltered;
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
    toggleCartVisibility: (state, action) => {
      state.showCart = !state.showCart;
    },
  },
});

export const { addProduct, removeProduct, toggleCartVisibility } =
  cartSlice.actions;
