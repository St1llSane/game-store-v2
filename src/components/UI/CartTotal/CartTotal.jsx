import './cart-total.scss'

function CartTotal({ children }) {
  // if (cartGames.length > 0) {
  //   cartTotalPrice = cartGames.reduce((summ, game) => summ + game.price, 0)
  // }

  return (
    <div className="cart-total">
      <ul className="cart-total__info">
        <li className="cart-total__info-item">
          <div>Товаров:</div>
          <span></span>
          <div>0 шт.</div>
        </li>
        <li className="cart-total__info-item">
          <div>К оплате:</div>
          <span></span>
          <div>0 руб.</div>
        </li>
      </ul>
      {children}
    </div>
  )
}

export default CartTotal
