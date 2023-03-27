import { apiSlice } from "../../app/api/authApi"

export const destinationApi = apiSlice.injectEndpoints({
  tagTypes: ['getAllDestination'],
  endpoints: (builder) => ({
    getAllDestination: builder.query({
      query: () =>  ({
        url: "destinations"
      }),

      providesTags: ['getAllDestination'],
      transformResponse: (response, meta, args) => response.data
    }),
    getDestinationById: builder.query({
      query: (id) =>  ({
        url: `destinations/${id}`
      }),

      providesTags: ['getDestinationsById'],
      transformResponse: (response, meta, args) => response.data
    })
  })
})

export const { useGetAllDestinationQuery, useGetDestinationByIdQuery } = destinationApi 