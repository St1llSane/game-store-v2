import { BsPlusLg } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { cartSelector, removeFromCart } from '../../redux/slices/cartGamesSlice'
import { setIsVisible } from '../../redux/slices/cartPreviewSlice'
import './cart-preview-item.scss'

function CartPreviewItem({ game }) {
  const dispatch = useDispatch()
  const cart = useSelector(cartSelector)

  const removeGameHandler = () => {
    console.log(cart.length)
    if (cart.length <= 1) {
      dispatch(setIsVisible(false))
    }
    dispatch(removeFromCart(game.id))
  }

  return (
    <li className="cart-preview-item">
      <img src={game.img} alt="game_img" />
      <div className="cart-preview-item__content">
        <div className="cart-preview-item__info">
          <h6>{game.name}</h6>
          <span>{game.price} руб.</span>
        </div>
        <button onClick={removeGameHandler}>
          <BsPlusLg />
        </button>
      </div>
    </li>
  )
}

export default CartPreviewItem
