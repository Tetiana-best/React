import { createSlice } from "@reduxjs/toolkit";
import { products } from "../data/products.js";

export const productsSlice = createSlice({
	name: 'products',
	initialState: {
		items: products,
		filter:'',
	},
	reducers: {
		addProduct: (state,action) => {
			state.items.push({
				id:new Date().getTime(),
				...action.payload
			})
		},
		filterProduct: (state, action) => {
			state.filter = action.payload
		}
	}
})

export const {addProduct, filterProduct} = productsSlice.actions

export default productsSlice.reducer