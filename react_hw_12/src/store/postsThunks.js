import apiClient from '@/api/apiClient'
import initialPosts from '@/data/initialPosts'
import { createAsyncThunk } from '@reduxjs/toolkit'

const postsApi = apiClient('posts', 500, initialPosts)

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async ({ pageNumber, itemsPerPage, append }, { rejectWithValue }) => {
    try {
      const response = await postsApi.getPaginated(pageNumber, itemsPerPage)
      return { 
        ...response,
        append,
      }
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async (id, { rejectWithValue }) => {
    try {
      const response = await postsApi.delete(id)
      return response
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const addPost = createAsyncThunk(
  'posts/addPost',
  async ( item , { rejectWithValue }) => {
    try {
      const response = await postsApi.create({
        ...item,
        likes: 0,
        dislikes: 0
      })
      return response
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)