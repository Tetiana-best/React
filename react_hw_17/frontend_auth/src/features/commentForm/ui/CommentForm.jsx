import { useState } from 'react'
import { useComment } from '../model/useComment'

export function CommentForm({ postId }) {
	const [content, setContent] = useState('')
	const { addComment, isLoading } = useComment()

	const onSubmit = async (e) => {
		e.preventDefault()
		if (!content.trim()) return

		await addComment({ postId, text: content })
		setContent('')
}
  return (
    <form onSubmit={onSubmit} style={{ marginTop: 10 }}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={3}
        placeholder="Напишіть коментар..."
        required
        style={{ width: '100%', backgroundColor: 'grey', color: 'black' }}
      />
      <button className='btn-adduser' type="submit" disabled={isLoading}>
        Додати коментар
      </button>
    </form>
  )
}





// import { useCreateCommentMutation } from '@/entities/post/comments/api/commentApi'
// import { useState } from 'react'
// export function CommentForm({ postId }) {
// const [content, setContent] = useState('')
// const [createComment, { isLoading }] = useCreateCommentMutation()
// const onSubmit = async (e) => {
// e.preventDefault()
// if (!content.trim()) return
// await createComment({ postId, text: content })
// setContent('')
// }
// return (
// <form onSubmit={onSubmit} style={{ marginTop: 10 }}>
// <textarea
// value={content}
// onChange={(e) => setContent(e.target.value)}
// rows={3}
// placeholder="Напишіть коментар..."
// required
// style={{ width: '100%', backgroundColor: 'grey', color: 'black' }}
// />
// <button type="submit" disabled={isLoading}>
// Додати коментар
// </button>
// </form>
// )
// }



























