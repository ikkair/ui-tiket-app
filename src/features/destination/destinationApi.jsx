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

      invalidatesTags: ['getAllDestination'],
      transformResponse: (response, meta, args) => response.data
    }),
    createDestination: builder.mutation({
      query: ({data}) => ({
        url: `destinations/`,
        method: "POST",
        body: data
      }),

      providesTags: ['createDestination'],
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

export const { useGetAllDestinationQuery, useUpdateDestinationByIdMutation, useGetDestinationByIdQuery, useCreateDestinationMutation } = destinationApi 

