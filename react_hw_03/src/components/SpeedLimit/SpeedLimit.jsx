import { useEffect, useState } from "react"
import styles from './SpeedLimitClass.module.scss'

export function Task() {
	return (
		<>
			<div className = "task">
				<h1 className = "task__title">Задача 2</h1>
				<ul className = "task__list list">Вводиться дозволена швидкість і поточна швидкість авто. Якщо:
					<li className = "list__item">не введено дозволену швидкість, то елемент введення поточної швидкості заблокований,</li>
					<li className = "list__item">швидкість менше 50% дозволеної, то колір input – оранжевий,</li>
					<li className = "list__item">якщо від 50% до 100% - зелений,</li>
					<li className = "list__item">вище 100% - червоний.</li>
					<li className = "list__item">Якщо значення вище 90% починає блимати повідомлення «Увага!»</li>
				</ul>
			</div>
		</>
	)
}

export default function Speed() {
	const[currentSpeed, setCurrentSpeed] = useState('')
	const[limitSpeed, setLimitSpeed] = useState('')
	const [message, setMessage] = useState('')

		function validateNumberInput(value) {
			let resValidateInput
			if(value === ''|| isNaN(value)) resValidateInput = ''
			else if(Number(value) < 0) resValidateInput = ''
			else resValidateInput = Number(value)
			
			return resValidateInput
		}
	function handleCurrentSpeedInput(event) {
		const currentSpeedVal = event.target.value
		setCurrentSpeed(validateNumberInput(currentSpeedVal))
		setMessage('')

	}
	function handleLimitSpeedInput(event) {
		const limitSpeedVal = event.target.value
		setLimitSpeed (validateNumberInput(limitSpeedVal))
		setMessage('')
	}
	useEffect(() => {
		if(!currentSpeed|| !limitSpeed) return
		if(currentSpeed >= 0.9 * limitSpeed){
			const idInterval = setInterval(() => {
				setMessage((prev)=>(prev ? '' : 'Увага!'))
		}, 1000);
		
		return () => clearInterval(idInterval)}
			else {
				setMessage('')
			}
		}, [currentSpeed, limitSpeed])

	function getLimitSpeed() {
		if(currentSpeed===''||limitSpeed==='') return
		let styleInputColor = ''
		if(currentSpeed < 0.5 * limitSpeed){
			styleInputColor = styles.minLimitSpeedLimit
		} 
		else if((currentSpeed >= 0.5 * limitSpeed) && (currentSpeed <= 1* limitSpeed)){
			styleInputColor = styles.maxLimitSpeedLimit
		} 
		else {
			styleInputColor = styles.exceedingSpeedLimit
		}
		return styleInputColor
	}
	return (
				<>
					<div className={styles.result__container}>
							<label> Введіть поточну швидкість:
								<input type="number" value = {currentSpeed} onChange={handleCurrentSpeedInput} disabled={!limitSpeed&&limitSpeed !== 0} className={getLimitSpeed()}></input>
						</label>
						
						<label> Введіть обмеження швидкості:
							<input type="number" value = {limitSpeed} onChange={handleLimitSpeedInput}></input>
						</label>
						<p className={styles.result__msg}>{message}</p>
					</div>
				</>
	)
}

export function SpeedLimit() {
	return (
		<>
			<Task />
			<Speed />
		</>
	)
}