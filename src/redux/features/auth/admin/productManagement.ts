import { baseApi } from "@/redux/api/baseApi";

const productManageMentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (args) => {
        console.log(args);
        const params = new URLSearchParams();
        if (args) {
          args.forEach((element: { name: string; value: string }) => {
            params.append(element.name, element.value);
          });
        }

        return {
          url: "/products",
          method: "GET",
          params: params,
        };
      },
    }),
    createProduct: builder.mutation({
      query: (data) => ({
        url: "/product/create-product",
        method: "POST",
        body: data,
      }),
    }),

    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `/product/delete-Product/${productId}`,
        method: "DELETE",
      }),
    }),
    getProduct: builder.query({
      query: (productId) => ({
        url: `/product/single-Product/${productId}`,
        method: "GET",
      }),
    }),

    updateProduct: builder.mutation({
      query: ({ productId, ...productData }) => ({
        url: `/product/update-Product/${productId}`,
        method: "PATCH",
        body: productData,
      }),
    }),
  }),
});
export const {
  useGetAllProductsQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  useGetProductQuery,
  useUpdateProductMutation,
} = productManageMentApi;
