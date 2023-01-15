import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeGenre: '',
}

const activeGenre = createSlice({
  name: 'activeGenre',
  initialState,
  reducers: {
    setActiveGenre: (state, action) => {
      state.activeGenre = action.payload
    },
    resetActiveGenre: (state) => {
      state.activeGenre = ''
    },
  },
})

export const activeGenreSelector = (state) => state.activeGenre.activeGenre

export const { setActiveGenre, resetActiveGenre } = activeGenre.actions

export default activeGenre.reducer
