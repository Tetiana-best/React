import { useParams, useNavigate} from 'react-router-dom'
import apiRoutes from '../../api/apiRoutes.js'
import frontRoutes from '../../routes/frontRoutes'
import useFetch from '../../hooks/useFetch.js'
import styles from './Products.module.scss'

function ProductDetails() {
	const { id } = useParams()
	const navigate = useNavigate()

	const {data: product, isLoading, error} = useFetch({url: apiRoutes.getProductById(id)})

	if (isLoading) return <div className={styles.spinner}></div>
	if (error) return <p style={{ color: 'red' }}>Помилка: {error}</p>
	if (!product) return null

	return (
		<div className={styles.result__container}>
			<h2>{product.title}</h2>
			<img src={product.imageUrl} alt={product.name} style={{ width: '500px' }}/>
			<p>Ціна: {product.price} грн</p>
			<p>В наявності: {product.inStock ? "Так" : "Ні"}</p>
			<p>Рейтинг: {product.rating} / 5</p>
			<button onClick={() => navigate(frontRoutes.pages.shop.index)}>До магазину</button>
			<button onClick={() => navigate(-1)}>Назад</button>
		</div>
	)
}

export default ProductDetails
