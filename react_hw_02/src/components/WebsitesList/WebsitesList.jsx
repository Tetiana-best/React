import { useState } from "react"
import websitesItems from './WebsitesItems'
import styles from './WebsitesClass.module.scss'

export function Task() {
	return (
		<>
			<div className="task">
				<h1>Задача 5</h1>
				<p>Самостійно сформуйте масив даних та виведіть фрагмент на зразок поданого (дані не обов’язково повинні співпадати)</p>
			</div>
		</>
	)
}
export default function Websites() {

// -----------------------------------------------
	return ( 
	<>
	<div className={styles.container}>
		<ul>
			{websitesItems.map((website)=> (
				<li key={website.id} className={styles.li}>
					<a href="#">
						<div className={styles.flex}>
						<img src={website.image} className={styles.img}/>
							<div>
								<h2>{website.label}</h2>
								<div>{website.url}</div>
							</div>
						</div>
					</a>
					<h3>{website.title}</h3>
					<p>{website.description}</p>
				</li>))}
		</ul>
	</div>
	</>
	)
}

export function WebsitesList() {
	return (
		<>
			<Task />
			<Websites />
		</>
	)
}
