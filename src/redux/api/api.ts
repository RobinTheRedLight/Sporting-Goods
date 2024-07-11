import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["products", "product", "category", "addToCart", "cart"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => {
        return {
          url: "/products",
          method: "GET",
        };
      },
      providesTags: ["products"],
    }),

    getProduct: builder.query({
      query: (id) => {
        console.log(id);
        return {
          url: `/product/${id}`,
          method: "GET",
        };
      },
      providesTags: ["product"],
    }),

    getProductByCategory: builder.query({
      query: (category) => {
        console.log(category);
        return {
          url: `/all-products/${category}`,
          method: "GET",
        };
      },
      providesTags: ["category"],
    }),

    addToCart: builder.mutation({
      query: (data) => {
        return {
          url: "/cart",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["addToCart", "cart"],
    }),
    getCart: builder.query({
      query: () => {
        return {
          url: "/cart",
          method: "GET",
        };
      },
      providesTags: ["cart"],
    }),
  }),
});

export const {
  useGetProductQuery,
  useGetProductsQuery,
  useGetProductByCategoryQuery,
  useAddToCartMutation,
  useGetCartQuery,
} = baseApi;
