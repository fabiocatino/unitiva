import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Product = {
  id: number;
  title: string;
  price: number;
  sku: string;
  qty: number;
  image: string;
};

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mockend.com/fabiocatino/unitiva",
  }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => `/products?limit=5`,
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
