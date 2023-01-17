import { BiSearchAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCurrentGame } from '../../redux/slices/gamesSlice'
import './home-item.scss'
import InCartBtn from '../UI/InCartBtn'

function HomeItem({ game }) {
  const dispatch = useDispatch()

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
        <h3 className="home-item__content-title">{game.name}</h3>
        <ul className="home-item__content-genres">
          {game.genres.map((genre) => (
            <li key={genre}>
              <button>{genre}</button>
            </li>
          ))}
        </ul>
        <div className="home-item__content-buy">
          <span>{game.price} руб.</span>
          <InCartBtn game={game} />
        </div>
      </div>
    </div>
  )
}

export default HomeItem
