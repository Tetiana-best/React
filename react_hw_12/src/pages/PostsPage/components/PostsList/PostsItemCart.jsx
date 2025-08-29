import { deletePost } from '@/store/postsThunks';
import { useDispatch } from 'react-redux';
import styles from './PostsItemCart.module.scss';

function PostsItemCart({postsData}) {

	const dispatch = useDispatch()

	const onDelete= ()=>{
			dispatch(deletePost(postsData.id))
	}

	return ( 
		<div className={styles.postItemCart}>
			<div>{postsData.title}</div>
			<div>{postsData.body}</div>
			<div className={styles['likes-author-grid']}>
				<div className={styles['likes-dislikes']}>
					<div className={styles.likes}>👍 {postsData.likesNumber?? 0}</div>
					<div className={styles.dislikes}>👎{postsData.dislikesNumber?? 0}</div>
				</div>
				<div className={styles.author}>{postsData.authorId}</div>
			</div>
			<button onClick={onDelete} className={styles.deleteBtn}>Delete</button>
		</div>
	 );
}

export default PostsItemCart