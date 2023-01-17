import { BsPlusLg } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../redux/slices/cartGamesSlice'
import './cart-preview-item.scss'

function CartPreviewItem({ game }) {
  const dispatch = useDispatch()

  const removeGameHandler = () => {
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
