import { useState } from 'react'
import { Link } from 'react-router'
import PostDetails from './PostDetails'
import PostsList from './PostsList'
import styles from './PostsPage.module.scss'

const PostsPage = () => {
  const [selectedPostId, setSelectedPostId] = useState(null)

  return (
    <div className={styles.postsPageWrapper}>
      <h2>Сторінка постів</h2>

      <PostDetails postId={selectedPostId} />
		<Link to="/posts/edit" className={styles.addPostBtn}>
        ➕ Додати новий пост
      </Link>

      <PostsList onSelect={setSelectedPostId} />
    </div>
  )
}

export default PostsPage
