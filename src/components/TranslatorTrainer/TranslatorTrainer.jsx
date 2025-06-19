import { useState } from "react"
import wordItems from "./WordsList"
import styles from './TranslatorClass.module.scss'

export function Task() {
	return (
		<>
			<div className="task">
				<h1>Задача 3</h1>
				<p>Елемент тренажера англійської. Виводимо зображення елемента і слово. Користувач вводить відповідь. Якщо вірно – відтворюємо фразу «Добре. Молодець!» (і додаємо зелену рамку до елемента), якщо ні - то відтворюємо фразу «Невірно, спробуйте ще раз» (і додаємо червону рамку).</p>
			</div>
		</>
	)
}
export default function Translator() {
	const[userWord, setUserWord] = useState('')
	const[currentWord] = useState(()=>rendomItem(wordItems))
	const [message, setMessage] = useState('')
	const [borderColor, setborderColor] = useState('')

	function handlerUserWord(event) {
		setUserWord(event.target.value)
	}
	function rendomItem(wordItems) {
			let randomIndex=Math.floor(Math.random()* wordItems.length)
			return wordItems[randomIndex]
	}
	function checkAnswer() {
		if(!currentWord)return
		if (!userWord.trim()){
			setMessage('Ви не ввели переклад!')
			setborderColor('red')
			return
		}
		if (userWord.trim().toLowerCase() === currentWord.translation.toLowerCase())
		{
			setMessage('Добре. Молодець!')
			setborderColor('green')
		}
		else {
			setMessage('Невірно, спробуйте ще раз!')
			setborderColor('red')
		}
	}
// -----------------------------------------------
	return ( 
	<>
		<div style={{border: `1px solid ${borderColor}` }} className={` ${styles.container}`}>
			<div>
				{currentWord&&(
					<>
				<img src={currentWord.image}/>
				<p className={` ${styles.text}`}>{currentWord.word}</p>
				</>
			)}
			</div>
			<div className='result'>
			<label>
					Ваш переклад :{' '}
				<input type="text" value={userWord} onChange={handlerUserWord}/>
			</label>
			<button onClick={checkAnswer}>Перевірити</button>
			</div>
			<p>{message}</p>
		</div>
	</>
	)
}

export function TranslatorTrainer() {
	return (
		<>
			<Task />
			<Translator />
		</>
	)
}
