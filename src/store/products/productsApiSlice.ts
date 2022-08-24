import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Products {
  id: number;
  name: string;
  photo: string;
  description: string;
  price: number;
}

interface ProductsResponse {
  products: Products[];
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mks-frontend-challenge-api.herokuapp.com/api/v1",
  }),
  endpoints(builder) {
    return {
      fetchProducts: builder.query<ProductsResponse, number | void>({
        query(page = 1) {
          return `/products?page=${page}&rows=8&sortBy=id&orderBy=DESC`;
        },
      }),
    };
  },
});

export const { useFetchProductsQuery } = apiSlice;
