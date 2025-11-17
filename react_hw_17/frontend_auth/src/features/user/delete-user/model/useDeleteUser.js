import { useDeleteUserMutation } from '@/entities/user'
import { useState } from 'react'

export const useDeleteUser = () => {

	const [isDeleting, setIsDeleting] = useState(false)
	const[deleteUser, {isLoading, error}] = useDeleteUserMutation()

		const handleDelete = async (userId) => {
			setIsDeleting(true)
			try {
				await deleteUser(userId).unwrap()
			} catch (e) {
				console.log(e)
				// handle error if needed
			}
			finally {
				setIsDeleting(false)
		}
	}
	
	return {handleDelete, isLoading, isDeleting, error}
}