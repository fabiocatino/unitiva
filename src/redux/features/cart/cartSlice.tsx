import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { CartState } from "../../../types/cartProductState";
import { Product } from "../../../types/products";

interface CartProducState {
  cartItems: {
    id: number;
    title: string;
    price: number;
    sku: string;
    qty: number;
    image: string;
    size: number;
    cartQty: number;
  }[];
}

export interface CartProducts extends Product {
  cartQty: number;
}

const initialState: CartProducState = {
  cartItems: Cookies.get("cartItems")
    ? JSON.parse(Cookies.get("cartItems")!)
    : [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartProducts>) {
      //If item already exists, updates it with quantity + 1, otherwise it creates it
      const newItem = action.payload;
      const existItem = state.cartItems.find(
        (item: CartProducts) => item.id === newItem.id
      );
      const cartItems = existItem
        ? state.cartItems.map((item: CartProducts) =>
            item.id === existItem.id
              ? { ...newItem, cartQty: item.cartQty + 1 }
              : item
          )
        : [...state.cartItems, newItem];
      Cookies.set("cartItems", JSON.stringify(cartItems));
      return { ...state, cartItems };
    },
    deleteItem(state, action: PayloadAction<CartProducts>) {
      //if the item in the basket has qty > 1, it decreases it by one. If it's 1, it removes the item from the basket
      let cartItems;
      if (action.payload.cartQty === 1) {
        cartItems = state.cartItems.filter(
          (item: Product) => item.id !== action.payload.id
        );
      } else {
        cartItems = state.cartItems.map((item: CartProducts) => {
          let updatedQty = { ...item, cartQty: item.cartQty - 1 };
          if (item.id === action.payload.id) {
            return updatedQty;
          } else {
            return item;
          }
        });
      }
      Cookies.set("cartItems", JSON.stringify(cartItems));
      return { ...state, cartItems };
    },
    deleteCart: (state) => {
      //resets the basket
      Cookies.remove("cartItems");
      return { ...state, cartItems: [] };
    },
  },
});

export const useTotalQuantity = () =>
  useSelector((state: CartState) => {
    return state.cart.cartItems.reduce(
      (a: number, cartItem: CartProducts) => a + cartItem.cartQty,
      0
    );
  });

export const useTotalPrice = () =>
  useSelector((state: CartState) => {
    return state.cart.cartItems.reduce(
      (a: number, cartItem: CartProducts) =>
        a + cartItem.cartQty * cartItem.price,
      0
    );
  });

// Action creators are generated for each case reducer function
export const { addItem, deleteItem, deleteCart } = cartSlice.actions;

export default cartSlice.reducer;
