import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import DbOperations from './api/DbOperations'

const db = new DbOperations('dreams')

export const dreamsApi = createApi({
  reducerPath: 'dreamsApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Dream'],
  endpoints: (builder) => ({
    // Весь список продуктів
    getAllDreams: builder.query({
      async queryFn() {
        try {
          const data = await db.getAll()
          return { data }
        } catch (error) {
          return { error }
        }
      },
      providesTags: ['Dream'],
    }),
    // З пагінацією
    getDreams: builder.query({
      async queryFn({ page = 1, perPage = 4, cursors = [] }) {
        try {
          const { data, cursor, hasMore } = await db.getAllPaginated({
            page,
            perPage,
            cursors,
          })
          return { data: { data, cursor, hasMore } }
        } catch (error) {
          return { error: { status: 500, message: error.message } }
        }
      },
      providesTags: ['Dream'],
    }),

    getDreamById: builder.query({
      async queryFn(id) {
			if (!id) {
      return { error: { status: 400, message: 'Dream ID is required' } }
    }
	 
        try {
          const data = await db.getById(id)
          return { data }
        } catch (error) {
          return { error }
        }
      },
		providesTags: ['Dream'],
    }),

    addDream: builder.mutation({
      async queryFn(dream) {
        try {
			console.log("Adding dream to DB:", dream)
          await db.add(dream)
          return { data: true }
        } catch (error) {
          return { error }
        }
      },
      invalidatesTags: ['Dream'],
    }),

    updateDream: builder.mutation({
      async queryFn({ id, data }) {
        try {
          await db.update(id, data)
          return { data: true }
        } catch (error) {
          return { error }
        }
      },
      invalidatesTags: ['Dream'],
    }),

    deleteDream: builder.mutation({
      async queryFn(id) {
        try {
          await db.delete(id)
          return { data: true }
        } catch (error) {
          return { error }
        }
      },
      invalidatesTags: ['Dream'],
    }),
  }),
})

export const {
  useGetAllDreamsQuery,
  useGetDreamsQuery,
  useGetDreamByIdQuery,
  useAddDreamMutation,
  useUpdateDreamMutation,
  useDeleteDreamMutation,
} = dreamsApi
