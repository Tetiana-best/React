import { useState } from 'react'
import { useDeleteCommentMutation } from '../api/commentApi'

import { selectAuthUser } from '@/features/auth'
import { useSelector } from 'react-redux'

export function CommentItem({ comment }) {

  const [isDeleting, setIsDeleting] = useState(false)
  const [deleteComment] = useDeleteCommentMutation()

  const user = useSelector(selectAuthUser)

  const handleDelete = async () => {
		const confirmed = window.confirm(`Ви впевнені, що хочете видалити коментар ${comment.id}?`)
		if (!confirmed) return
    setIsDeleting(true)
    try {
      await deleteComment(comment.id).unwrap()
    } catch (e) {
      console.log(e)
      // handle error if needed
    }
  }

return (
	<div
		style={{borderBottom: '1px solid #ddd', padding: '5px 0',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',}}>
		<span>
			<b>{comment.authorName}</b>: {comment.text}

			{isDeleting && (
			<span style={{ marginLeft: 8, color: '#888' }}>Видаляється...</span>)}
		</span>
		{ user && (
				<button onClick={handleDelete} disabled={isDeleting} style={{ marginLeft: 10 }} className='btn-delete'>
		Видалити
		</button>
)}
	</div>
)
}
// ...existing code...
