import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define BASE_URL and USERS_URL *inside* this file's scope:
const BASE_URL ="https://scottweb.onrender.com/"; // Use env variable or default to empty
const USERS_URL = `${BASE_URL}/api/v1/users/`; // Or your actual path

export const apiSlice = createApi({
  reducerPath: 'fetchfuck',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }), // Use the defined BASE_URL
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => '/posts', // Relative URL is okay now
    }),
    getOneProduct: builder.query({
      query: (id) => `/posts/${id}`, // Relative URL is okay now
    }),
    login: builder.mutation({
      query: (data) => ({
        url: 'https://scottweb.onrender.com/login', // Relative URL is okay now
        method: 'POST',
        credentials: 'include',
        body: data,
      }),
    }),
    verify: builder.query({
      query: () => '/auth', // Relative URL is okay now
    }),
    logout: builder.query({ // Use mutation for logout (even if it's a GET)
      query: () => "/logout"
    }),
    sign: builder.mutation({
      query: (data) => ({
        url: '/signup', // Relative URL is okay now
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useVerifyQuery,
  useGetOneProductQuery,
  useLoginMutation,
  useSignMutation,
  useLogoutQuery,
} = apiSlice;


