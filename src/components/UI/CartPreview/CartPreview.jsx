import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { isVisibleSelector } from '../../../redux/slices/cartPreview'
import './cart-preview.scss'
import CartPreviewItem from '../../CartPreviewItem'
import CartTotal from '../CartTotal'

function CartPreview() {
  const isCartPreviewVisible = useSelector(isVisibleSelector)

  return (
    <div
      className={`cart-preview ${
        isCartPreviewVisible ? 'cart-preview--active' : ''
      }`}
    >
      <ul className="cart-preview__list">
        <CartPreviewItem />
      </ul>
      {/* <div className="cart-preview__empty">
        <img src="images/empty-box.png" width={120} alt="empty-cart" />
        <span>{`Корзина пуста :(`}</span>
      </div> */}
      <CartTotal>
        <Link to="/cart">
          <button>Перейти в корзину</button>
        </Link>
      </CartTotal>
    </div>
  )
}

export default CartPreview
