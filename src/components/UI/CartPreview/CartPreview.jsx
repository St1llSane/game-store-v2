import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  isVisibleSelector,
  setIsVisible,
} from '../../../redux/slices/cartPreviewSlice'
import { cartSelector } from '../../../redux/slices/cartGamesSlice'
import './cart-preview.scss'
import CartPreviewItem from '../../CartPreviewItem'
import CartTotal from '../CartTotal'

function CartPreview() {
  const dispatch = useDispatch()
  const isCartPreviewVisible = useSelector(isVisibleSelector)
  const cart = useSelector(cartSelector)

  const hideCartPreviewHandler = () => {
    dispatch(setIsVisible(false))
  }

  return (
    <div
      className={`cart-preview ${
        isCartPreviewVisible ? 'cart-preview--active' : ''
      }`}
    >
      <button
        className="cart-preview__close"
        onClick={hideCartPreviewHandler}
      ></button>
      {cart.length > 0 ? (
        <ul className="cart-preview__list">
          {cart.map((game) => (
            <CartPreviewItem {...game} key={game.id} />
          ))}
        </ul>
      ) : (
        <div className="cart-preview__empty">
          <img src="images/empty-box.png" width={120} alt="empty-cart" />
          <span>{`Корзина пуста :(`}</span>
        </div>
      )}
      <CartTotal>
        <span>
          <Link to="/cart">Перейти в корзину</Link>
        </span>
      </CartTotal>
    </div>
  )
}

export default CartPreview
