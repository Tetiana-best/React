import { useGetUserFavoritesQuery } from '@/entities/favoriteItem'
import { useTranslation } from 'react-i18next'
import { FavoriteItemCardWithActions } from '../FavoriteItemCardWithActions/FavoriteItemCardWithActions'

export default function FavoriteList({ userId }) {

	const { t } = useTranslation()

	  const { data: favorites = {}, isLoading } = useGetUserFavoritesQuery(userId)
	
		//1)Превращаем объект → массив, фильтруем пустые.
		// Добавляем productId ВНУТРЬ item,
		//иначе React думает, что у элементов одинаковые ключи

		const items  = Object.entries(favorites).filter(([_, item]) => item)
		.map(([productId, item]) => ({...item, productId,}))

		if (isLoading) return <div>{t('common.LOADING')}</div>
	
	return ( 
		<div>
			{items.length === 0 && <div>{t('common.FAVORITES_EMPTY')}</div>}
			 {items.map((item) => (
							  <FavoriteItemCardWithActions
									key={item.productId}
									item={item}
									userId={userId}
								 />
					))}
		</div>
	 );
}

