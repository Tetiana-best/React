import './ProductsItem.scss';

function ProductsItem({productsData}) {
    return ( 
        <div className="products-item">
            <div className="products-item__title">{productsData.productsTitle}</div>
            <div className="products-item__price">{productsData.productsPrice}</div>
        </div>
     );
}

export default ProductsItem;