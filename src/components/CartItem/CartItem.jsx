import { BiSearchAlt } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromCart } from '../../redux/slices/cartGamesSlice'
import { setCurrentGame } from '../../redux/slices/currentGameSlice'
import './cart-item.scss'

function CartItem({ game }) {
  const dispatch = useDispatch()

  const removeGameHandler = () => {
    dispatch(removeFromCart(game.id))
  }

  return (
    <li className="cart-item">
      <div className="cart-item__left">
        <Link
          to={`/${game.name}`}
          className="cart-item__left-img"
          onClick={() => dispatch(setCurrentGame(game))}
        >
          <BiSearchAlt />
          <img src={game.img} alt="item-img" />
        </Link>
        <div className="cart-item__content">
          <h4 className="cart-item__content-name">{game.name}</h4>
          <span className="cart-item__content-price">{game.price} руб.</span>
        </div>
      </div>
      <div className="cart-item__right" onClick={removeGameHandler}>
        <button>Удалить</button>
      </div>
    </li>
  )
}

export default CartItem
