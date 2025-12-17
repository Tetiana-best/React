import FavoriteItemCard from '@/entities/favoriteItem/ui/FavoriteItemCard';
import { CartAddButton } from '@/features/cart';
import { FavoriteRemoveButton } from '@/features/favorites';

export function FavoriteItemCardWithActions({ item, userId }) {
	return ( 
		<FavoriteItemCard item={item}>
			<FavoriteRemoveButton 
				userId={userId} 
				productId={item.productId}/>

			<CartAddButton product={item} userId={userId} />
		</FavoriteItemCard>
	 );
}