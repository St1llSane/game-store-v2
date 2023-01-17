import { BiSearchAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  addToCart,
  removeFromCart,
  cartSelector,
} from '../../redux/slices/cartGamesSlice'
import { setCurrentGame } from '../../redux/slices/gamesSlice'
import './home-item.scss'

function HomeItem({ game }) {
  const dispatch = useDispatch()
  const cart = useSelector(cartSelector)
  const isGameInCart = cart.some((item) => +item.id === +game.id)

  const addGameToCartHandler = () => {
    const gameIsFounded = cart.find((item) => +item.id === +game.id)

    if (gameIsFounded) {
      dispatch(removeFromCart(game.id))
    } else {
      dispatch(addToCart(game))
    }
  }

  return (
    <div className="home-item">
      <Link
        to={`/${game.name}`}
        className="home-item__img"
        onClick={() => dispatch(setCurrentGame(game))}
      >
        <BiSearchAlt />
        <img src={game.img} alt="game-image" />
      </Link>
      <div className="home-item__content">
        <h3 className="home-item__content-title">{name}</h3>
        <ul className="home-item__content-genres">
          {game.genres.map((genre) => (
            <li key={genre}>
              <button>{genre}</button>
            </li>
          ))}
        </ul>
        <div className="home-item__content-buy">
          <span>{game.price} руб.</span>
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
