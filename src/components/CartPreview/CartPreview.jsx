import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setIsVisible } from '../../redux/slices/cartPreviewSlice'
import { cartSelector } from '../../redux/slices/cartGamesSlice'
import {
  currentGameSelector,
  resetCurrentGame,
} from '../../redux/slices/gamesSlice'
import './cart-preview.scss'
import CartPreviewItem from '../CartPreviewItem'
import CartTotal from '../UI/CartTotal'
import CartEmpty from '../UI/CartEmpty'

function CartPreview() {
  const dispatch = useDispatch()
  const cart = useSelector(cartSelector)
  const currentGame = useSelector(currentGameSelector)

  const hidePreviewHandler = () => {
    dispatch(setIsVisible(false))
  }

  const onMoveToCartHandler = () => {
    hidePreviewHandler()
    if (currentGame) {
      dispatch(resetCurrentGame())
    }
    return
  }

  return (
    <div className="cart-preview">
      <button
        className="cart-preview__close"
        onClick={hidePreviewHandler}
      ></button>
      {cart.length > 0 ? (
        <ul className="cart-preview__list">
          {cart.map((game) => (
            <CartPreviewItem game={game} key={game.id} />
          ))}
        </ul>
      ) : (
        <CartEmpty />
      )}
      <CartTotal>
        <span>
          <Link to="/cart" onClick={onMoveToCartHandler}>
            Перейти в корзину
          </Link>
        </span>
      </CartTotal>
    </div>
  )
}

export default CartPreview
