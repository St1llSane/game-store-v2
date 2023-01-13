import PageTop from '../../components/UI/PageTop/PageTop'
import CartTotal from '../../components/UI/CartTotal'
import './cart.scss'
import CartItem from '../../components/CartItem/CartItem'

function Cart() {
  return (
    <div className="cart">
      <PageTop>Корзина</PageTop>
      <div className="cart__content">
        <ul className="cart__items"><CartItem /></ul>
        <CartTotal />
      </div>
      {/* <div className="cart__empty">
        <img src="images/empty-box.png" width={200} alt="empty-box" />
        <span>{`Корзина пуста :(`}</span>
      </div> */}
    </div>
  )
}

export default Cart
