import { useGetUserCartQuery } from '@/entities/cartItem/api/cartItemApi'
import { useGetUserFavoritesQuery } from '@/entities/favoriteItem'
import { selectAuthUser } from '@/features/auth/api/authSlice'
import { getPagesObjectList } from '@/shared/config/routes/frontRoutes'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Link } from 'react-router'

export function MainMenu() {

	const { t } = useTranslation()

  const user = useSelector(selectAuthUser)

	const { data: cart = {} } = useGetUserCartQuery(user?.uid, {skip: !user,})
	const { data: favorites = {} } = useGetUserFavoritesQuery(user?.uid, {skip: !user,})

	const cartCount = Object.keys(cart).filter((k) => cart[k]).length
	const favoritesCount = Object.keys(favorites).filter((k) => favorites[k]).length

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
    <nav className="bg-slate-900 text-white p-4 flex gap-4">
      {allowedRoutes.map(({ path, meta }) => (
        <Link key={path} to={path} className="relative px-3 py-1 rounded hover:bg-slate-700 transition">
           {t(`menu.${meta.menuKey}`)}
			 
			   {meta.menuKey === 'CART' && cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}

            {meta.menuKey === 'FAVORITES' && favoritesCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-500 text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {favoritesCount}
              </span>
            )}

        </Link>
      ))}
    </nav>
  )
}
