import { BiSearchAlt } from 'react-icons/bi'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  addToCart,
  removeFromCart,
  cartSelector,
} from '../../redux/slices/cartGames'
import './home-item.scss'

function HomeItem({ id, img, name, genres, price }) {
  const dispatch = useDispatch()
  const [addBtnIsActive, setAddBtnIsActive] = useState(false)

  const cart = useSelector(cartSelector)

  const addGameToCartHandler = () => {
    const thisGame = { id, img, name, price }
    const gameToRemove = cart.find((item) => +item.id === +thisGame.id)

    if (gameToRemove) {
      dispatch(removeFromCart(cart.filter((item) => +item.id !== +thisGame.id)))
      setAddBtnIsActive(false)
    } else {
      dispatch(addToCart([...cart, thisGame]))
      setAddBtnIsActive(true)
    }
  }

  return (
    <div className="home-item">
      <Link to="/" className="home-item__img">
        <BiSearchAlt />
        <img src={img} alt="game-image" />
      </Link>
      <div className="home-item__content">
        <h3 className="home-item__content-title">{name}</h3>
        <ul className="home-item__content-genres">
          {genres.map((genre) => (
            <li key={genre}>
              <button>{genre}</button>
            </li>
          ))}
        </ul>
        <div className="home-item__content-buy">
          <span>{price} руб.</span>
          <button
            className={`home-item__content-buy_btn ${
              addBtnIsActive ? 'home-item__content-buy_btn--active' : ''
            }`}
            onClick={addGameToCartHandler}
          >
            {addBtnIsActive ? 'Удалить' : 'Добавить'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomeItem
