import { useEffect, useState } from "react"
import styles from './CouplesForDancingClass.module.scss'
import {boys, girls} from './PairsList.js'

export function Task() {
	return (
		<>
			<div className = "task">
				<h1 className = "task__title">Задача 3</h1>
				<p>Пари для танців. Поступово вибираємо хлопця, дівчину і додаємо у обрані пари. Пару можна видалити. Поки не вибрано хлопця і дівчину кнопка «Додати» заблокована.  Якщо не вистачає хлопців або дівчат вибір також блокується.
				</p>
			</div>
		</>
	)
}

export default function Dancing({boys, girls}) {
	const[selectedBoyId, setSelectedBoyId] = useState(null)
	const[selectedGirlId, setSelectedGirlId] = useState(null)
	const[boysList, setBoysList] = useState(boys)
	const[girlsList, setGirlsList] = useState(girls)
	const[pairsList, setPairsList] = useState([])
	const [showDeleteButton, setShowDeleteButton] = useState(false)

	function handleBoyClick(id) {
		setSelectedBoyId(id)
	}
	function handleGirlClick(id) {
		setSelectedGirlId(id)
	}
	function addCoupleForDancing(id) {
		const selectedBoy = boysList.find((boy) => boy.id === selectedBoyId)
		const selectedGirl = girlsList.find((girl) => girl.id === selectedGirlId)
		if(!selectedBoy&&!selectedGirl) return
		setPairsList((prevList) => [...prevList,
			{
				id : new Date().getTime(),
				title : `${selectedBoy.name} - ${selectedGirl.name}`,
				boy: selectedBoy,
				girl: selectedGirl,
			}
		])
		setShowDeleteButton(true)
		setBoysList((prevList) => prevList.filter(boy => boy.id !== selectedBoyId))
		setGirlsList((prevList) => prevList.filter(girl => girl.id !== selectedGirlId))

		setSelectedBoyId(null)
		setSelectedGirlId(null)
	}
	function deleteCoupleForDancing(id) {
		const pairToRemove = pairsList.find((pair) => pair.id === id)
		if(!pairToRemove) return
		setBoysList((prevList) => [pairToRemove.boy, ...prevList])
		setGirlsList((prevList) => [pairToRemove.girl, ...prevList])

		setPairsList((prevList) => prevList.filter((pair) => pair.id !==id))
	}

	return (
				<>
					<div className={styles.result__container}>
								<div className={styles.result__body}>
									<div className={styles.result__listArea}>
										<h3 className={styles.result__title}>Хлопці</h3>
										<ul className={styles.result_list}>
											{boysList.map((boy)=>(<li key={boy.id} className={`${styles.result__item}  ${selectedBoyId === boy.id ?styles.selected : ''}`} onClick = {()=> handleBoyClick(boy.id)}>{boy.name}</li>))}
										</ul>
									</div>
									<div className={styles.result__listArea}>
										<h3 className={styles.result__title}>Дівчата</h3>
										<ul className={styles.result_list}>
											{girlsList.map((girl)=>(<li key={girl.id} className={`${styles.result__item}  ${selectedGirlId === girl.id ?styles.selected : ''}`} onClick = {()=> handleGirlClick(girl.id)}>{girl.name}</li>))}
										</ul>
									</div>
								</div>

								<button onClick = {()=> addCoupleForDancing() } disabled ={!selectedBoyId|| !selectedGirlId}>Створити пару</button>
								<ul className={styles.result_list}>
											{pairsList.map((pair)=>(<li key={pair.id} className={`${styles.result__item}`}>{pair.title}
								{showDeleteButton && <button onClick = {()=> deleteCoupleForDancing (pair.id)}>Розформувати пару</button>}
											</li>))}
								</ul>
					</div>
				</>
	)
}

export function CouplesForDancing() {
	return (
		<>
			<Task />
			<Dancing boys={boys} girls={girls}/>
		</>
	)
}