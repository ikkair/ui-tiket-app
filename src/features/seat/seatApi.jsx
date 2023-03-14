import { apiSlice } from "../../app/api/authApi"

const seatApi = apiSlice.injectEndpoints({
  tagTypes: ['getSeatByIdFlight'],
  endpoints: (builder) => ({
    getSeatByIdFlight: builder.query({
      query: (id) =>  ({
        url: `seats?id_flight=${id}`
      }),

      providesTags: ['getSeatByIdFlight'],
      transformResponse: (response, meta, args) => response.data
    }),
  })
})

export const { useGetSeatByIdFlightQuery} = seatApi 