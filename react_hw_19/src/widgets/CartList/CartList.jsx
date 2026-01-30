import { useTranslation } from 'react-i18next'
import { useGetUserCartQuery } from '../../entities/cartItem/api/cartItemApi'
import { CartItemCardWithActions } from '../CartItemCardWithActions'

export default function CartList({ userId }) {

	const { t } = useTranslation()

  const { data: cart = {}, isLoading } = useGetUserCartQuery(userId)

	//1)Превращаем объект → массив, фильтруем пустые
	const itemEntries  = Object.entries(cart).filter(([_, item]) => item)

	//2)СТАБИЛЬНО СОРТИРУЕМ, чтобы React никогда не путал местами строки
	//Это фиксирует "прыгание" товаров и дублирование

	const sortedItems = [...itemEntries].sort(([a], [b]) =>
		a.localeCompare(b)
	)

	//3)Добавляем productId ВНУТРЬ item,
	//иначе React думает, что у элементов одинаковые ключи

	const normalizedItems = sortedItems.map(([productId, item]) => ({
	  ...item, productId,}))

  // 4) Считаем сумму (после нормализации)

  const total = normalizedItems.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
    0
  )

  if (isLoading) return <div>{t('common.LOADING')}</div>

  return (
    <div>
      {normalizedItems.length === 0 && <div>{t('common.CART_EMPTY')}</div>}
      {normalizedItems.map((item) => (
        		  <CartItemCardWithActions
						key={item.productId}
						item={item}
						userId={userId}
					 />
      ))}
      {normalizedItems.length > 0 && (
        <div style={{ marginTop: 16, fontWeight: 'bold' }}>
          {t('common.TOTAL')}: {total}
        </div>
      )}
    </div>
  )
}
