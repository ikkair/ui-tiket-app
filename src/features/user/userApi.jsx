import { apiSlice } from "../../app/api/authApi"

export const userApi = apiSlice.injectEndpoints({
  tagTypes: ['getUserProfile'],
  endpoints: (builder) => ({
    updateUserProfile: builder.mutation({
      query: ({data}) =>  ({
        url: `user/edit`,
        method: "PUT",
        body: data
      }),

      invalidatesTags: ['getUserProfile'],
      transformResponse: (response, meta, args) => response.data
    }),
  
  })
})

export const { useGetUserProfileQuery, useUpdateUserProfileMutation } = userApi 