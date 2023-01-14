import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  inputValue: '',
}

const searchGamesSlice = createSlice({
  name: 'searchGames',
  initialState,
  reducers: {
    setSearchGames: (state, action) => {
      state.inputValue = action.payload
    },
    resetSearchGames: (state) => {
      state.inputValue = ''
    },
  },
})

export const searchInputSelector = (state) => state.searchGamesSlice.inputValue

export const { setSearchGames, resetSearchGames } = searchGamesSlice.actions

export default searchGamesSlice.reducer
