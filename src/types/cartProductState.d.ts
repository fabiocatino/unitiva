export interface CartState {
  cart: {
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
  };
}
