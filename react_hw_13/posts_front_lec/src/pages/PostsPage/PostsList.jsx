import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
import GearLoader from "@/components/GearLoader/GearLoader";
import { useState } from 'react';
import { useNavigate } from 'react-router';
import {
	useDeletePostMutation,
	useDislikePostMutation,
	useGetPostsPQuery,
	useLikePostMutation,
} from '../../api/postsApi';
import styles from './PostsList.module.scss';

const PostsList = ({ onSelect }) => {
	const [page, setPage] = useState(1)
	const { data, isLoading, isError, isFetching } = useGetPostsPQuery({ page, limit: 5 })
	const [deletePost] = useDeletePostMutation()
	const [likePost, { isLoading: liking }] = useLikePostMutation()
	const [dislikePost, { isLoading: disliking }] = useDislikePostMutation()
	
	const navigate = useNavigate()

	if (isLoading) return <p>Завантаження...</p>
	if (isError) return <ErrorMessage message="Не вдалося завантажити пости." />

	const { items, totalPages, remaining } = data

	return (
		<div className={styles.postsListWrapper}>
			{items.map((post) => (
				<div key={post.id} className={styles.postItem}>
					<strong>{post.title}</strong>
					<p>{post.body}</p>
					<div className={styles.postInfo}>
						<span>ID: {post.id}</span>
						<span>Дата: {new Date(post.publicationDate).toLocaleString()}</span>
						<span>Лайки: {post.likesNumber}</span>
						<span>Дизлайки: {post.dislikesNumber}</span>
					</div>

					<div className={styles.actions}>
						<div className={styles.left}>
							<button
								className={styles.like}
								onClick={() => likePost(post.id)}
								disabled={liking}>
								👍 Like
							</button>
							<button
								className={styles.dislike}
								onClick={() => dislikePost(post.id)}
								disabled={disliking}>
								👎 Dislike
							</button>
						</div>
						<div className={styles.right}>
							<button
								className={styles.details}
								onClick={() => onSelect(post.id)}>
								🔍 Деталі
							</button>
							<button
								className={styles.edit}
								onClick={() => navigate(`/posts/edit/${post.id}`)}>
								✏️ Редагувати
							</button>
							<button
								className={styles.delete}
								onClick={() => {
									if (window.confirm('Видалити пост?')) deletePost(post.id)
								}}>
								🗑️ Видалити
							</button>
						</div>
					</div>
				</div>
			))}

			{isFetching && <GearLoader text="Оновлення..." />}

			<div className={styles.pagination}>
				<button
					onClick={() => setPage(p => Math.max(p - 1, 1))}
					disabled={page === 1}
				>
					⬅️ Попередня
				</button>
				{[...Array(totalPages)].map((_, i) => (
					<button
						key={i}
						onClick={() => setPage(i + 1)}
						className={page === i + 1 ? styles.active : ''}
					>
						{i + 1}
					</button>
				))}
				<button
					onClick={() => setPage(p => (remaining > 0 ? p + 1 : p))}
					disabled={remaining === 0}
				>
					➡️ Наступна
				</button>
			</div>
		</div>
	)
}

export default PostsList
