import { apiSlice } from "../../app/api/authApi"

export const ticketApi = apiSlice.injectEndpoints({
  tagTypes: ['getTicketByIdPassenger'],
  endpoints: (builder) => ({
    getTicketByIdPassenger: builder.query({
      query: (id) =>  ({
        url: `tickets?id_passenger=${id}`
      }),

      providesTags: ['getTicketByIdPassenger'],
      transformResponse: (response, meta, args) => response.data
    }),

  })
})

export const { useGetTicketByIdPassengerQuery } = ticketApi 