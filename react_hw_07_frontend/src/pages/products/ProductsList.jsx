import { useParams, Link, useNavigate } from 'react-router-dom'
import apiRoutes from '../../api/apiRoutes.js'
import frontRoutes from '../../routes/frontRoutes.js'
import {shopCategories} from '../../categories.js'
import useFetch from '../../hooks/useFetch.js'
import styles from './Products.module.scss'

function ProductsList() {
	const { category } = useParams()
	const navigate = useNavigate()

	const {data, isLoading, error} = useFetch({url: apiRoutes.productsList})

	if (isLoading) return <div className={styles.spinner}></div>
	if (error) return <p style={{ color: 'red' }}>Помилка: {error}</p>
	if (!data) return null
 
	const filteredProducts  = data.filter(prod => prod.categoryType === category)
	const categoryData = shopCategories.find(item => item.categoryType === category)
	const categoryTitle = categoryData ? categoryData.title : category

  return (
    <div className={styles.result__container}>
      <h2>Товари в категорії: {categoryTitle}</h2>
      {filteredProducts .length === 0 && <p>Немає товарів у цій категорії</p>}
      <ul className={styles.result__grid}>
        {filteredProducts .map(prod => (
          <li key={prod.id} className={styles.result__listItem}>
            <Link to={frontRoutes.navigate.shop.productDetail(prod.id)}>
              <div>{prod.title}</div> 
				  <div><img src={prod.imageUrl} alt={prod.title}  className={styles.result__prodListImg}/></div>
				  	<div>{prod.price}</div>
            </Link>
          </li>
        ))}
      </ul>
		<button onClick={() => navigate(frontRoutes.pages.home)}>На головну</button>
		<button onClick={() => navigate(frontRoutes.pages.shop.index)}>Назад до магазину</button>
    </div>
  )
}

export default ProductsList
