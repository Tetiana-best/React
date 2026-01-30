import { editUserSchema } from '@/entities/user/api/editUserValidation'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMemo } from 'react'
import { Controller, useForm } from 'react-hook-form'

const defaultValues = {
  displayName: '',
  email: '',
  role: '',
}

export const useEditUserForm = (user) => {
  const form = useForm({
	 mode: 'onBlur',
	 defaultValues: {
			displayName: user?.displayName || '',
			email: user?.email || '',
			role: user?.role || '',
		},
	 resolver: yupResolver(editUserSchema ),
  })

  const field = useMemo(
	 () => ({
		Controller,
		errors: form.formState.errors,
	 }),
	 [form.formState.errors]
  )

  return { ...form, field }
}

export default useEditUserForm
