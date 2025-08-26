import ProductsFilter from "./ProductsFilter";
import ProductsForm from "./ProductsForm";
import ProductsList from "./ProductsList";

function ProductsManager() {
	return ( 
		<div>
			<ProductsForm />
			<hr />
			<ProductsFilter />
			<hr />
			<ProductsList />
		</div>
	 );
}

export default ProductsManager;