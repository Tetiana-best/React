import { useState } from 'react';
import styles from './Game.module.scss'

function PlayerStatus({currentPlayer, onMoveClick, disabledDigits, guessedDigitsPlayer1, guessedDigitsPlayer2}) {
	const[inputPlayer0, setInputPlayer0] = useState('') 
	const[inputPlayer1, setInputPlayer1] = useState('') 

	function onChangeInput0(e) {
		setInputPlayer0(e.target.value)
	}
	function onChangeInput1(e) {
		setInputPlayer1(e.target.value)
	}
	function handleClick0() {
		const digit = Number(inputPlayer0)
		if(!isNaN(digit) && digit >= 0 && digit <=9 && !disabledDigits.includes(digit)){
			onMoveClick(digit)
			setInputPlayer0('')
		}
	}
	function handleClick1() {
		const digit = Number(inputPlayer1)
		if(!isNaN(digit) && digit >= 0 && digit <=9 && !disabledDigits.includes(digit)){
			onMoveClick(digit)
			setInputPlayer1('')
		}
	}
	return ( 
		<div className={styles.player__container}>
			<div className={styles.player__body}>
				<h3 className={styles.player__titel}>Гравець 1</h3>
				<div className={styles.player__inputArea}>
					<div className={styles.player__subtitleDigit}>Цифра</div>
					<input type="number" min='0' max='9' value={inputPlayer0} onChange={onChangeInput0} />
				</div>
				<p>Вгадані цифри: {guessedDigitsPlayer1.join(', ') || ''}</p>
				<button onClick={handleClick0} disabled={currentPlayer!==0 || disabledDigits.includes(parseInt(inputPlayer0))}>Зробити хід</button>
			</div>
			<div className={styles.player__body}>
			<h3 className={styles.player__titel}>Гравець 2</h3>
			<div className={styles.player__inputArea}>
				<div className={styles.player__subtitleDigit}>Цифра</div>
				<input type="number" min='0' max='9' value={inputPlayer1} onChange={onChangeInput1} />
			</div>
			<p>Вгадані цифри: {guessedDigitsPlayer2.join(', ') || ''}</p>
			<button onClick={handleClick1} disabled={currentPlayer!==1 || disabledDigits.includes(parseInt(inputPlayer1))}>Зробити хід</button>
		</div>
	</div>

	 );
}

export default PlayerStatus;