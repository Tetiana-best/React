import { dreamsApi } from '@/entities/dream'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    [dreamsApi.reducerPath]: dreamsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dreamsApi.middleware),
})