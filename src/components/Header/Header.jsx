import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'
import { RiShoppingCartLine } from 'react-icons/ri'
import { SlWallet } from 'react-icons/sl'
import {
  isVisibleSelector,
  setIsVisible,
} from '../../redux/slices/cartPreviewSlice'
import {
  currentGameSelector,
  resetCurrentGame,
} from '../../redux/slices/gamesSlice'
import { cartSelector } from '../../redux/slices/cartGamesSlice'
import SearchInput from '../UI/SearchInput/SearchInput'
import CartPreview from '../UI/CartPreview'
import './header.scss'

function Header() {
  const dispatch = useDispatch()
  const currentGame = useSelector(currentGameSelector)
  const isCartPreviewVisible = useSelector(isVisibleSelector)
  const gamesInCart = useSelector(cartSelector)

  const resetCurrentGameHandler = () => {
    if (currentGame) {
      dispatch(resetCurrentGame())
    }
    return
  }

  const visibilityCartPreviewHandler = () => {
    dispatch(setIsVisible(!isCartPreviewVisible))
  }

  return (
    <header className="header">
      <Link to="/" className="header__logo" onClick={resetCurrentGameHandler}>
        Game Store
      </Link>
      <SearchInput />
      <div className="header__right">
        <div className="header__right-cart">
          <Link
            to="/cart"
            className="header__right-cart_btn"
            onClick={resetCurrentGameHandler}
          >
            <RiShoppingCartLine />
            <span>{gamesInCart.length}</span>
          </Link>
          <button
            className="header__right-cart_toggle"
            onClick={visibilityCartPreviewHandler}
          >
            {isCartPreviewVisible ? <BsEyeFill /> : <BsEyeSlashFill />}
          </button>
          <CartPreview />
        </div>
        <button className="header__right-money">
          <SlWallet />
          <span>5000 руб.</span>
        </button>
      </div>
    </header>
  )
}

export default Header
