import { Link } from 'react-router-dom'
import { IoArrowUndoOutline } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { resetCurrentGame } from '../../../redux/slices/currentGameSlice'
import './page-top.scss'

function PageTop({ children }) {
  const dispatch = useDispatch()

  return (
    <div className="page-top">
      <Link to="/" onClick={() => dispatch(resetCurrentGame())}>
        <button className="page-top__btn">
          <IoArrowUndoOutline />
        </button>
      </Link>
      <h2 className="page-top__text">{children}</h2>
    </div>
  )
}

export default PageTop
