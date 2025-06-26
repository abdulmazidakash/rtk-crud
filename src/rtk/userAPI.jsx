// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://685c1d1789952852c2dc47e8.mockapi.io' }),
  tagTypes: ['User'],
  endpoints: (build) => (
	{
    getUsers: build.query({
      query: () => `/users`,
      providesTags: ['User']
    }),
    getUser: build.query({
      query: (id) => `/users/${id}`,
      providesTags: ['User']
    }),
    addUsers: build.mutation({
      query: (user) => ({
        url: '/users',
        method: 'POSt',
        body: user
      }),
      invalidatesTags: ['User']
    }),
    updateUser: build.mutation({
      query: (user) => ({
        url: `/users/${user.id}`,
        method: 'PUT',
        body: user
      }),
      invalidatesTags: ['User']
    }),
    deleteUser: build.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['User']
    }),
  }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { 
  useGetUsersQuery, 
  useGetUserQuery, 
  useAddUsersMutation,
  useUpdateUserMutation,
  useDeleteUserMutation
 } = userApi;