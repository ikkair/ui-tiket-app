import { apiSlice } from "../../app/api/authApi";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    userLogin: builder.mutation({
      query: (data) =>  ({
        url: "user/login",
        method: "POST",
        body: data
      }),

      transformResponse: (response, meta, args) => response.data
    }),
    userRegister: builder.mutation({
      query: (data) =>  ({
        url: "user/register",
        method: "POST",
        body: data
      }),

      transformResponse: (response, meta, args) => response.data
    }),

    getUserProfile: builder.query({
      query: () =>  ({
        url: "user/profile"
      }),

      transformResponse: (response, meta, args) => response.data
    }),

    adminLogin: builder.mutation({
      query: (data) =>  ({
        url: "admin/login",
        method: "POST",
        body: data
      }),

      transformResponse: (response, meta, args) => response.data
    }),

    adminRegister: builder.mutation({
      query: (data) =>  ({
        url: "admin/create",
        method: "POST",
        body: data
      }),

      transformResponse: (response, meta, args) => response.data
    }),

    superAdminLogin: builder.mutation({
      query: (data) =>  ({
        url: "super-admin/login",
        method: "POST",
        body: data
      }),

      transformResponse: (response, meta, args) => response.data
    }),
  })
})

export const { useAdminLoginMutation, useUserLoginMutation, useUserRegisterMutation, useAdminRegisterMutation, useGetUserProfileQuery, useSuperAdminLoginMutation } = authApi 