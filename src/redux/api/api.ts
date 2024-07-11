import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["products", "product", "category"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => {
        // const params = new URLSearchParams();
        // if (paramsName) {
        //   params.append("paramsName", paramsName);
        // }
        return {
          url: "/products",
          method: "GET",
          // params: paramsName,
        };
      },
      providesTags: ["products"],
    }),

    getProduct: builder.query({
      query: (id) => {
        console.log(id);
        // const params = new URLSearchParams();
        // if (paramsName) {
        //   params.append("paramsName", paramsName);
        // }
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
        // const params = new URLSearchParams();
        // if (paramsName) {
        //   params.append("paramsName", paramsName);
        // }
        return {
          url: `/all-products/${category}`,
          method: "GET",
        };
      },
      providesTags: ["category"],
    }),
    // addDataName: builder.mutation({
    //   query: (data) => {
    //     return {
    //       url: "/routeName",
    //       method: "POST",
    //       body: data,
    //     };
    //   },
    //   invalidatesTags: ["dataName"],
    // }),
    // updateDataName: builder.mutation({
    //   query: (options) => {
    //     return {
    //       url: `/routeName/${options.id}`,
    //       method: "PUT",
    //       body: options.data,
    //     };
    //   },
    //   invalidatesTags: ["dataName"],
    // }),
  }),
});
export const {
  useGetProductQuery,
  useGetProductsQuery,
  useGetProductByCategoryQuery,
  /*useUpdateDataNameMutation*/
  /*useAddDataNameMutation */
} = baseApi;
