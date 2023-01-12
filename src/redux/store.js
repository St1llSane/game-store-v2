import { configureStore } from '@reduxjs/toolkit'
import gamesSlice from './slices/gamesSlice'
import searchGamesSlice from './slices/searchGamesSlice'

export const store = configureStore({
  reducer: {
    gamesSlice,
    searchGamesSlice,
  },
})
