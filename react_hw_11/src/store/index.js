import { configureStore } from "@reduxjs/toolkit"
import postsReducer from './postsSlice'
import productsReducer from './productsSlice'

const store = configureStore({
	reducer: {
		products:productsReducer,
		posts: postsReducer,
	}
})

export default store