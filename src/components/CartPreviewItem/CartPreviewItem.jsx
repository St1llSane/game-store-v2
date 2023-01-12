import { BsPlusLg } from 'react-icons/bs'
import './cart-preview-item.scss'

function CartPreviewItem() {
  return (
    <li className='cart-preview-item'>
      <img src="" alt="game_img" />
      <div className='cart-preview-item__content'>
        <div className='cart-preview-item__info'>
          <h6>Name</h6>
          <span>1000 руб.</span>
        </div>
        <button>
          <BsPlusLg />
        </button>
      </div>
    </li>
  )
}

export default CartPreviewItem

