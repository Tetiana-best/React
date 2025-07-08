import { useState, useMemo, useCallback} from "react"
import styles from './DebouncedSearch.module.scss'
import useDebounce from './useDebounce.js'
import {largeProductList } from "./products.js"
import ProductItem from "./ProductItem"


export function Task() {
	return (
		<>
			<div className = "task">
				<h1 className = "task__title">Задача 4</h1>
				<ul> useDebounce – відкладений виклик функції:
					<li>Створіть кастомний хук useDebounce, який приймає значення та затримку в мілісекундах. Він повинен повертати "відкладене" значення, яке оновлюється лише після того, як минув заданий час без змін.</li>
					<li>Створіть поле пошуку, де результати пошуку оновлюються не відразу після кожного символу, а з невеликою затримкою (наприклад, 500мс) після зупинки введення, використовуючи useDebounce.</li>
				</ul>
			</div>
		</>
	)
}

export default function Debounce () {
	const [searchTerm, setSearchTerm] = useState('')

	const handleInput = useCallback((e) => {
		setSearchTerm(e.target.value)
	}, [])
	
	const debouncedSearchTerm  = useDebounce(searchTerm, 500)
	const filteredProducts  = useMemo(() => {
			let resFiltered
			if (!debouncedSearchTerm ) resFiltered = largeProductList
			else resFiltered = largeProductList.filter((product) =>
				product.name.toLowerCase().includes(debouncedSearchTerm .toLowerCase())
			)
				return resFiltered
			}, [debouncedSearchTerm ]
		)

	return (
				<>
					<div className={styles.result__container}>
					<label>Пошук
							<input type="text" value={searchTerm} onChange={handleInput} placeholder="Введіть НАЗВУ товару..."></input>
					</label>
					<ul>
						{filteredProducts.map((item) => (
							<ProductItem key={item.id} name={item.name} />
						))}
					</ul>
				</div>
				</>
	)
}

export function DebouncedSearch() {
	return (
		<>
			<Task />
			<Debounce />
		</>
	)
}