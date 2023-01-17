import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { SlWallet } from 'react-icons/sl'
import {
  currentGameSelector,
  resetCurrentGame,
} from '../../redux/slices/gamesSlice'
import SearchInput from '../UI/SearchInput/SearchInput'
import CartBlock from '../CartBlock/CartBlock'
import './header.scss'

function Header() {
  const dispatch = useDispatch()
  const currentGame = useSelector(currentGameSelector)

  const resetCurrentGameHandler = () => {
    if (currentGame) {
      dispatch(resetCurrentGame())
    }
    return
  }

  return (
    <header className="header">
      <Link to="/" className="header__logo" onClick={resetCurrentGameHandler}>
        Game Store
      </Link>
      <SearchInput />
      <div className="header__right">
        <CartBlock />
        <button className="header__right-money">
          <SlWallet />
          <span>5000 руб.</span>
        </button>
      </div>
    </header>
  )
}

export default Header
