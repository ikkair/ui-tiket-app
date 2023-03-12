import { apiSlice } from "../../app/api/authApi"

const flightApi = apiSlice.injectEndpoints({
  tagTypes: ['getAllFlight'],
  endpoints: (builder) => ({
    getAllFlight: builder.query({
      query: (query) =>  ({
        url: "flight"
      }),

      providesTags: ['getAllFlight'],
      transformResponse: (response, meta, args) => response
    }),

    getFlightById: builder.query({
      query: (id) =>  ({
        url: `flight/${id}`
      }),

      providesTags: ['getFlightById'],
      transformResponse: (response, meta, args) => response
    }),

    createFlight: builder.mutation({
      query: (data) =>  ({
        url: "flight",
        method: "POST",
        body: data
      }),

      invalidatesTags: ['getAllFlight'],
      transformResponse: (response, meta, args) => response.data
    }),

    updateFlightById: builder.mutation({
      query: ({id, data}) =>  ({
        url: `flight/${id}`,
        method: "PUT",
        body: data
      }),

      invalidatesTags: ['getAllFlight'],
      transformResponse: (response, meta, args) => response.data
    }),

    deleteFlightById: builder.mutation({
      query: (id) =>  ({
        url: `flight/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: ['getAllFlight'],
      transformResponse: (response, meta, args) => response.data
    }),
  })
})

export const { useGetAllFlightQuery, useGetFlightByIdQuery ,useUpdateFlightByIdMutation, useDeleteFlightByIdMutation, useCreateFlightMutation } = flightApi 