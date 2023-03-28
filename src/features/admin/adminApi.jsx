import { apiSlice } from "../../app/api/authApi";

export const adminApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    updateActiveAdmin: builder.mutation({
      query: ({ id, data }) => ({
        url: `admin/${id}`,
        method: "PUT",
        body: data
      }),

      invalidatesTags: ['getAllAdmin'],
      transformResponse: (response, meta, args) => response.data
    }),

    getAllAdmin: builder.query({
      query: () =>  ({
        url: "admin/list"
      }),

      providesTags: ['getAllAdmin'],
      transformResponse: (response, meta, args) => response.data
    }),
  })
})

export const { useUpdateActiveAdminMutation, useGetAllAdminQuery } = adminApi 