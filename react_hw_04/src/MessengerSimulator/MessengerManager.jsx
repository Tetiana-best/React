import { useState } from "react"
import styles from './Messenger.module.scss'

import MessengerList from './MessengerList'
import MessengerForm from './MessengerForm'



export function Task() {
	return (
		<>
			<div className = "task">
				<h1 className = "task__title">Задача 1 </h1>
				<p> Створити імітатор мессенджера. Є можлиість додавати/відображати повідомлення і ставити лайки (додайте стилі на свій розсуд).
				</p>
			</div>
		</>
	)
}

export default function Messenger({}) {
		const[msgUserList, setMsgUserList] = useState([])

	function onSend(newUserMessage) {
		setMsgUserList(prevList=>[...prevList,
			{
				id:new Date().getTime(),
				userMessage : newUserMessage,
				likes : 0,
				dislikes : 0,
			}
		])
	}
	function onLike(id) {
		setMsgUserList(prev=>prev.map((msg)=>msg.id===id?
		{
			...msg,
			likes: msg.likes+1,
			} : msg))
	}
	function onDislike(id) {
		setMsgUserList(prev=>prev.map((msg)=>msg.id===id?
		{
			...msg,
			dislikes: msg.dislikes+1,
			} : msg))
	}
	return (
				<>
	<div className={styles.result__container}>
				<MessengerList
					msgUserList={msgUserList}
					onLike={onLike}
					onDislike={onDislike}
				/>
			<MessengerForm onSend={onSend} />
			</div>
				</>

	)
}

export function MessengerManager() {
	return (
		<>
			<Task />
			<Messenger/>
		</>
	)
}