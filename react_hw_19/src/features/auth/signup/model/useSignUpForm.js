import { signUpSchema } from '@/entities/user/api/signUpValidation'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMemo } from 'react'
import { Controller, useForm } from 'react-hook-form'

const defaultValues = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

export const useSignUpForm = () => {
  const form = useForm({
	 mode: 'onBlur',
	 defaultValues,
	 resolver: yupResolver(signUpSchema ),
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

export default useSignUpForm
