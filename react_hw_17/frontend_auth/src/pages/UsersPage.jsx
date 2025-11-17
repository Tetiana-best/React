import { UserList } from '@/widgets/userList/UserList'

import { selectAuthUser } from '@/features/auth'
import { roles } from '@/shared/config/roles'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

import AddUserButton from '@/features/user/add-user/ui/addUserButton'

export default function UsersPage() {
  const user = useSelector(selectAuthUser)

  const navigate = useNavigate()

  if (!user || user.role !== roles.admin) {
    return (
      <div>
        Доступ заборонено. Ця сторінка доступна лише для адміністратора.
      </div>
    )
  }

  return (
    <div>
      <h1>Користувачі</h1>
		<AddUserButton /> 
      <UserList />
    </div>
  )
}
