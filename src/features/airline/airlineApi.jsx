import { apiSlice } from "../../app/api/authApi"

const airlineApi = apiSlice.injectEndpoints({
  tagTypes: ['getAllAirline'],
  endpoints: (builder) => ({
    getAllAirline: builder.query({
      query: () =>  ({
        url: "airlines"
      }),

      providesTags: ['getAllAirline'],
      transformResponse: (response, meta, args) => response.data
    }),

    createAirline: builder.mutation({
      query: (data) =>  ({
        url: "airlines",
        method: "POST",
        body: data
      }),

      invalidatesTags: ['getAllAirline'],
      transformResponse: (response, meta, args) => response.data
    }),

    updateAirlineById: builder.mutation({
      query: ({id, data}) =>  ({
        url: `airlines/${id}`,
        method: "PUT",
        body: data
      }),

      invalidatesTags: ['getAllAirline'],
      transformResponse: (response, meta, args) => response.data
    }),

    deleteAirlineById: builder.mutation({
      query: (id) =>  ({
        url: `airlines/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: ['getAllAirline'],
      transformResponse: (response, meta, args) => response.data
    }),
  })
})

export const { useGetAllAirlineQuery, useUpdateAirlineByIdMutation, useDeleteAirlineByIdMutation, useCreateAirlineMutation } = airlineApi 