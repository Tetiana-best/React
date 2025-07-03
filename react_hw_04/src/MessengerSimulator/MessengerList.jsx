import MessengerItem from './MessengerItem'
import styles from './Messenger.module.scss'

function MessengerList({ msgUserList, onLike, onDislike}) {
	return ( 

		<div className={styles.result__headerBody}>
			{msgUserList.map((msg)=>
			<MessengerItem key={msg.id} {...msg}
			onLike = {onLike} 
			likes = {msg.likes}
			onDislike = {onDislike}
			dislikes = {msg.dislikes}
			/>)
			}
		</div>

	 );
}

export default MessengerList;