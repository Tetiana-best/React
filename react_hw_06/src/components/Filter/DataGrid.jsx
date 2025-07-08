import { useState, useMemo, useDeferredValue, useCallback} from "react"
import GridRow from "./GridRow"
import {products} from "./data.js"

import styles from './Filter.module.scss'

export function Task() {
	return (
		<>
			<div className = "task">
				<h1 className = "task__title">Задача 2</h1>
				<ul> Таблиця з фільтрацією та сортуванням, чутлива до UI 
					<li>Створіть компонент DataGrid (батьківський) та GridRow (дочірній).</li>
					<li>DataGrid отримує великий масив даних, має поле вводу для фільтрації, кнопки для сортування за різними колонками.</li>
					<li>GridRow (обгорнутий у React.memo) відображає один рядок даних.</li>
					<li>Використайте useDeferredValue для пошукового запиту та/або параметрів сортування.</li>
					<li>Використайте useMemo для обчислення відфільтрованих та відсортованих даних на основі відкладених значень.</li>
					<li>Використайте useCallback для функцій-обробників сортування та інших інтерактивних елементів, які передаються до дочірніх компонентів.</li>
					<li>Мета: забезпечити швидкий відгук на введення та кліки, навіть якщо обробка даних займає час.</li>
				</ul>
			</div>
		</>
	)
}

export default function Filter() {
	const [searchTerm, setSearchTerm] = useState('')
	const [sortField, setSortField] = useState('')

	const handleInput = useCallback((e) => {
		setSearchTerm(e.target.value)
	}, [])
	const handleSort = useCallback((field) => {
		setSortField(field);
	}, []);

	const deferredSearchTerm = useDeferredValue(searchTerm)
	const filteredProducts  = useMemo(() => {
		let resFiltered
		if (!searchTerm) resFiltered = products
		else resFiltered = products.filter((product) =>
			product.name.toLowerCase().includes(deferredSearchTerm.toLowerCase())
		)
			return resFiltered
		}, [deferredSearchTerm]
	)
	const sortedProducts = useMemo(() => {
		let resSorted = [...products]
		if (sortField === 'name') {
			resSorted.sort((a, b) => a.name.localeCompare(b.name))
		} else if (sortField === 'brand') {
			resSorted.sort((a, b) => a.brand.localeCompare(b.brand))
		} else if (sortField === 'quantity') {
			resSorted.sort((a, b) => a.quantity - b.quantity)
		}
		return resSorted
	}, [sortField])

	const showProducts = searchTerm ? filteredProducts : sortedProducts
	return (
				<>
					<div className={styles.result__container}>
						<label>Пошук
							<input type="text" value={searchTerm} onChange={handleInput} placeholder="Введіть НАЗВУ товару..."></input>
						</label>
						<button onClick={() => handleSort('name')}>Сортувати за назвою</button>
						<button onClick={() => handleSort('brand')}>Сортувати за брендом</button>
						<button onClick={() => handleSort('quantity')}>Сортувати за кількістю</button>
						<table>
							<thead>
								<tr>
									<th>Name</th>
										<th>Brand</th>
										<th>Quantity</th>
								</tr>
							</thead>
							<GridRow products={showProducts} />
						</table>
					</div>
				</>
	)
}

export function DataGrid() {
	return (
		<>
			<Task />
			<Filter/>
		</>
	)
}