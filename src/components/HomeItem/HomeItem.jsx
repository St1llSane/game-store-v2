import { BiSearchAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import InCartBtn from '../UI/InCartBtn/InCartBtn'
import './home-item.scss'

function HomeItem() {
  return (
    <div className="home-item">
      <Link to="/" className="home-item__img">
        <BiSearchAlt />
        <img src="" alt="game-image" />
      </Link>
      <div className="home-item__content">
        <h3 className="home-item__content-title">Name</h3>
        <ul className="home-item__content-genres">
          <li>
            <button>Genres</button>
          </li>
        </ul>
        <div className="home-item__content-buy">
          <span>2000 руб.</span>
					<InCartBtn />
        </div>
      </div>
    </div>
  )
}

export default HomeItem
