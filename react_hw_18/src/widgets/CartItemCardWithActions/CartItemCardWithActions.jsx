import CartItemCard from '@/entities/cartItem/ui/CartItemCard'
import { CartDecreaseButton, CartIncreaseButton, CartRemoveButton } from '@/features/cart'

export function CartItemCardWithActions({ userId,item}) {
	const productId = item.productId

	return (
		<CartItemCard item={item}>
				<CartDecreaseButton 
					userId={userId} 
					productId={productId} />
				<span style={{ margin: '0 8px' }}>{item.quantity || 1}</span>
				<CartIncreaseButton
					userId={userId}
					productId={productId}
					product={item}
				/>
				<CartRemoveButton 
					userId={userId} 
					productId={productId} />
			</CartItemCard>
	)
	}