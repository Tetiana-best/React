import { cartItemApi } from '@/entities/cartItem/api/cartItemApi'
import { favoriteItemApi } from '@/entities/favoriteItem'
import { productApi } from '@/entities/product/api/productApi'
import { userApi } from '@/entities/user/api/userApi'
import { authApi } from '@/features/auth/api/authApi'
import authReducer from '@/features/auth/api/authSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [cartItemApi.reducerPath]: cartItemApi.reducer,
	  [favoriteItemApi.reducerPath]: favoriteItemApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      userApi.middleware,
      productApi.middleware,
      cartItemApi.middleware,
		favoriteItemApi.middleware
    ),
})
