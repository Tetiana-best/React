import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
import GearLoader from "@/components/GearLoader/GearLoader";
import Spinner from '@/components/Spinner/Spinner';
import { useEffect, useState } from "react";
import { useGetPostByIdQuery } from '../../api/postsApi';
import styles from './PostDetails.module.scss';

const PostDetails = ({ postId }) => {
  const {data: post, isLoading, isError, isFetching} = useGetPostByIdQuery(postId, {
    skip: !postId,})

	 const [showLoader, setShowLoader] = useState(false)

	 	useEffect(() => {
    if (isLoading) {
      setShowLoader(true)
    } else if (post) {
      const timer = setTimeout(() => setShowLoader(false), 1500)
      return () => clearTimeout(timer)
    }
  }, [isLoading, post])

  if (!postId) return <p>Оберіть пост, щоб побачити деталі.</p>
  if (isLoading) return <Spinner />
  if (isError) return <ErrorMessage message="Помилка завантаження деталей поста." />
//   if (showLoader) return <GearLoader text="Оновлення деталей..." />

  return (
    <div className={styles.postDetails}>
      <h3>{post.title}</h3>
		{isFetching && <GearLoader text="Оновлення деталей..." />}
      <p>🔢 ID: {post.id}</p>
      <p>📅 Дата публікації : {new Date(post.publicationDate).toLocaleString()}</p>
      <p>Лайки 👍: {post.likesNumber}</p>
      <p>Дислайки 👎: {post.dislikesNumber}</p>
      <p>📝 {post.body || 'Без опису 😢'}</p>
    </div>
  )
}

export default PostDetails
