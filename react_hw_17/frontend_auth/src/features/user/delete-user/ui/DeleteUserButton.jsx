import { useDeleteUserMutation } from '@/entities/user'

export const DeleteUserButton = ({userId, onDeleted}) => {

	const[handleDeleteUser, {isLoading}] = useDeleteUserMutation()

	const handleClick = async () => {
		const confirmed = window.confirm(`Ви впевнені, що хочете видалити користувача ${userId}?`)
		if (!confirmed) return
		try {
			await handleDeleteUser(userId).unwrap()
			if(onDeleted) onDeleted(userId)
		} catch (error) {
			
		}
		
	}
	
	return ( 
		<button onClick={handleClick} disabled={isLoading} aria-label={`Видалити користувача ${userId}`}
		className="btn-delete">
			{isLoading ? 'Видаляється...' : 'Видалити'}
		</button>
	 );
}