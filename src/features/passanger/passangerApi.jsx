import { apiSlice } from "../../app/api/authApi"

export const passangerApi = apiSlice.injectEndpoints({
  tagTypes: ['getAllPassanger'],
  endpoints: (builder) => ({
    getAllPassanger: builder.query({
      query: (query) =>  ({
        url: "passangers"
      }),

      providesTags: ['getAllPassanger'],
      transformResponse: (response, meta, args) => response
    }),

    getPassangerById: builder.query({
      query: (id) =>  ({
        url: `passangers/${id}`
      }),

      providesTags: ['getPassangerById'],
      transformResponse: (response, meta, args) => response
    }),

    getPassangersByIdBooking: builder.query({
      query: (id) =>  ({
        url: `passangers/booking/${id}`
      }),

      providesTags: ['getPasssangerByIdBooking'],
      transformResponse: (response, meta, args) => response
    }),

    createPassanger: builder.mutation({
      query: (data) =>  ({
        url: "passangers",
        method: "POST",
        body: data
      }),

      transformResponse: (response, meta, args) => response.data
    }),

   
  })
})

export const { useCreatePassangerMutation } = passangerApi 