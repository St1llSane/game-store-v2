import { useDispatch, useSelector } from 'react-redux'
import {
  cartSelector,
  addToCart,
  removeFromCart,
} from '../../../redux/slices/cartGamesSlice'
import { currentGameSelector } from '../../../redux/slices/gamesSlice'
import './in-cart-btn.scss'

function InCartBtn() {
  const dispatch = useDispatch()
  const cart = useSelector(cartSelector)
  const currentGame = useSelector(currentGameSelector)
  const isGameInCart = cart.some((game) => +game.id === +currentGame.id)

  const addGameToCartHandler = () => {
    const gameIsFounded = cart.find((item) => +item.id === +currentGame.id)

    if (gameIsFounded) {
      dispatch(removeFromCart(currentGame.id))
    } else {
      dispatch(addToCart(currentGame))
    }
  }

  return (
    <button
      className={`home-item__content-buy_btn ${
        isGameInCart ? 'home-item__content-buy_btn--active' : ''
      }`}
      onClick={addGameToCartHandler}
    >
      {isGameInCart ? 'Удалить' : 'Добавить'}
    </button>
  )
}

export default InCartBtn
