import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { isVisibleSelector, setIsVisible } from '../../redux/slices/cartPreview'
import { RiShoppingCartLine } from 'react-icons/ri'
import { SlWallet } from 'react-icons/sl'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'
import SearchInput from '../UI/SearchInput/SearchInput'
import CartPreview from '../UI/CartPreview'
import './header.scss'

function Header() {
  const dispatch = useDispatch()

  const  isCartPreviewVisible  = useSelector(isVisibleSelector)
	console.log(isCartPreviewVisible)

  const visibilityCartPreviewHandler = () => {
    dispatch(setIsVisible(!isCartPreviewVisible))
  }

  return (
    <header className="header">
      <Link to="/" className="header__logo">
        Game Store
      </Link>
      <SearchInput />
      <div className="header__right">
        <div className="header__right-cart">
          <Link to="/cart" className="header__right-cart_btn">
            <RiShoppingCartLine />
            <span>0</span>
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
