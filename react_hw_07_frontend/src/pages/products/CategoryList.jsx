import {shopCategories} from '../../categories.js'
import { Link, useNavigate } from 'react-router-dom'
import frontRoutes from '../../routes/frontRoutes'
import styles from './Products.module.scss'

function CategoryList() {
	const navigate = useNavigate()
	function goHome() {
		navigate(frontRoutes.navigate.home)
	}
	return (
		<div className={styles.result__container}>
			<h2>Оберіть категорію:</h2>
			<ul className={styles.result__flex}>
				{shopCategories.map((category) => (
					<li key={category.categoryType} className={styles.result__listItem}>
						<Link to={frontRoutes.navigate.shop.category(category.categoryType)}>
							<img src={category.image} alt={category.title} className={styles.result__img}/>
							<h3>{category.title}</h3>
						</Link>
					</li>
				))}
			</ul>
		<button onClick={goHome}>На головну</button>
		</div>
	)
}

export default CategoryList