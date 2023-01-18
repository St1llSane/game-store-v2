import './cart-empty.scss'

function CartEmpty() {
  return (
    <div className="cart-empty">
      <img src="images/empty-box.png" width={230} alt="empty-box" />
      <span>{`Корзина пуста :(`}</span>
    </div>
  )
}

export default CartEmpty
