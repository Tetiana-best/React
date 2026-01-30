import { frontRoutes } from '@/shared/config/routes/frontRoutes'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'
import { useSignUp } from '../model/useSignUp'
import { useSignUpForm } from '../model/useSignUpForm'

import Input from '@/shared/ui/Input/Input'
import { useState } from 'react'

export default function SignUpForm({ onSuccess }) {

	const [showPassword, setShowPassword] = useState({
	password: false,
	confirm: false,
})

	const { t } = useTranslation()
	const navigate = useNavigate()

 const {
    signUp,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useSignUp()

	 const {
		register,
		handleSubmit,
		control,
		field: { Controller, errors },
		// setValue,
		// watch,
		reset,
		formState: { isSubmitting, isValid },
	 } = useSignUpForm()

  const submit = async (values) => {
   //  try {
      await signUp(values)
      reset()
    	onSuccess?.()
      navigate(frontRoutes.pages.HomePage.navigationPath)
   //  } catch (err) {
   //    setErrorMessage(err?.message || t('signUpForm.ERROR'))
   //  }
  }

  return (
    <form onSubmit={handleSubmit(submit)} className="w-full flex flex-col gap-2">

		{/* Обычный input через register */}
		<Input
        label={t('signUpForm.NAME_LABEL')}
        placeholder={t('signUpForm.NAME_PLACEHOLDER')}
        error={t(errors.displayName?.message)}
        {...register('displayName')}
        className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:border-blue-400 dark:focus:ring-blue-900 outline-none bg-gray-50 dark:bg-gray-800 text-base text-gray-900 dark:text-gray-100 transition"
      />

		 {/* Controller — для демонстрации */}
		 <Controller
			control={control}
			name="email"
			render={({ field }) => (
			<Input
				label={t('signUpForm.EMAIL_LABEL')}
				placeholder={t('signUpForm.EMAIL_PLACEHOLDER')}
				error={t(errors.email?.message)}
				{...field}
				className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:border-blue-400 dark:focus:ring-blue-900 outline-none bg-gray-50 dark:bg-gray-800 text-base text-gray-900 dark:text-gray-100 transition"
			/>
	)}
/>
	<div style={{ position: 'relative', width: '100%'}}>
		{/* Обычный input через register */}
			<Input
				label={t('signUpForm.PASSWORD_LABEL')}
				placeholder={t('signUpForm.PASSWORD_PLACEHOLDER')}
				type={showPassword.password ? 'text' : 'password'}
				error={t(errors.password?.message)}
				{...register('password')}
			/>
		<button
			type="button"
			onClick={() => setShowPassword(prev => ({ ...prev, password: !prev.password }))}
			style={{
			position: 'absolute',
			right: 8,
			top: '50%',
			transform: 'translateY(-44%)',
			border: 'none',
			background: 'transparent',
			cursor: 'pointer',
			fontSize: 18,}}
			>
			{showPassword.password ? '❌' : '👁️'}
		</button>
	</div>
	<div style={{ position: 'relative', width: '100%'}}>
					{/* Обычный input через register */}
			<Input
				label={t('signUpForm.CONFIRM_PASSWORD_LABEL')}
				placeholder={t('signUpForm.CONFIRM_PASSWORD_PLACEHOLDER')}
				type={showPassword.confirm ? 'text' : 'password'}
				error={t(errors.confirmPassword?.message)}
				{...register('confirmPassword')}
			/>
		<button
			type="button"
			onClick={() => setShowPassword(prev => ({ ...prev, confirm: !prev.confirm }))}
			style={{
			position: 'absolute',
			right: 8,
			top: '50%',
			transform: 'translateY(-44%)',
			border: 'none',
			background: 'transparent',
			cursor: 'pointer',
			fontSize: 18,}}
			>
			{showPassword.confirm ? '❌' : '👁️'}
		</button>
	</div>
      <button
        type="submit"
        disabled={isSubmitting || isLoading || !isValid}
        className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold text-base shadow-md hover:from-blue-600 hover:to-indigo-600 dark:bg-gradient-to-r dark:from-blue-700 dark:to-indigo-800 dark:text-gray-100 transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {t('signUpForm.SUBMIT')}
      </button>
		<button type='button' onClick={()=>reset()}
			className="px-4 py-3 rounded-lg border border-gray-300">
			{t('common.RESET')}</button>
			
		{isSuccess && (
		<div className="text-green-600 text-sm">
			{t('signUpForm.SUCCESS')}
		</div>
		)}

		{isError && (
		<div className="text-red-500 text-sm">
			{error?.data?.message || t('common.ERROR')}
		</div>
		)}

    </form>
  )
}
