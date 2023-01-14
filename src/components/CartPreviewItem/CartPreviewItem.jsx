import { BsPlusLg } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../redux/slices/cartGames'
import './cart-preview-item.scss'

function CartPreviewItem({ id, img, name, price }) {
  const dispatch = useDispatch()

  const removeGameHandler = () => {
    dispatch(removeFromCart(id))
  }

  return (
    <li className="cart-preview-item">
      <img src={img} alt="game_img" />
      <div className="cart-preview-item__content">
        <div className="cart-preview-item__info">
          <h6>{name}</h6>
          <span>{price} руб.</span>
        </div>
        <button onClick={removeGameHandler}>
          <BsPlusLg />
        </button>
      </div>
    </li>
  )
}

export default CartPreviewItem
