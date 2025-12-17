import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import CartList from '../widgets/CartList/CartList'

export default function CartPage() {
	const { t } = useTranslation()

  const user = useSelector((state) => state.auth.user)
  if (!user) return <div>{t('common.ONLY_AUTH')}</div>
  return (
    <div>
      <h1>{t('CartPage.title')}</h1>
      <CartList userId={user.uid} />
    </div>
  )
}
