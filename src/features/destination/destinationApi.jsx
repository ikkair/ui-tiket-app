import { apiSlice } from '../../app/api/authApi';

export const destinationApi = apiSlice.injectEndpoints({
  tagTypes: ['getAllDestination'],
  endpoints: (builder) => ({
    getAllDestination: builder.query({
      query: () => ({
        url: 'destinations',
      }),

      providesTags: ['getAllDestination'],
      transformResponse: (response, meta, args) => response.data,
    }),
    getDestinationById: builder.query({
      query: (id) => ({
        url: `destinations/${id}`,
      }),

      providesTags: ['getDestinationById'],
      transformResponse: (response, meta, args) => response.data[0],
    }),
  }),
});

export const { useGetAllDestinationQuery, useGetDestinationByIdQuery } = destinationApi;
