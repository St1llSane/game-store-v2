import './search-input.scss'

function SearchInput() {
  return (
    <div className='search-input'>
      <input
        className='search-input__field'
        type="text"
        placeholder="Поиск..."
      />
      {/* {searchGamesQuery && (
        <button
          className='search-input__btn'
        ></button>
      )} */}
    </div>
  )
}

export default SearchInput
