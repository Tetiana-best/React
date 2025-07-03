import styles from './Messenger.module.scss'

function MessengerItem({id,userMessage, likes, dislikes, onLike,onDislike}) {

	return ( 
		<div className={styles.result__headerItem}>
			<div>{userMessage}</div>
			<div>
				<button onClick={() => onLike(id)}>👍</button><span>{likes}</span>
				<button onClick={() => onDislike(id)}>👎</button><span>{dislikes}</span>
			</div>
			
		</div>
	 )
}

export default MessengerItem;