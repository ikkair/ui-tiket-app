import { apiSlice } from "../../app/api/authApi"

const airlineApi = apiSlice.injectEndpoints({
  tagTypes: ['getAllAirline'],
  endpoints: (builder) => ({
    getAllAirline: builder.query({
      query: () =>  ({
        url: "airline"
      }),

      providesTags: ['getAllAirline'],
      transformResponse: (response, meta, args) => response
    }),

    createAirline: builder.mutation({
      query: (data) =>  ({
        url: "airline",
        method: "POST",
        body: data
      }),

      invalidatesTags: ['getAllAirline'],
      transformResponse: (response, meta, args) => response.data
    }),

    updateAirlineById: builder.mutation({
      query: ({id, data}) =>  ({
        url: `airline/${id}`,
        method: "PUT",
        body: data
      }),

      invalidatesTags: ['getAllAirline'],
      transformResponse: (response, meta, args) => response.data
    }),

    deleteAirlineById: builder.mutation({
      query: (id) =>  ({
        url: `airline/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: ['getAllAirline'],
      transformResponse: (response, meta, args) => response.data
    }),
  })
})

export const { useGetAllAirlineQuery, useUpdateAirlineByIdMutation, useDeleteAirlineByIdMutation, useCreateAirlineMutation } = airlineApi 