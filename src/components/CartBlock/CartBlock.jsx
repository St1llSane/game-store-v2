import { useEffect, useRef } from 'react'
import { RiShoppingCartLine } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { cartSelector } from '../../redux/slices/cartGamesSlice'
import {
  isVisibleSelector,
  setIsVisible,
} from '../../redux/slices/cartPreviewSlice'
import CartPreview from '../CartPreview'
import './cart-block.scss'

function CartBlock() {
  const dispatch = useDispatch()
  const gamesInCart = useSelector(cartSelector)
  const isCartPreviewVisible = useSelector(isVisibleSelector)
  const cartBlockRef = useRef(null)

	useEffect(() => {
		const outsideCartPreviewClick = (e) => {
			if (!e.composedPath().includes(cartBlockRef.current)) {
				dispatch(setIsVisible(false))
			}
		}

		if (isCartPreviewVisible) {
			document.body.addEventListener('click', outsideCartPreviewClick)
		}
		return () =>
			document.body.removeEventListener('click', outsideCartPreviewClick)
	})
	
  const onCartClickHandler = () => {
    dispatch(setIsVisible(!isCartPreviewVisible))
  }


  return (
    <div className="cart-block" ref={cartBlockRef}>
      <button className="cart-block__btn" onClick={onCartClickHandler}>
        <RiShoppingCartLine />
        <span>{gamesInCart.length}</span>
      </button>
      {isCartPreviewVisible ? <CartPreview /> : null}
    </div>
  )
}

export default CartBlock
