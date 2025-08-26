import { selectFilteredProducts } from "@/store/productsSelectors";
import { useSelector } from "react-redux";
import ProductsItem from "./ProductsItem";
import "./ProductsList.scss";

function ProductsList() {
		const filteredList = useSelector(selectFilteredProducts);
	 
	 return ( 
		 <>
			{filteredList.length? (
			<div className="products-table">
					<div className="products-table__header">
						<div className="products-table__header-cell">Назва товару</div>
						<div className="products-table__header-cell">Ціна, грн</div>
					</div>
					<div className="products-table__body">
						{filteredList.map((product)=>
							<ProductsItem key={product.id} productsData={product} />
						)}
					</div>
			</div>
			):
			<div>Список порожній</div>
			}
		</>
		);
}

export default ProductsList;