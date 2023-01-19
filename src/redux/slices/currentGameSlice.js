import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentGame: null,
}

export const currentGameSlice = createSlice({
  name: 'currentGame',
  initialState,
  reducers: {
    setCurrentGame: (state, action) => {
      state.currentGame = action.payload
    },
    resetCurrentGame: (state) => {
      state.currentGame = null
    },
  },
})

export const currentGameSelector = (state) => state.currentGameSlice.currentGame

export const { setCurrentGame, resetCurrentGame } = currentGameSlice.actions

export default currentGameSlice.reducer
