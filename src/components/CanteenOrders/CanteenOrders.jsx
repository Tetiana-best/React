import { useState } from "react"
// import salaryItems from './SalaryItems'
import styles from './CanteenClass.module.scss'

export function Task() {
	return (
		<>
			<div className="task">
				<h1>Задача 6</h1>
				<p>На кухню поступають замовлення. Спочатку ми додаємо їх у список “Очікують на виконання”, якщо повар береться робити — замовлення переходить у список “Виконуються”,   якщо замовлення виконано — переходить у список “Готові до виносу”. Якщо натиснути на “Подано” - страва зникає з таблиці.<br/>
				Підказка: тут треба зберігати 3 масиви страв ( waitingList, processingList, completedList)
				</p>
			</div>
		</>
	)
}
export default function Canteen() {

	const[waitingList, setWaitingList] = useState(() => [])
	const [showCookButton, setShowCookButton] = useState(false)
	const[processingList, setProcessingList] = useState(() => [])
	const [showCompletButton, setShowCompletButton] = useState(false)
	const[completedList, setCompletedList] = useState(() => [])
	const [showServedButton, setShowServedButton] = useState(false)
	const[dishTitle, setDishTitle] = useState('')

	function addDishInWaiting() {
		setWaitingList((prevList) => [...prevList,
			{
				id : new Date().getTime(),
				title : dishTitle,
			}
		])
		setShowCookButton(true)
		setDishTitle('')
	}
	function addDishInProcess(id) {
		const dish = waitingList.find(task=>task.id === id)
		if(!dish) return
		setWaitingList((prevList) => prevList.filter(task => task.id !== id))
		setProcessingList((prevList) => [...prevList, dish])
		setShowCompletButton(true)
	}
	function addDishInCompleted(id) {
		const dish = processingList.find(task=>task.id === id)
		if(!dish) return
		setProcessingList((prevList) => prevList.filter(task => task.id !== id))
		setCompletedList((prevList) => [...prevList, dish])
		setShowServedButton(true)
	
	}
	function removeDishFromCompleted(id) {
		setCompletedList((prevList) => prevList.filter(task => task.id !== id))
		setShowServedButton(false)
	 }

// -----------------------------------------------
	return ( 
	<>
	<div className={` ${styles.container}`}>
		<div className={` ${styles.header}`}>
			<label>
				Назва страви
				<input type="text" value={dishTitle} onChange={(e)=> setDishTitle (e.target.value)}/>
			</label>
			<div className={` ${styles.header_button}`}>
			<button onClick = {addDishInWaiting}>Додати</button>
			</div>
		</div>
		<hr/>
		<div className={` ${styles.table}`}>
				<ul className={` ${styles.table_list}`}> 
					<h3 className={` ${styles.table_title}`}>Очікують</h3>
					{waitingList.map((dishItem) => 
						(<li key={dishItem.id} className={` ${styles.item_list}`}> {dishItem.title} 
					{showCookButton && <button onClick = {()=>addDishInProcess(dishItem.id)}>Готувати</button>}</li>))}
				</ul>
				<ul className={` ${styles.table_list}`}> 
					<h3 className={` ${styles.table_title}`}>Виконуються</h3>
					{processingList.map((dishItem) => 
						(<li key={dishItem.id} className={` ${styles.item_list}`}> {dishItem.title} 
					{showCompletButton && <button onClick = {()=>addDishInCompleted(dishItem.id)}>Приготовлено</button>}</li>))}
				</ul>
				{<ul className={` ${styles.table_list}`}> 
					<h3 className={` ${styles.table_title}`}>Готові до виносу</h3>
					{completedList.map((dishItem) => 
						(<li key={dishItem.id} className={` ${styles.item_list}`}> {dishItem.title} 
					{<button onClick = {()=>removeDishFromCompleted(dishItem.id)}>Подано</button>}</li>))}
				</ul> }
		</div>

	</div>
	</>
	)
}

export function CanteenOrders() {
	return (
		<>
			<Task />
			<Canteen />
		</>
	)
}