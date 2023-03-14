import { apiSlice } from '../../app/api/authApi';

export const passangerApi = apiSlice.injectEndpoints({
  tagTypes: ['getAllPassanger'],
  endpoints: (builder) => ({
    getAllPassanger: builder.query({
      query: (query) => ({
        url: 'passengers',
      }),

      providesTags: ['getAllPassanger'],
      transformResponse: (response, meta, args) => response,
    }),

    getPassangerByIdUser: builder.query({
      query: (id) => ({
        url: `passengers/${id}`,
      }),

      providesTags: ['getPassangerById'],
      transformResponse: (response, meta, args) => response.data[0],
    }),

    getPassangersByIdBooking: builder.query({
      query: (id) => ({
        url: `passengers/?id_booking=${id}`,
      }),

      providesTags: ['getPasssangerByIdBooking'],
      transformResponse: (response, meta, args) => response.data,
    }),

    createPassanger: builder.mutation({
      query: (data) => ({
        url: 'passengers',
        method: 'POST',
        body: data,
      }),

      transformResponse: (response, meta, args) => response.data,
    }),
  }),
});

export const { useCreatePassangerMutation, useGetPassangersByIdBookingQuery, useGetPassangerByIdUserQuery } = passangerApi;
