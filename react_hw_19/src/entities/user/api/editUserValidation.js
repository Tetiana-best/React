import { ROLE_VALUES } from '@/shared/config/roles'
import * as yup from 'yup'

export const editUserSchema = yup.object().shape({

	displayName: yup
		.string()
		.trim()
		.min(2, 'validation.NAME_MIN')
		.max(30, 'validation.NAME_MAX')
		.required('validation.NAME_REQUIRED'),

	email: yup.
			string()
			.email('validation.EMAIL_INVALID')
			.required('validation.EMAIL_REQUIRED'),

	role: yup
		.string()
		.oneOf(ROLE_VALUES, 'validation.ROLE_INVALID')
		.required('validation.ROLE_REQUIRED'),
})
