import { apiSlice } from "../../app/api/authApi"

const seatApi = apiSlice.injectEndpoints({
  tagTypes: ['getSeatByIdFlight'],
  endpoints: (builder) => ({
    getSeatByIdFlight: builder.query({
      query: ({id, limit}) =>  ({
        url: `seats?id_flight=${id}&limit=${limit || 10}`
      }),

      providesTags: ['getSeatByIdFlight'],
      transformResponse: (response, meta, args) => response.data
    }),
    createSeat: builder.mutation({
      query: (data) =>  ({
        url: `seats`,
        method: "POST",
        body: data
      }),

      providesTags: ['getSeatByIdFlight'],
      transformResponse: (response, meta, args) => response.data
    }),
  })
})

export const { useGetSeatByIdFlightQuery, useCreateSeatMutation } = seatApi 