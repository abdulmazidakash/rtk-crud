// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://685c1d1789952852c2dc47e8.mockapi.io' }),
  endpoints: (build) => (
	{
    getUsers: build.query({
      query: () => `/users`,
    }),
  }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetUsersQuery } = userApi;