import FavoritesOperations from '@/shared/api/dbFavorites'
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'

const favoritesDB = new FavoritesOperations()

export const favoriteItemApi = createApi({
	reducerPath: 'favoriteItemApi',
	baseQuery: fakeBaseQuery(),
	tagTypes: ['FavoriteItem'],

	endpoints: (builder) => ({

		// --- 1) Отримати всі улюблені ---
		getUserFavorites: builder.query({
			async queryFn(userId) {
			try {
				const favorites = await favoritesDB.getFavoritesByUserId(userId)
				return { data: favorites }
			} catch (error) {
				return { error: { message: error.message } }
			}
			},
			providesTags: ['FavoriteItem'],
		}),

		// --- 2) Додати товар ---
		addToFavorites: builder.mutation({
			async queryFn({ userId, productId, product }) {
			try {
				let favorites = await favoritesDB.getFavoritesByUserId(userId)

				if (!favorites) favorites = {}

				if (favorites[productId]) {
					return { data: true }
				}

				// якщо існує — оновити
				await favoritesDB.updateFavoriteProduct(userId, productId, product)
				return { data: true }
			} catch (error) {
				return { error: { message: error.message } }
			}
			},
			invalidatesTags: ['FavoriteItem'],
		}),

		// --- 3) Видалити ---
		removeFromFavorites: builder.mutation({
			async queryFn({ userId, productId }) {
			try {
				await favoritesDB.removeFavoriteProduct(userId, productId)
				return { data: true }
			} catch (error) {
				return { error: { message: error.message } }
			}
			},
			invalidatesTags: ['FavoriteItem'],
		}),

	}),
	})

	export const {
	useGetUserFavoritesQuery,
	useAddToFavoritesMutation,
	useRemoveFromFavoritesMutation,
	} = favoriteItemApi
