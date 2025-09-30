import { useDispatch } from 'react-redux'
import { addToCart } from '../model/cartSlice'

export const AddToCartButton = ({ product }) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(addToCart(product))
  }

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 rounded-lg bg-green-600 text-white font-semibold 
                 hover:bg-green-700 active:bg-green-800 transition-colors duration-200"
    >
      Add to Cart
    </button>
  )
}

