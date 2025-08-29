import { createSlice } from '@reduxjs/toolkit'
import { addPost, deletePost, fetchPosts } from './postsThunks'

const initialState = {
  postsList: [],
  currentPageNumber: 1,
  postsNumberPerPage:5,
  totalPagesNumber:1,
  status: 'idle',
  error:null,
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
		state.currentPageNumber = action.payload
		state.loadMorePage = action.payload
    },
  },
  extraReducers: (builder)=>{
	builder
	.addCase(fetchPosts.pending, (state)=>{
		state.status='loading'
		state.error = null
	})
	.addCase(fetchPosts.fulfilled, (state, action) => {
	state.status='success'

		if (action.meta.arg.append) {
		state.postsList = [...state.postsList, ...action.payload.items]
	} else {
		state.postsList = action.payload.items
	}

	const paginationData = action.payload.pagination
	state.currentPageNumber = paginationData.currentPage
	state.postsNumberPerPage = paginationData.pageSize
	state.totalPagesNumber = paginationData.totalPages
})
	.addCase(fetchPosts.rejected, (state, action) => {
	state.status='failed'
	state.error = action.payload
	}),

// --------------deletePost--------------------
	builder
	.addCase(deletePost.pending, (state)=>{
		state.status='loading'
		state.error = null
	})
	.addCase(deletePost.fulfilled, (state, action) => {
	state.status='success'
	state.postsList = state.postsList.filter((post) => post.id!==action.payload.id)
})
	.addCase(deletePost.rejected, (state, action) => {
	state.status='failed'
	state.error = action.payload
	}),
	// --------------createPost--------------------
	builder
	.addCase(addPost.pending, (state)=>{
		state.status='loading'
		state.error = null
	})
	.addCase(addPost.fulfilled, (state, action) => {
	state.status='success'
	state.postsList.unshift(action.payload)
	// state.postsList = [...state.postsList, action.payload]
})
	.addCase(addPost.rejected, (state, action) => {
	state.status='failed'
	state.error = action.payload
	})
  },

  
})



// Action creators are generated for each case reducer function
export const { setCurrentPage } = postsSlice.actions

export default postsSlice.reducer