import { useState } from 'react'
import { useDispatch } from 'react-redux'
import './search-input.scss'

function SearchInput() {
  const dispatch = useDispatch()
	const [value, setValue] = useState('')


  const onSearchInput = (e) => {
    setValue(e.target.value)
  }

	const onResetInput = () => {
		setValue('')
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
        <button
          className='search-input__btn'
					onClick={onResetInput}
        ></button>
      )}
    </div>
  )
}

export default SearchInput
