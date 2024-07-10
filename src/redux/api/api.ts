import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["products"],
  endpoints: (builder) => ({
    getProduct: builder.query({
      //If you want to post without params just remove the all params code
      query: () => {
        // const params = new URLSearchParams();
        // if (paramsName) {
        //   params.append("paramsName", paramsName);
        // }
        return {
          url: "/products",
          method: "GET",
          // params: params,
        };
      },
      providesTags: ["products"],
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
  useGetProductQuery /*useUpdateDataNameMutation*/,
  /*useAddDataNameMutation */
} = baseApi;
