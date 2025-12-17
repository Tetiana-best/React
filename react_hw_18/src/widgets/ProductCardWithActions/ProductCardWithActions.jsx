import ProductCard from '@/entities/product/ui/ProductCard'
import CartAddButton from '@/features/cart/cart-add/CartAddButton'
import ToggleFavoriteButton from '@/features/favorites/favorite-add/ToggleFavoriteButton'
import { ProductDeleteButton, ProductEditButton } from '@/features/products'
import { roles } from '@/shared/config/roles'

export function ProductCardWithActions({ product, user, role, onDeleted }) {
  const isOwner = user && product.ownerId === user.uid
  const canEdit = role === roles.admin || (role === roles.manager && isOwner)
  const canDelete = role === roles.admin || (role === roles.manager && isOwner)
  const canAddToCart = role === roles.user
  const canFavorite = role === roles.user

  return (
    <ProductCard product={product}>
      {canAddToCart && <CartAddButton product={product} userId={user.uid} />}
      {canEdit && <ProductEditButton productId={product.id} />}
      {canDelete && <ProductDeleteButton productId={product.id} onDeleted={onDeleted} />}
      {canFavorite && <ToggleFavoriteButton userId={user.uid} product={product} />}
    </ProductCard>
  )
}
