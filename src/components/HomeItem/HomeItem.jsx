import { BiSearchAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import InCartBtn from '../UI/InCartBtn/InCartBtn'
import './home-item.scss'

function HomeItem({ img, name, genres, price }) {
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
          <InCartBtn />
        </div>
      </div>
    </div>
  )
}

export default HomeItem
