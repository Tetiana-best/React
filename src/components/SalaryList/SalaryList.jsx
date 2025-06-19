import { useState } from "react"
import salaryItems from './SalaryItems'
// import styles from './TranslatorClass.module.scss'

export function Task() {
	return (
		<>
			<div className="task">
				<h1>Задача 4</h1>
				<p>Вивести список як маркований список з елементами у форматі (name: salary)</p>
			</div>
		</>
	)
}
export default function BulletList() {

// -----------------------------------------------
	return ( 
	<>

		<ul>
			{salaryItems.map((salaryItem)=> (<li key={salaryItem.id}>{`${salaryItem.name}: ${salaryItem.salary} грн`}</li>))}
		</ul>
	</>
	)
}

export function SalaryList() {
	return (
		<>
			<Task />
			<BulletList />
		</>
	)
}
