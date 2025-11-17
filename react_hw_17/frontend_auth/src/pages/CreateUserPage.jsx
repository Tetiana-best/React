import { useAddUser } from '@/features/user/add-user'
import { UserForm, useUserForm } from '@/features/user/user-form'

export default function CreateUserPage() {
	const { formData, setFormData, handleChange } = useUserForm()
	const { addUser, isLoading } = useAddUser()

	const onSubmit = async (e) => {
    e.preventDefault()
    await addUser(formData)
  }

	return (
		<div className="p-6">
			<UserForm 
			formData={formData}
			handleChange={handleChange}
			onSubmit={onSubmit}
			isLoading={isLoading}/>
		</div>
	)
}
