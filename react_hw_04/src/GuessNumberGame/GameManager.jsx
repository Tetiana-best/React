import { useEffect, useState } from "react"
import styles from './Game.module.scss'

import NumberDisplay from './NumberDisplay'
import PlayerStatus from './PlayerStatus'

export function Task() {
	return (
		<>
			<div className = "task">
				<h1 className = "task__title">Задача 2</h1>
				<ul> Гра “Вгадай число”. Правила гри:
					<li>комп”ютер генерує трицифрове число;</li>
					<li>кожен гравець по черзі задає цифру, якої ще не було (відсліковуємо, щоб цифри не повторювалися гравцями — не дозволяємо повторно ввести (блокуємо кнопку “Зробити хід”))</li>
					<li>якщо цифру вгадано, вона відображаться у полі гри “Число”</li>
					<li>програє той, хто вгадав останню цифру</li>
					<li>Бажано відображати біля області кожного гравця цифри, які він вгадав</li>
				</ul>
			</div>
		</>
	)
}

export default function Game() {
	const [secretNumber, setSecretNumber] = useState([])
	const [guessedDigitsPlayer1, setGuessedDigitsPlayer1] = useState([]);
	const [guessedDigitsPlayer2, setGuessedDigitsPlayer2] = useState([]);
	const [disabledDigits, setDisabledDigits] = useState([])
	const [currentPlayer, setCurrentPlayer] = useState(0)
	const [gameOver, setGameOver] = useState(false)
	const [loser, setLoser] = useState(null)

	useEffect(() =>{
		setSecretNumber(generateUniqueThreeDigitNumber())
	}, [])
	function generateUniqueThreeDigitNumber() {
		const randDigits = new Set()
		while (randDigits.size < 3) {
			randDigits.add(Math.floor(Math.random()*10))
		}
		return Array.from(randDigits)
	}

	function handleCorrectGuess(digit) {
		if (currentPlayer === 0) {
			setGuessedDigitsPlayer1(prev => [...prev, digit]);
			checkGameOver(secretNumber, [...guessedDigitsPlayer1, digit], guessedDigitsPlayer2, currentPlayer);
		} else {
			setGuessedDigitsPlayer2(prev => [...prev, digit]);
			checkGameOver(secretNumber, guessedDigitsPlayer1, [...guessedDigitsPlayer2, digit], currentPlayer);
		}
	}

	function checkGameOver(secretNumber, guessedDigitsPlayer1, guessedDigitsPlayer2, currentPlayer) {
		const allGuessed = secretNumber.every(digit => guessedDigitsPlayer1.includes(digit) || guessedDigitsPlayer2.includes(digit))
		if (allGuessed) {
			setGameOver(true)
			setLoser(currentPlayer)
		}
	}

	function onMoveClick(digit) {
		if (gameOver || disabledDigits.includes(digit)) return
	
		setDisabledDigits(prev => [...prev, digit])
	
		if (secretNumber.includes(digit)) {
			handleCorrectGuess(digit)
		 }
		setCurrentPlayer(prev => (prev + 1) % 2)
	}
	return (
				<>
					<div className={styles.result__container}>
						<h2 className={styles.result__digitTitle}>Таємне число</h2>
							<NumberDisplay secretNumber={secretNumber} guessedDigitsPlayer1={guessedDigitsPlayer1} guessedDigitsPlayer2={guessedDigitsPlayer2}/>
							<PlayerStatus 
								currentPlayer={currentPlayer} 
								onMoveClick={onMoveClick} 
								disabledDigits={disabledDigits} 
								guessedDigitsPlayer1={guessedDigitsPlayer1} 
								guessedDigitsPlayer2={guessedDigitsPlayer2}/>

							{gameOver && <h3 className={styles.loserText}>Програв гравець {loser + 1}</h3>}
					</div>
				</>
	)
}

export function GameManager() {
	return (
		<>
			<Task />
			<Game/>
		</>
	)
}