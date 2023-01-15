import debounce from 'lodash.debounce'
import { useCallback, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  resetSearchGames,
  setSearchGames,
} from '../../../redux/slices/searchGamesSlice'
import './search-input.scss'

function SearchInput() {
  const dispatch = useDispatch()
  const inputRef = useRef(null)
  const [value, setValue] = useState('')

  const searchDebounce = useCallback(
    debounce((value) => {
      dispatch(setSearchGames(value))
    }, 800),
    []
  )

  const onSearchInput = (e) => {
    setValue(e.target.value)
    searchDebounce(e.target.value)
  }

  const onResetInput = () => {
    setValue('')
    dispatch(resetSearchGames())
    inputRef.current.focus()
  }

  return (
    <div className="search-input">
      <input
        className="search-input__field"
        type="text"
        placeholder="Поиск..."
        value={value}
        ref={inputRef}
        onChange={onSearchInput}
      />
      {value.length > 0 && (
        <button className="search-input__btn" onClick={onResetInput}></button>
      )}
    </div>
  )
}

export default SearchInput
