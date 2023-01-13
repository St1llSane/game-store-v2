import { BiSearchAlt } from 'react-icons/bi'
import './cart-item.scss'

function CartItem() {
  return (
    <li className="cart-item">
      <div className="cart-item__left">
        <a href="#" className="cart-item__left-img">
          <BiSearchAlt />
          <img src="" alt="item-img" width={205} height={116} />
        </a>
        <div className="cart-item__content">
          <h4 className="cart-item__content-name">Name</h4>
          <span className="cart-item__content-price">1000 руб.</span>
        </div>
      </div>
      <div className="cart-item__right">
        <button>Удалить</button>
      </div>
    </li>
  )
}

export default CartItem
