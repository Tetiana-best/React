import { useRemoveFromFavoritesMutation } from '@/entities/favoriteItem';
import { useTranslation } from 'react-i18next';

export default function FavoriteRemoveButton({ productId, userId }) {

	const { t } = useTranslation()

	const [ removeFromFavorites, { isLoading }] = useRemoveFromFavoritesMutation()
	return ( 
		<button 
			disabled={isLoading} 
			onClick={()=> removeFromFavorites({ productId, userId })}>
				💔 {t('favorites.REMOVE')}
		</button>
	 );
}