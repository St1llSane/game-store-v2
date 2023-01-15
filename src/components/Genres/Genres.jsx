import { useDispatch, useSelector } from 'react-redux'
import { gamesSelector } from '../../redux/slices/gamesSlice'
import {
  resetActiveGenre,
  setActiveGenre,
} from '../../redux/slices/activeGenre'
import './genres.scss'

function Genres() {
  const dispatch = useDispatch()
  const { games } = useSelector(gamesSelector)

	// Надо пофиксить баг с жанрами при выобре одного из них
  const genres = [...new Set(games.map((game) => game.genres).flat())].sort()

  const setGenreHandler = (e) => {
    if (e.target.innerText === 'Все') {
      dispatch(resetActiveGenre())
    } else {
      dispatch(setActiveGenre(e.target.innerText))
    }
  }

  return (
    <div className="genres">
      <h3 className="genres__title">Жанры</h3>
      <ul className="genres__list">
        <li>
          <button onClick={setGenreHandler}>Все</button>
        </li>
        {genres.map((genre) => (
          <li key={genre}>
            <button onClick={setGenreHandler}>{genre}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Genres
