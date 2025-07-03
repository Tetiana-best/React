import { useState } from "react"
import styles from './Messenger.module.scss'

function MessengerForm({ onSend }) {
	const[userMessage, setUserMessage] = useState('')

	function handleInputUserMessage(e) {
		setUserMessage(e.target.value)
	}
	function handleSend() {
		if(userMessage.trim()==='') return
		onSend(userMessage)
		setUserMessage('')
		
	}
	return ( 
		<div className={styles.result__footer}>
			<input type="text" value={userMessage} onChange={handleInputUserMessage} placeholder="New Message"></input>
			<button onClick={() => handleSend()}>Send ➤ </button>
		</div>
	 )
}

export default MessengerForm;