import { useState, useMemo } from "react"
import ResultDisplay from "./ResultDisplay"
import styles from './MemoCalculator.module.scss'

export function Task() {
	return (
		<>
			<div className = "task">
				<h1 className = "task__title">Задача 1</h1>
				<ul> Оптимізація вибіркового рендеру з useMemo та React.memo:
					<li>Створіть компонент-калькулятор, який має два незалежні поля вводу: одне для числа A і одне для числа B</li>
					<li>Також є окремий компонент ResultDisplay, який відображає A + B</li>
					<li>Обгорніть ResultDisplay у React.memo()</li>
					<li>Використайте useMemo в батьківському компоненті, щоб обчислити A + B і передати цей результат до ResultDisplay</li>
					<li> Переконайтеся, що ResultDisplay ререндериться лише тоді, коли змінюються A або B, а не коли змінюється інший незалежний стан у батьківському компоненті (наприклад, лічильник, що не впливає на A чи B)</li>
				</ul>
			</div>
		</>
	)
}

export default function MemoCalc() {
	const [inpVal1, setInpVal1] = useState(0)
	const [inpVal2, setInpVal2] = useState(0)
	const [count, setCount] = useState(0)
	
	function handleFirstInp(e) {
		setInpVal1(e.target.value)
	}
	function handleSecondInp(e) {
		setInpVal2(e.target.value)
	}
	function clearInputs() {
		setInpVal1('')
		setInpVal2('')
	}
	const result = useMemo(() => {
		const a = parseFloat(inpVal1)
		const b = parseFloat(inpVal2)
		if (isNaN(a) || isNaN(b)) return
		console.log("Recalculating A + B")
		return a+b
	}, [inpVal1, inpVal2])
	return (
				<>
					<div className={styles.result__container}>
						<label>Введіть перше число
							<input type="number" value={inpVal1} onChange={handleFirstInp}></input>
						</label>
						<label>Введіть друге число
						<input type="number" value={inpVal2} onChange={handleSecondInp}></input>
						</label>
						<ResultDisplay result={result} />
						<button onClick={() => setCount(count + 1)}>Збільшити лічильник</button>
						<p>Лічильник: {count}</p>
						<button onClick={clearInputs}>Очистити</button>
				</div>
				</>
	)
}

export function MemoCalculator() {
	return (
		<>
			<Task />
			<MemoCalc/>
		</>
	)
}