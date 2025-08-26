import { fetchPosts } from '@/store/postsThunk';
import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
	name: 'posts',
	initialState: {
		postsList: [],
		loading: false,
		error: null,
	},
	reducers: {
	},
	extraReducers: (builder)=> {
		builder
		.addCase(fetchPosts.pending,(state) => {
			state.loading = true
			state.error = null
		})
		.addCase(fetchPosts.fulfilled,(state, action) => {
			state.loading = false
			state.postsList = action.payload
		})
		.addCase(fetchPosts.rejected,(state, action) => {
			state.loading = false
			state.error = action.payload
		})
	}
})

export default postsSlice.reducer