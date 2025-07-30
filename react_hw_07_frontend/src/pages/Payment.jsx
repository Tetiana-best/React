import styles from '../pages/products/Products.module.scss'

function PaymentPolicy() {
	return ( 
		<div  className={styles.result__container}>
		<ul>Правила оплати
			<li>При отриманні</li>
			<li>Товари надсилає швидко</li>
			<li>Записати у зошит</li>
		</ul>
	</div>
	 );
}

export default PaymentPolicy;