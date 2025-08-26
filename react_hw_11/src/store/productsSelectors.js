import { createSelector } from "@reduxjs/toolkit"

export const selectItems = (state) => state.products.items
export const selectFilter = (state) => state.products.filter

export const selectFilteredProducts = createSelector(
	[selectItems, selectFilter],
	(items, filter) => filter ? items.filter(product =>
			product.productsTitle.toLowerCase().includes(filter.toLowerCase())
		) : items
)