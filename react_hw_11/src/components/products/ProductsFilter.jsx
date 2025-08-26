import { filterProduct } from "@/store/productsSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

function ProductsFilter() {
	const [productsFilter, setProductsFilter] = useState('')

	const dispatch = useDispatch()
	
	const onFilteredProduct = (e) => {
		setProductsFilter(e.target.value)
		dispatch(filterProduct(e.target.value))
	}
	return ( 
		<div>
			<label>Пошук товару
				<input type="text" value={productsFilter} onChange={onFilteredProduct}
				placeholder="Введіть назву товару..."/>
			</label>
		</div>
	 );
}

export default ProductsFilter;