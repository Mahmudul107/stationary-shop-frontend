import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (user) => ({
        url: "/auth/login",
        method: "POST",
        body: user,
      }),
    }),
    registerUser: builder.mutation({
      query: (user) => ({
        url: "/auth/register",
        method: "POST",
        body: user,
      }),
    }),

    getUser: builder.query({
      query: () => ({
        url: "/user",
        method: "GET",
      }),
    }),
    createProduct: builder.mutation({
      query: (formData: FormData) => ({
        url: "/product/create-product",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});
export const { useLoginMutation, useRegisterUserMutation, useGetUserQuery: useGetCurrentUserQuery, useCreateProductMutation } =
  authApi;