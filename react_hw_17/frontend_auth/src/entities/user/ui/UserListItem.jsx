import { DeleteUserButton } from '@/features/user/delete-user'
import { roles } from '@/shared/config/roles'

export function UserListItem({ user, authUser, onDeleted }) {

  return (
		<>
			<div style={{ 
				display: 'flex', 
				justifyContent: 'space-between', 
				alignItems: 'center',
				borderBottom: '1px solid #ccc', 
				padding: '8px 0' 
			 }}>
				<strong>{user.name}</strong> — {user.email} — Роль: {user.role}
			 {authUser?.role === roles.admin && 
				<DeleteUserButton userId={user.id} onDeleted={onDeleted} />}
			</div>
			
		</>
	)
}
