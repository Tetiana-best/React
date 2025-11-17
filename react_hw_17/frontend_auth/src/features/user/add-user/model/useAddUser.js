import { useCreateUserMutation } from '@/entities/user'
import { frontRoutes } from '@/shared/config/routes/frontRoutes'
import { useNavigate } from 'react-router'

export function useAddUser() {
	const [createUser, { isLoading }] = useCreateUserMutation()
	const navigate = useNavigate()

	const addUser = async ( userData ) => {
		try {
			await createUser(userData).unwrap()
				navigate(frontRoutes.pages.UsersPage.navigationPath)
			return true
		} catch (e) {
			console.error('Failed to add user:', e)
			return false
		}
	}

	return { addUser, isLoading }
}