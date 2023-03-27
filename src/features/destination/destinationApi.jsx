import { apiSlice } from "../../app/api/authApi"

export const destinationApi = apiSlice.injectEndpoints({
  tagTypes: ['getAllDestination'],
  endpoints: (builder) => ({
    getAllDestination: builder.query({
      query: () => ({
        url: "destinations"
      }),

      providesTags: ['getAllDestination'],
      transformResponse: (response, meta, args) => response.data
    }),

    updateDestinationById: builder.mutation({
      query: ({ id, data }) => ({
        url: `destinations/${id}`,
        method: "PUT",
        body: data
      }),

      providesTags: ['updateDestinationById'],
      transformResponse: (response, meta, args) => response.data
    })
  })
})

export const { useGetAllDestinationQuery, useUpdateDestinationByIdMutation } = destinationApi 