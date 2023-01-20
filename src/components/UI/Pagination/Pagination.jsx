import { useDispatch, useSelector } from 'react-redux'
import { gamesSelector } from '../../../redux/slices/gamesSlice'
import {
  paginationSelector,
  setCurrentPage,
} from '../../../redux/slices/paginationSlice'
import './pagination.scss'

function Pagination() {
  const dispatch = useDispatch()
  const { games } = useSelector(gamesSelector)
  const { gamesPerPage } = useSelector(paginationSelector)
  const pagesNumbers = []

  for (let i = 1; i <= Math.ceil(games.length / gamesPerPage); i++) {
    pagesNumbers.push(i)
  }

  return (
    <ul className="pagination">
      {pagesNumbers.map((number) => (
        <li key={number} onClick={() => dispatch(setCurrentPage(number))}>
          {number}
        </li>
      ))}
    </ul>
  )
}

export default Pagination
