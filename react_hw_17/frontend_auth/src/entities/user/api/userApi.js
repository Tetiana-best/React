import { baseApi } from '@/shared/api/baseApi'
import { apiRoutes } from '@/shared/config/routes/apiRoutes'

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

    getUsers: build.query({
        query: ({ page, limit } = {}) => ({
          url: apiRoutes.users,
          params: { page, limit },
        }),
      query: () => ({
        url: apiRoutes.users,
      }),
      providesTags: [{ type: 'User', id: 'LIST' }],
    }),

    getUserById: build.query({
      query: (id) => `${apiRoutes.users}/${id}`,
      providesTags: ['User'],
    }),

    getProfile: build.query({
      query: () => apiRoutes.profile,
      providesTags: ['User'],
    }),

	  createUser: build.mutation({
			 query: (data) => ({
				url: apiRoutes.users,
				method: 'POST',
				body: data,
			 }),
			 invalidatesTags: [{ type: 'User', id: 'LIST' }],
		  }),

		  updateUser: build.mutation({
			 query: ({ id, data }) => ({
				url: `${apiRoutes.users}/${id}`,
				method: 'PUT',
				body: data,
			 }),
			 invalidatesTags: (result, error, { id }) => [{ type: 'User', id }, { type: 'User', id: 'LIST' }],
		  }),

		  deleteUser: build.mutation({
			 query: (id) => ({
				url: `${apiRoutes.users}/${id}`,
				method: 'DELETE',
			 }),
			 invalidatesTags: (result, error, id) => [{ type: 'User', id }, { type: 'User', id: 'LIST' }],
		  }),
  }),
})

export const { 
	useGetUsersQuery, 
	useGetUserByIdQuery, 
	useGetProfileQuery,

	useCreateUserMutation,
	useUpdateUserMutation,
	useDeleteUserMutation,
 } =
  userApi
