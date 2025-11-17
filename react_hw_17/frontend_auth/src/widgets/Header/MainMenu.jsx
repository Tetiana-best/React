import { selectAuthUser } from '@/features/auth/api/authSlice'
import { getPagesObjectList } from '@/shared/config/routes/frontRoutes'
import { useSelector } from 'react-redux'
import { Link } from 'react-router'

export function MainMenu() {
  const user = useSelector(selectAuthUser)

  // Фільтруємо маршрути, які потрібно показати в меню (ті, що мають title)
  // І враховуємо requireAuth і ролі

  const allowedRoutes = getPagesObjectList().filter(({ meta }) => {
    if (!meta.isInMenu) return false
    if (!meta.requireAuth) return true
    if (!user) return false
    if (!meta.roles) return true
    return meta?.roles.includes(user?.role)
  })

  return (
    <nav>
      {allowedRoutes.map(({ path, meta }) => (
        <Link key={path} to={path} className="menu-link">
          {meta.title}
        </Link>
      ))}
    </nav>
  )
}
