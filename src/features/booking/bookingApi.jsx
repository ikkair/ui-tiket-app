import { apiSlice } from "../../app/api/authApi"

export const bookingApi = apiSlice.injectEndpoints({
  tagTypes: ['getAllBooking'],
  endpoints: (builder) => ({
    getAllBooking: builder.query({
      query: (query) =>  ({
        url: "bookings"
      }),

      providesTags: ['getAllBooking'],
      transformResponse: (response, meta, args) => response
    }),

    getBookingById: builder.query({
      query: (id) =>  ({
        url: `bookings/${id}`
      }),

      providesTags: ['getBookingById'],
      transformResponse: (response, meta, args) => response
    }),

    getBookingByIdUser: builder.query({
      query: (id) =>  ({
        url: `bookings/?id_user=${id}`
      }),

      providesTags: ['getBookingByIdFlights'],
      transformResponse: (response, meta, args) => response
    }),

    createBooking: builder.mutation({
      query: (data) =>  ({
        url: "bookings",
        method: "POST",
        body: data
      }),

      invalidatesTags: ['getAllBooking'],
      transformResponse: (response, meta, args) => response.data
    }),

    updateBookingById: builder.mutation({
      query: ({id, data}) =>  ({
        url: `bookings/${id}`,
        method: "PUT",
        body: data
      }),

      invalidatesTags: ['getAllBooking'],
      transformResponse: (response, meta, args) => response.data
    }),

    deleteBookingById: builder.mutation({
      query: (id) =>  ({
        url: `bookings/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: ['getAllBooking'],
      transformResponse: (response, meta, args) => response.data
    }),
  })
})

export const { useGetAllBookingQuery, useGetBookingByIdQuery, useCreateBookingMutation, useUpdateBookingByIdMutation, useDeleteBookingByIdMutation, useGetBookingByIdUser } = bookingApi 