import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { Product } from "../../../types/products";

export interface CartProducts extends Product {
  cartQty: number;
}

const initialState: any = {
  cartItems: Cookies.get("cartItems")
    ? JSON.parse(Cookies.get("cartItems")!)
    : [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartProducts>) {
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
  },
});

export const useTotalQuantity = () =>
  useSelector((state: any) => {
    return state.cart.cartItems.reduce(
      (a: number, cartItem: CartProducts) => a + cartItem.cartQty,
      0
    );
  });

export const useTotalPrice = () =>
  useSelector((state: any) => {
    return state.cart.cartItems.reduce(
      (a: number, cartItem: CartProducts) =>
        a + cartItem.cartQty * cartItem.price,
      0
    );
  });

// Action creators are generated for each case reducer function
export const { addItem, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;
