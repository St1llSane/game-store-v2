import { Link } from 'react-router-dom'
import { IoArrowUndoOutline } from 'react-icons/io5'
import './page-top.scss'

function PageTop({ children }) {
  return (
    <div className="page-top">
      <Link to="/">
        <button className="page-top__btn">
          <IoArrowUndoOutline />
        </button>
      </Link>
      <div className="page-top__text">{children}</div>
    </div>
  )
}

export default PageTop
