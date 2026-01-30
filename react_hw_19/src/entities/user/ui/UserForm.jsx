import useEditUserForm from '@/features/users/user-edit/model/useEditUserForm'
import { roles } from '@/shared/config/roles'
import Input from '@/shared/ui/Input/Input'
import Select from '@/shared/ui/Select/Select'
import { useTranslation } from 'react-i18next'

export default function UserForm({ user = {}, onSubmit, error }) {

	const { t } = useTranslation()

		 const {
			register,
			handleSubmit,
			control,
			field: { Controller, errors },
			reset,
			formState: { isSubmitting, isValid },
		 } = useEditUserForm(user)

	const submit = async (values) => {
		onSubmit({...user, ...values})
	}

  return (
	 <form onSubmit={handleSubmit(submit)} className="mx-auto max-w-md">

			{/* EMAIL */}
			<Input
				label={t('common.EMAIL')}
				placeholder={t('common.EMAIL')}
				error={t(errors.email?.message)}
				disabled={!!user.id}
				{...register('email')}
			/>

			{/* NAME */}
			<Input
			label={t('common.NAME')}
			placeholder={t('common.NAME')}
			error={t(errors.displayName?.message)}
			disabled={!!user.id}
			{...register('displayName')}
			/>

			{/* ROLE — через Controller */}
			<Controller
				control={control}
				name="role"
				render={({ field }) => (
					<Select
						label={t('common.ROLE')}
						error={t(errors.role?.message)}
						options={Object.entries(roles).map(([key, value]) => ({
								value,
								label: t(`roles.${value}`),
						}))}
						{...field}
					/>
				)}
			/>
			<button type="submit" disabled={isSubmitting || !isValid}>
			  {user.id ? t('common.SAVE') : t('common.ADD')}
			</button>
			{error && (
			  <div style={{ color: 'red' }}>
				 {error || t('common.ERROR')}
			  </div>
			)}
		 </form>
  )
}