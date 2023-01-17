import { useSelector } from 'react-redux'
import { cartSelector } from '../../redux/slices/cartGamesSlice'
import PageTop from '../../components/UI/PageTop/PageTop'
import CartTotal from '../../components/UI/CartTotal'
import CartItem from '../../components/CartItem'
import './cart.scss'

function Cart() {
  const cartGames = useSelector(cartSelector)

  return (
    <div className="cart">
      <PageTop>Корзина</PageTop>
      <div className="cart__content">
        <ul className="cart__items">
          {cartGames.map((game) => (
            <CartItem game={game} key={game.id} />
          ))}
        </ul>
        {cartGames.length > 0 ? <CartTotal /> : null}
      </div>
      {cartGames.length == 0 ? (
        <div className="cart__empty">
          <img src="images/empty-box.png" width={230} alt="empty-box" />
          <span>{`Корзина пуста :(`}</span>
        </div>
      ) : null}
    </div>
  )
}

export default Cart
