import { configureStore } from '@reduxjs/toolkit'
import gamesSlice from './slices/gamesSlice'
import searchGamesSlice from './slices/searchGamesSlice'
import cartPreview from './slices/cartPreview'

export const store = configureStore({
  reducer: {
    gamesSlice,
    searchGamesSlice,
    cartPreview,
  },
})
