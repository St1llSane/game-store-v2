import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  resetSearchGames,
  setSearchGames,
} from '../../../redux/slices/searchGamesSlice'
import './search-input.scss'

function SearchInput() {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')

  const onSearchInput = (e) => {
    setValue(e.target.value)
    dispatch(setSearchGames(e.target.value))
  }

  const onResetInput = () => {
    setValue('')
    dispatch(resetSearchGames())
  }

  return (
    <div className="search-input">
      <input
        className="search-input__field"
        type="text"
        placeholder="Поиск..."
        value={value}
        onChange={onSearchInput}
      />
      {value.length > 0 && (
        <button className="search-input__btn" onClick={onResetInput}></button>
      )}
    </div>
  )
}

export default SearchInput
