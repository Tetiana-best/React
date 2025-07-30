import styles from '../pages/products/Products.module.scss'

function Home() {
	return ( 
		<div  className={styles.result__container}>
			<h2>Цей магазин належить програмісту на фрілансі</h2>
			<ul>тому
				<li>магазин працює коли хоче</li>
				<li>товари надсилає швидко</li>
				<li>на запитання відповідає коли висипається</li>
			</ul>
		</div>
	 );
}

export default Home;