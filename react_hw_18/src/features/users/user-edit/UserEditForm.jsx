import {
	useAddUserMutation,
	useUpdateUserRoleMutation,
} from '@/entities/user/api/userApi'
import UserForm from '@/entities/user/ui/UserForm'

export function UserEditForm({ user = {}, onSuccess }) {

  const [updateUserRole, { isLoading: isUpdating, error: updateError }] =
    useUpdateUserRoleMutation()
  const [addUser, { isLoading: isAdding, error: addError }] =
    useAddUserMutation()

  const handleSubmit = async ({email, displayName, role} ) => {

    if (user.id) {
      await updateUserRole({ uid: user.id, role })
    } else {
      await addUser({ email, displayName, role })
    }
	 onSuccess && onSuccess()
  }

  return (
		<UserForm 
	 			user={user} 
				onSubmit={handleSubmit} 
				isSubmitting={isUpdating || isAdding}
				error = {updateError?.data?.message || addError?.data?.message}/>
  )
}
