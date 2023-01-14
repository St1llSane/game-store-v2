import { useSelector } from 'react-redux'
import { cartSelector } from '../../../redux/slices/cartGamesSlice'
import './cart-total.scss'

function CartTotal({ children }) {
  const cart = useSelector(cartSelector)
  const cartTotalPrice = cart.reduce((summ, game) => summ + game.price, 0)

  return (
    <div className="cart-total">
      <ul className="cart-total__info">
        <li className="cart-total__info-item">
          <div>Товаров:</div>
          <span></span>
          <div>{cart.length} шт.</div>
        </li>
        <li className="cart-total__info-item">
          <div>К оплате:</div>
          <span></span>
          <div>{cartTotalPrice} руб.</div>
        </li>
      </ul>
      {children}
    </div>
  )
}

export default CartTotal
