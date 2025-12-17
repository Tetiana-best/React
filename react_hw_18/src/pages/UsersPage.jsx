import { UserList } from '@/widgets/userList/UserList'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

export default function UsersPage() {

	const { t } = useTranslation()

  const role = useSelector((state) => state.auth.role)

  // if (role !== 'admin') {
  //   return <div>Доступ лише для адміністратора</div>
  // }

  return (
    <div>
      <h1>{t('UserEditPage.title')}</h1>
      <UserList />
    </div>
  )
}
