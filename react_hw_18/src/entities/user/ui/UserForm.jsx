import { roles } from '@/shared/config/roles'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function UserForm({ user = {}, onSubmit, isSubmitting, error }) {

	const { t } = useTranslation()

	const [email, setEmail] = useState(user?.email || '')
	const [displayName, setDisplayName] = useState(user?.displayName || '')
	const [role, setRole] = useState(user?.role || 'user')

  const handleSubmit = (e) => {
		e.preventDefault()
		onSubmit({...user, email, displayName, role,})
  }

  return (
	 <form onSubmit={handleSubmit}>
			<input
			  value={email}
			  onChange={(e) => setEmail(e.target.value)}
			  placeholder={t('common.EMAIL')}
			  disabled={!!user.id}
			  required
			/>
			<input
			  value={displayName}
			  onChange={(e) => setDisplayName(e.target.value)}
			  placeholder={t('common.NAME')}
			  disabled={!!user.id}
			  required
			/>
			<select value={role} onChange={(e) => setRole(e.target.value)}>
			  {Object.entries(roles).map(([key, value]) => (
				 <option key={key} value={value}>
					{value}
				 </option>
			  ))}
			</select>
			<button type="submit" disabled={isSubmitting}>
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