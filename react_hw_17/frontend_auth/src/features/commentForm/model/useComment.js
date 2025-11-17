import { useCreateCommentMutation } from '@/entities/post/comments/api/commentApi'

export function useComment() {
	const [createComment, { isLoading }] = useCreateCommentMutation()

	const addComment = async ({ postId, text }) => {
		return await createComment({ postId, text }).unwrap()
	}

	return { addComment, isLoading }
}
