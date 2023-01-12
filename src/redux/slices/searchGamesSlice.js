import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  inputValue: '',
}

const searchGamesSlice = createSlice({
  name: 'searchGamesQuery',
  initialState,
  reducers: {
    setSearchGames: (state, action) => {
      state.inputValue = action.payload
    },
  },
})

export const searchInputSelector = (state) => state.inputValue

export const { setSearchGames } = searchGamesSlice.actions

export default searchGamesSlice.reducer
