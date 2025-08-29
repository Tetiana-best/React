import { addProduct } from "@/store/productsSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

function ProductsForm() {
	const [productsTitle, setProductsTitle] = useState('')
	const [productsPrice,  setProductsPrice] = useState('')

	const dispatch = useDispatch()

	const onAddProduct = () => {
		const newProduct = {
			productsTitle,
			productsPrice: Number(productsPrice)
		}
		dispatch(addProduct(newProduct))
		setProductsTitle('')
		setProductsPrice('')
	}

	return ( 
		<div>
			<div>
				<label>Введіть назву товара
					<input type="text" value={productsTitle} placeholder="Введіть назву товара"
					onChange={(e) => setProductsTitle(e.target.value)} required/>
				</label>
				<label>Введіть ціну товара
					<input type="number" value={productsPrice} placeholder="Введіть ціну товара"
					onChange={(e) => setProductsPrice(e.target.value)} min={0} required/>
				</label>
				<button onClick={onAddProduct} disabled={!productsTitle || !productsPrice || Number(productsPrice) <= 0}
				style={{ cursor: (!productsTitle || !productsPrice || Number(productsPrice) <= 0) ? 
					'not-allowed' : ''}}>Додати товар до списку</button>
			</div>
		</div>
	 );
}

export default ProductsForm;