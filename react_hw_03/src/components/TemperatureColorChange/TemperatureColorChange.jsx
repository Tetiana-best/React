import { useEffect, useState } from "react"
import styles from './TemperatureClass.module.scss'

export function Task() {
	return (
		<>
			<div className = "task">
				<h1 className = "task__title">Задача 1</h1>
				<ul className = "task__list list">З клавіатури вводиться температура. Змінювати колір фону у залежності від значення: 
					<li className = "list__item">менше нуля – білий</li>
					<li className = "list__item">від 0 до 10 – синій,</li>
					<li className = "list__item">від 11 до 22 – зелений</li>
					<li className = "list__item">вище 22 – червоний</li>
					Реалізувати з класами і стилями.
				</ul>
			</div>
		</>
	)
}

export default function Temperature() {
	const[temperature, setTemperature] = useState('')

	function handleInput(event) {
		const val = event.target.value
		setTemperature(val === ''? '' : Number(val))
	}
	useEffect(() => {
		document.body.classList.remove(styles.freezing, styles.cold, styles.warm, styles.hot)
		document.body.classList.add(getBGColor(temperature, styles))
		return () => document.body.className = ''
		
	}, [temperature])
	function getBGColor() {
		if(temperature === '') return
		let styleBGInput = null
		if(temperature < 0) styleBGInput = styles.freezing
		else if(temperature >= 0 && temperature <= 10) styleBGInput = styles.cold
		else if(temperature >= 11 && temperature <= 22) styleBGInput = styles.warm
		else styleBGInput = styles.hot
		return styleBGInput
	}
	return (
				<>
					<div className="render-body">
						<label> Введіть температуру:
							<input type="number" value = {temperature}  onChange={handleInput}></input>
						</label>
					</div>
				</>
	)
}

export function TemperatureColorChange() {
	return (
		<>
			<Task />
			<Temperature />
		</>
	)
}