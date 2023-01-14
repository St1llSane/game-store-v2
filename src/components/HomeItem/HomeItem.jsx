import { BiSearchAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  addToCart,
  removeFromCart,
  cartSelector,
} from '../../redux/slices/cartGamesSlice'
import './home-item.scss'

function HomeItem({ id, img, name, genres, price }) {
  const dispatch = useDispatch()

  const cart = useSelector(cartSelector)
  const thisGame = { id, img, name, price }
  const isGameInCart = cart.some((game) => +game.id === +id)

  const addGameToCartHandler = () => {
    const gameIsFounded = cart.find((item) => +item.id === +thisGame.id)

    if (gameIsFounded) {
      dispatch(removeFromCart(id))
    } else {
      dispatch(addToCart(thisGame))
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
              isGameInCart ? 'home-item__content-buy_btn--active' : ''
            }`}
            onClick={addGameToCartHandler}
          >
            {isGameInCart ? 'Удалить' : 'Добавить'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomeItem
