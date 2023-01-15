import { BiSearchAlt } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../redux/slices/cartGamesSlice'
import './cart-item.scss'

function CartItem({ id, img, name, price }) {
  const dispatch = useDispatch()

  const removeGameHandler = () => {
    dispatch(removeFromCart(id))
  }

  return (
    <li className="cart-item">
      <div className="cart-item__left">
        <a href="#" className="cart-item__left-img">
          <BiSearchAlt />
          <img src={img} alt="item-img" width={205} height={116} />
        </a>
        <div className="cart-item__content">
          <h4 className="cart-item__content-name">{name}</h4>
          <span className="cart-item__content-price">{price} руб.</span>
        </div>
      </div>
      <div className="cart-item__right" onClick={removeGameHandler}>
        <button>Удалить</button>
      </div>
    </li>
  )
}

export default CartItem
