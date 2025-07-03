import styles from './Game.module.scss'

function NumberDisplay({secretNumber, guessedDigitsPlayer1, guessedDigitsPlayer2}) {

	const allGuessed = [...guessedDigitsPlayer1, ...guessedDigitsPlayer2];

	return ( 
		<div className={styles.result__digitArea}>
			{secretNumber.map((digit, index) => (
				<div key = {index} className={styles.result__digit}>
				{allGuessed.includes(digit) ? digit : ''}
			</div>))}
		</div>
	 );
}

export default NumberDisplay;