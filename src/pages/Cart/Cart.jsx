import { useSelector } from 'react-redux'
import { cartSelector } from '../../redux/slices/cartGamesSlice'
import PageTop from '../../components/UI/PageTop/PageTop'
import CartTotal from '../../components/UI/CartTotal'
import CartItem from '../../components/CartItem'
import CartEmpty from '../../components/UI/CartEmpty'
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
        <CartEmpty />
      ) : null}
    </div>
  )
}

export default Cart
