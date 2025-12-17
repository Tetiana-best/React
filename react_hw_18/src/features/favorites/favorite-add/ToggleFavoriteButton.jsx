import { useAddToFavoritesMutation, useGetUserFavoritesQuery, useRemoveFromFavoritesMutation } from '@/entities/favoriteItem';

export default function ToggleFavoriteButton({ product, userId }) {

	const { data: favorites = {} } = useGetUserFavoritesQuery(userId)
	const [addToFavorites , { isLoading: adding }] = useAddToFavoritesMutation()
	const [removeFromFavorites , { isLoading: removing }] = useRemoveFromFavoritesMutation()
	
	const isInFavorites = Boolean(favorites[product.id])

	const handleClick = () => {
		if (isInFavorites) {
			removeFromFavorites({ userId, productId: product.id });
		} else {
			addToFavorites({ product, userId, productId: product.id })
	 	}
	}
	return ( 
		<button 
			disabled={adding || removing} 
			onClick={handleClick}>
				{isInFavorites ? '💔' : '❤️'}
		</button>
	 );
}
