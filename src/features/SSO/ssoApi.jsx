import { apiSlice } from "../../app/api/authApi";

export const ssoAPi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    logoutSSO: builder.query({
      query: () =>  ({
        url: "auth/logout"
      }),

      providesTags: ['logoutSSO'],
      transformResponse: (response, meta, args) => response.data
    }),
  })
})

export const { useLogoutSSOQuery } = ssoAPi 