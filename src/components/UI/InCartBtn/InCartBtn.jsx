import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  cartSelector,
  addToCart,
  removeFromCart,
} from '../../../redux/slices/cartGamesSlice'
import { setCurrentGame } from '../../../redux/slices/gamesSlice'
import './in-cart-btn.scss'

function InCartBtn({ game }) {
  const dispatch = useDispatch()
  const cart = useSelector(cartSelector)
  const isGameInCart = cart.some((item) => +item.id === +game.id)
  const gameIsFounded = cart.find((item) => +item.id === +game.id)

  console.log('render')

  const addGameToCartHandler = () => {
    if (gameIsFounded) {
      dispatch(removeFromCart(game.id))
    } else {
      dispatch(setCurrentGame(game))
      dispatch(addToCart(game))
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
