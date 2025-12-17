import { UserEditForm } from '@/features/users'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router'
import { useGetAllUsersQuery } from '../entities/user/api/userApi'
import { frontRoutes } from '../shared/config/routes/frontRoutes'

export default function UserEditPage() {

	const { t } = useTranslation()

  const { id } = useParams()
  const navigate = useNavigate()
  const { data: users = [], isLoading } = useGetAllUsersQuery()
  const user = users.find((u) => u.id === id)

  const handleSuccess = () => {
    navigate(frontRoutes.pages.UsersPage.navigationPath)
  }

  if (isLoading) return <div>Завантаження...</div>

  return (
    <div>
      <h1>{t('UsersPage.title')}</h1>
      <UserEditForm user={user} onSuccess={handleSuccess} />
    </div>
  )
}
