import { useEffect, useState } from "react"
import styles from './WordMatchingGameClass.module.scss'
import {words} from './WordMatchingList.js'

export function Task() {
	return (
		<>
			<div className = "task">
				<h1 className = "task__title">Задача 4 </h1>
				<p> Перекладач. Користувачу виводять змішані картки з словами на англійській і українській мові. Користувач поступово клікає на картки (виділяємо синьою рамкою). Якщо знайдено правильні пари карток, що відповідають одному слову, то видаляємо ці картки. Інакше - виділяємо червоною рамкою і через секунду забираємо рамку.
				</p>
			</div>
		</>
	)
}

export default function Translator({words}) {
	const[wordsList, setWordsList] = useState(words)
	const [enWordsRandomList, setEnWordsRandomList] = useState(()=>[...wordsList].sort(() => Math.random() - 0.5))
	const [uaWordsRandomList, setUaWordsRandomList] = useState(()=>[...wordsList].sort(() => Math.random() - 0.5))
	const[selectedEnWord, setSelectedEnWord] = useState(null)
	const[selectedUaWord, setSelectedUaWord] = useState(null)
	const[isCorrectPair, setIsCorrectPair] = useState(null)



	useEffect(()=>{
		if(!selectedEnWord||!selectedUaWord)return

		if (selectedEnWord?.id===selectedUaWord?.id){
			setIsCorrectPair(true)
			setEnWordsRandomList((prevList) => prevList.filter((word)=>word.id!==selectedEnWord.id))
			setUaWordsRandomList((prevList) => prevList.filter((word)=>word.id!==selectedUaWord.id))
		} 
		else setIsCorrectPair(false)

		const timeout = setTimeout(() => {
			setSelectedEnWord(null)
			setSelectedUaWord(null)
			setIsCorrectPair(null)
		},1000)

		return () => clearTimeout(timeout)
	},[selectedEnWord,selectedUaWord])

function handleEnWordClick(word) {
	if (selectedEnWord?.id === word.id) {
		setSelectedEnWord(null);
	} else {
		setSelectedEnWord(word);
	}
}
function handleUaWordClick(word) {
	if (selectedUaWord?.id === word.id) {
		setSelectedUaWord(null);
	} else {
		setSelectedUaWord(word);
	}
}
	function getClassName(word, side) {
		const isSelected = (side === 'left' && selectedEnWord?.id===word.id||side === 'right' && selectedUaWord?.id===word.id)
		
		let className = ''

		if(!isSelected) className = ''
		else if(isCorrectPair === true)
			className = styles.correctSelectedBlue
		else if (isCorrectPair === false) className = styles.wrongSelectedRed
		else className = styles.activeSelected
		return className
	}

	return (
				<>
				<h1 className={styles.result__title}>Обери пару</h1>
					<div className={styles.result__container}>
						
						<div className={styles.result__listArea}>
							<h3 className={styles.result__subtitle}>Англійські слова</h3>
							<ul className={styles.result_list}>
								{enWordsRandomList.map((word)=>(<li key={word.id + '-left'} className={`${styles.result__item} ${getClassName(word,'left')}`} onClick = {()=> handleEnWordClick(word)}>{word.en}</li>))}
							</ul>
						</div>
						<div className={styles.result__listArea}>
							<h3 className={styles.result__subtitle}>Українські слова</h3>
							<ul className={styles.result_list}>
								{uaWordsRandomList.map((word)=>(<li key={word.id + '-right'} className={`${styles.result__item} ${getClassName(word,'right')}`} onClick = {()=> handleUaWordClick(word)}>{word.ua}</li>))}
							</ul>
						</div>
					</div>
				</>
	)
}

export function WordMatchingGame() {
	return (
		<>
			<Task />
			<Translator words={words}/>
		</>
	)
}