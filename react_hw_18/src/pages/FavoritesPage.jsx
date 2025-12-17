import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import FavoriteList from '../widgets/FavoriteList/FavoriteList'

export default function FavoritesPage() {

	const { t } = useTranslation()

  const user = useSelector((state) => state.auth.user)
  if (!user) return <div>{t('common.ONLY_AUTH')}</div>
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">{t('FavoritesPage.title')}</h1>
      <FavoriteList userId={user.uid} />
    </div>
  )
}
